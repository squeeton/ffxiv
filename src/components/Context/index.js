import React, { Component } from 'react'

const AppContext = React.createContext();

export class Provider extends Component {
    state = {
        classJobs: [],
        data: [],
        items: [],
        itemSpecifics: [],
        loadPercent: 0,
        loadIncrementAmount: 0,
        pageNumber: 1,
        pageTotal: 0,
        totalResults: 0,
        specificPages: 0,
        specificPage: 1
    }


    //TODO:: add item pictures for each item

    componentDidMount() {
        console.log('Fetching Data');
        this.FetchClasses();
        this.FetchData(this.state.pageNumber);
        // this.FetchItemSpecifics(105);
    }

    FetchClasses() {
        fetch('https://xivapi.com/classJob?columns=ID,Name', { mode: 'cors' })
            .then(response => response.json()
            )
            .then(response => {
                this.setState({
                    classJobs: response.Results
                })
            });
    }

    FetchData(pageNum) {
        let itemIDs;

        fetch(`https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=${pageNum}&columns=ID`, { mode: 'cors' })
            .then(response => { return response.json() }
            )
            .then(response => {
                itemIDs = response.Results.map((i) => { return (i.ID); }).toString();
                var loadIncrementAmount = ((1 / (response.Pagination.PageTotal * 2) * 100));

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
            LastWeekQuantity: i.Goblin.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).map(item => item.Quantity).reduce((prev, next) => prev + next, 0)
        }));

        this.setState({
            items: items,
            data: []
        })
        this.FetchItemSpecifics(1);
    }

    FetchItemSpecifics(pageNum) {

        fetch(`https://xivapi.com/search?page=${pageNum}`, {
            method: 'POST',
            body: '{"indexes": "item","columns": "ID,Recipes,Rarity","body": {"query": {"bool": {"filter": [{"range": {"ItemSearchCategory.ID": {"gt": "9"}}}]}},"from": 0,"size": 100,"sort": [{"LevelItem": "desc"}]}}'
        })
            .then(response => {
                return response.json()
            })
            .then(data => {

                this.setState(prevState => ({
                    specificPage: data.Pagination.Page,
                    specificPages: data.Pagination.PageTotal,
                    itemSpecifics: [
                        ...prevState.itemSpecifics,
                        ...data.Results
                    ]
                }));

                return data.Pagination.PageNext;
            })
            .then(nextPage => {

                if (nextPage != null) {
                    setTimeout(this.FetchItemSpecifics(nextPage), 200);
                }
                else {
                    this.MergeItemSpecifics();
                }
            })
    }

    MergeItemSpecifics() {
        var index = {};
        for (var j in this.state.itemSpecifics) {
            var obj = this.state.itemSpecifics[j];
            index[obj.ID] = obj;
        }

        var itemList = this.state.items;

        itemList = itemList.map(i => {
            let crafter;
            let rarity;
            if (index[i.Item.ID]) {
                if (index[i.Item.ID].Recipes === null) {
                    crafter = null;
                }
                else {
                    crafter = this.GetClass(index[i.Item.ID].Recipes[0].ClassJobID);
                }
                rarity = this.GetRarity(index[i.Item.ID].Rarity);
            }

            return {
                ...i,
                Crafter: crafter,
                Rarity: rarity
            }
        });

        this.setState(prevState => ({
            items: itemList
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
                itemSpecifics: this.state.itemSpecifics,
                loadPercent: this.state.loadPercent,
                specificPages: this.state.specificPages,
                specificPage: this.state.specificPage,
                actions: {}
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
export const Consumer = AppContext.Consumer;