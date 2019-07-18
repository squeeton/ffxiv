import React, { Component } from 'react'

const AppContext = React.createContext();

export class Provider extends Component {
    state = {
        data: [],
        items: [],
        marketMainTable:[],
        loadPercent: 0,
        pageNumber: 0,
        pageTotal: 0
    }


    componentDidMount() {
        console.log('Fetching Data');
        
        this.FetchInitial();
    }

    FetchInitial(){
        let itemIDs;
        let getItemIdUrl = `https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=${this.state.pageNumber}&columns=ID`;
        let url;


        fetch(getItemIdUrl, { mode: 'cors' })
            .then(response => response.json()
            )
            .then(response => {
                itemIDs = response.Results.map((i) => { return (i.ID); }).toString();

                url = `https://xivapi.com/market/items?servers=Goblin&ids=${itemIDs}`
                this.setState({
                    pageTotal: response.Pagination.PageTotal,
                    loadPercent: 25
                });
                fetch(url, { mode: 'cors' })
                    .then(response => response.json())
                    .then(data => {

                        const oneWeekAgo = new Date();
                        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

                        let items;
                        let marketMainTable;
                        items = data.map((i) => { return i.Goblin });

                        items = items.map(i => ({
                            ...i,
                            MinPrice: i.Prices.reduce((prev, current) =>
                                (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).PricePerUnit,
                            MinPriceQuantity: i.Prices.reduce((prev, current) =>
                                (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).Quantity,
                            LastWeekGil: i.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).map(item => item.PriceTotal).reduce((prev, next) => prev + next, 0),
                            LastWeekQuantity: i.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).map(item => item.Quantity).reduce((prev, next) => prev + next, 0)
                        }))

                        console.log('data:', data);
                        console.log('items:', items);

                        marketMainTable = items.map(item => ({
                                ItemName: item.Item.Name,
                                MinPrice: (item.MinPrice === undefined) ? ''
                                    : item.MinPrice.toLocaleString(navigator.language),
                                MinPriceQuantity: (item.MinPriceQuantity === undefined) ? ''
                                    : item.MinPriceQuantity.toLocaleString(navigator.language),
                                LastWeekGil: (item.LastWeekGil === undefined) ? ''
                                    : item.LastWeekGil.toLocaleString(navigator.language),
                                LastWeekQuantity: (item.LastWeekQuantity === undefined) ? ''
                                    : item.LastWeekQuantity.toLocaleString(navigator.language)
                            }))

                            console.log('marketMainTable:', marketMainTable);

                        this.setState({
                            items: items,
                            data: data,
                            loadPercent: 100
                        })
                    })
            });
    }

    FetchNextPage(){

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