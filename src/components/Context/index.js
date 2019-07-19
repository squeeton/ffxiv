import React, { Component } from 'react'

const AppContext = React.createContext();

export class Provider extends Component {
    state = {
        data: [],
        items: [],
        loadPercent: 0,
        loadIncrementAmount: 0,
        pageNumber: 1,
        pageTotal: 0,
        loadedPages: [1]
    }


    componentDidMount() {
        console.log('Fetching Data');
        this.FetchInitial();
    }

    FetchInitial() {
        let itemIDs;
        let getItemIdUrl = `https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=${this.state.pageNumber}&columns=ID`;
        let url;


        fetch(getItemIdUrl, { mode: 'cors' })
            .then(response => response.json()
            )
            .then(response => {
                console.log('response', response);
                console.log(response.Pagination.Page);
                itemIDs = response.Results.map((i) => { return (i.ID); }).toString();

                url = `https://xivapi.com/market/items?servers=Goblin&ids=${itemIDs}`

                var loadIncrementAmount = ((1 / (response.Pagination.PageTotal * 2) * 100));

                // var loadIncrementAmount = 25;

                this.setState({
                    pageTotal: response.Pagination.PageTotal,
                    loadIncrementAmount: loadIncrementAmount,
                    loadPercent: loadIncrementAmount
                });

                fetch(url, { mode: 'cors' })
                    .then(response => response.json())
                    .then(data => {

                        const oneWeekAgo = new Date();
                        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

                        let items;
                        items = data.map((i) => { return i.Goblin });

                        items = items.map(i => ({
                            ...i,
                            MinPrice: i.Prices.reduce((prev, current) =>
                                (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).PricePerUnit,
                            MinPriceQuantity: i.Prices.reduce((prev, current) =>
                                (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).Quantity,
                            LastWeekGil: i.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).map(item => item.PriceTotal).reduce((prev, next) => prev + next, 0),
                            LastWeekTransactions: i.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).length,
                            LastWeekQuantity: i.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).map(item => item.Quantity).reduce((prev, next) => prev + next, 0)
                        }));

                        // console.log('data:', data);
                        // console.log('items:', items);


                        this.setState(prevState => ({
                            items: items,
                            data: data,
                            loadPercent: prevState.loadPercent + prevState.loadIncrementAmount
                        }));
                    })
                    .then(data => {
                        this.intervalID = setInterval(() => this.tick(), 200);
                        // this.setState({                            
                        //     loadPercent:100
                        // }
                        // );
                    }
                    )
            });
    }

    FetchNextPage() {

        let itemIDs;

        if (this.state.pageNumber !== this.state.pageTotal) {
            fetch(`https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=${this.state.pageNumber + 1}&columns=ID`, { mode: 'cors' })
                .then(response => response.json()
                )
                .then(response => {
                    console.log('response page:', response.Pagination.Page);
                    itemIDs = response.Results.map((i) => { return (i.ID); }).toString();

                    this.setState(prevState => ({
                        loadedPages: [...prevState.loadedPages,
                        response.Pagination.Page
                        ],
                        pageNumber: response.Pagination.Page,
                        loadPercent: prevState.loadPercent + prevState.loadIncrementAmount
                    }));

                    fetch(`https://xivapi.com/market/items?servers=Goblin&ids=${itemIDs}`, { mode: 'cors' })
                        .then(response => response.json())
                        .then(data => {

                            const oneWeekAgo = new Date();
                            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

                            let items;
                            items = data.map((i) => { return i.Goblin });

                            items = items.map(i => ({
                                ...i,
                                MinPrice: i.Prices.reduce((prev, current) =>
                                    (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).PricePerUnit,
                                MinPriceQuantity: i.Prices.reduce((prev, current) =>
                                    (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).Quantity,
                                LastWeekGil: i.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).map(item => item.PriceTotal).reduce((prev, next) => prev + next, 0),
                                LastWeekTransactions: i.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).length,
                                LastWeekQuantity: i.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).map(item => item.Quantity).reduce((prev, next) => prev + next, 0)
                            }));

                            this.setState(prevState => ({
                                items: [...prevState.items, ...items],
                                data: [...prevState.data, ...data],
                                loadPercent: prevState.loadPercent + prevState.loadIncrementAmount
                            }));
                        })
                });
        }

    }

    tick = () => {
        if (this.state.pageNumber !== this.state.pageTotal) {
            this.FetchNextPage(this.state.pageNumber);

            this.setState(prevState => ({
                pageNumber: prevState.pageNumber + 1
            }));
        }
        else {
            clearInterval(this.intervalID);
        }
    }

    render() {
        return (
            <AppContext.Provider value={{
                data: this.state.data,
                items: this.state.items,
                loadPercent: this.state.loadPercent,
                actions: {}
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
export const Consumer = AppContext.Consumer;