import React, { Component } from 'react'

const AppContext = React.createContext();

export class Provider extends Component {
    state = {
        classJobs: [],
        data: [],
        items: [],
        recipe: [],
        loadPercent: 0,
        loadIncrementAmount: 0,
        pageNumber: 1,
        pageTotal: 0,
        totalResults: 0,
        specificLoaded: 0,
        specificTotal: 100
    }


    //TODO:: add item pictures for each item
    test() {
        fetch(`https://xivapi.com/search?page=${1}`, {
            method: 'POST',
            body: '{"indexes": "item","columns": "ID,Recipes","body": {"query": {"bool": {"filter": [{"range": {"ItemSearchCategory.ID": {"gte": "9"}}}]}},"from": 0,"size": 100,"sort": [{"LevelItem": "desc"}]}}'
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log('recipe response', data);
            });
    }

    componentDidMount() {
        console.log('Fetching Data');
        this.FetchClasses();
        this.FetchData(this.state.pageNumber);
        // this.FetchRecipes();

    }

    FetchClasses() {
        fetch('https://xivapi.com/classJob?columns=ID,Name', { mode: 'cors' })
            .then(response => response.json()
            )
            .then(response => {
                this.setState({
                    classJobs: response.Results
                })
                // this.test()
                // console.log('classes response:', response.Results);
            });
    }

    FetchData(pageNum) {
        let itemIDs;

        fetch(`https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=${pageNum}&columns=ID`, { mode: 'cors' })
            .then(response => { return response.json() }
            )
            .then(response => {
                // console.log('itemList Initial Response', response);
                itemIDs = response.Results.map((i) => { return (i.ID); }).toString();
                var loadIncrementAmount = ((1 / (response.Pagination.PageTotal * 2) * 100));
                // console.log(response);
                this.setState(prevState => ({
                    pageTotal: response.Pagination.PageTotal,
                    pageNumber: response.Pagination.PageNext,
                    loadIncrementAmount: loadIncrementAmount,
                    totalResults: response.Pagination.ResultsTotal,
                    loadPercent: prevState.loadPercent + loadIncrementAmount
                }));


                fetch(`https://xivapi.com/market/items?servers=Goblin&ids=${itemIDs}`, { mode: 'cors' })
                    .then(response => response.json())
                    .then(data => {
                        // console.log('item data Response', data);

                        this.setState(prevState => ({
                            data: [...prevState.data,
                            ...data],
                            loadPercent: prevState.loadPercent + prevState.loadIncrementAmount
                        }));
                    })
                    .then(data => {
                        if (this.state.data.length === this.state.totalResults) {
                            this.FormatData();
                            this.setState({
                                loadPercent: 100
                            }
                            );
                        }
                    })
                return response.Pagination.PageNext;
            })
            .then(nextPageNum => {
                if (nextPageNum !== null) {
                    setTimeout(this.FetchData(this.state.pageNumber), 200);
                }
            }
            );
    }

    FormatData() {

        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        let items = this.state.data;
        // console.log('items:', items);

        items = items.map(i => ({
            ...i.Goblin,
            MinPrice: i.Goblin.Prices.reduce((prev, current) =>
                (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).PricePerUnit || 0,
            MinPriceQuantity: i.Goblin.Prices.reduce((prev, current) =>
                (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).Quantity || 0,
            MinPriceHQ: i.Goblin.Prices.filter(({ IsHQ }) => IsHQ === true).reduce((prev, current) =>
                (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).PricePerUnit || 0,
            LastWeekGil: i.Goblin.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).map(item => item.PriceTotal).reduce((prev, next) => prev + next, 0),
            LastWeekTransactions: i.Goblin.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).length,
            LastWeekQuantity: i.Goblin.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).map(item => item.Quantity).reduce((prev, next) => prev + next, 0),
            Rarity: this.GetRarity(i.Goblin.Item.Rarity)
        }));

        this.setState({
            items: items,
            data: []
        })
        this.FetchRecipes();
    }

    FetchRecipes() {
        fetch(`https://xivapi.com/search`, {
            method: 'POST',
            body: `{"indexes": "item","columns": "ID,Recipes","body": {"query": {"bool": {"filter": [{"range": {"ItemSearchCategory.ID": {"gte": "9"}}}]}},"from": ${this.state.specificLoaded},"size": 100,"sort": [{"LevelItem": "desc"}]}}`
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log('recipe response', data);
                this.setState(prevState => ({
                    specificLoaded: prevState.specificLoaded + 100,
                    specificTotal: data.Pagination.ResultsTotal,
                    recipe: [
                        ...prevState.recipe,
                        ...data.Results
                    ]
                }));
                if (this.state.specificLoaded < data.Pagination.ResultsTotal) {
                    setTimeout(this.FetchRecipes(), 200);
                }
                else {
                    this.FormatRecipes()
                }
            });
    }

    FormatRecipes() {

        var recipe = this.state.recipe;
        for (var i = 0; i < recipe.length; i++) {
            recipe[i]["ItemID"] = recipe[i]["ID"];
            delete recipe[i]["ID"];
            let craftClass = '';
            let craftLvl;
            if (recipe[i].Recipes) {
                let classes = [];
                let lvl = [];
                for (var j = 0; j < recipe[i].Recipes.length; j++) {
                    classes.push(this.GetClass(recipe[i].Recipes[j].ClassJobID));
                    lvl.push(recipe[i].Recipes[j].Level);
                }
                craftClass = classes.join(', ');
                craftLvl = Math.min(lvl);
            }
            recipe[i].Crafters = craftClass;
            recipe[i].CraftLvl = craftLvl;
            delete recipe[i]["Recipes"];
        }

        this.setState({
            recipe: recipe
        });

        this.MergeRecipes();
    }

    MergeRecipes() {
        var items = this.state.items;
        var recipe = this.state.recipe;

        let merged = [];
        for (let i = 0; i < items.length; i++) {
            merged.push({
                ...items[i],
                ...(recipe.find((itmInner) => itmInner.ItemID === items[i].ItemID))
            }
            );
        }

        console.log('post merge', merged);

        this.setState(prevState => ({
            items: merged,
            recipe:[]
        }));
    }

    GetClass(id) {
        if (id === null) {
            return '';
        }
        var result = this.state.classJobs.find(obj => {
            return obj.ID === id;
        })
        return this.toTitleCase(result.Name);
    }

    GetRarity(id) {
        switch (id) {
            case 1: return 'Common'
            case 2: return 'Uncommon'
            case 3: return 'Rare'
            case 4: return 'Relic'
            case 7: return 'Aetherial'
            default: return 'Common'
        }
    }

    toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    render() {
        return (
            <AppContext.Provider value={{
                classJobs: this.state.classJobs,
                data: this.state.data,
                items: this.state.items,
                recipe: this.state.recipe,
                loadPercent: this.state.loadPercent,
                specificLoaded: this.state.specificLoaded,
                specificTotal: this.state.specificTotal,
                actions: {}
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
export const Consumer = AppContext.Consumer;