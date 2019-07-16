import React, { Component } from 'react'

const AppContext = React.createContext();

export class Provider extends Component {
    state = {
        items: [],
        data: [],
        loadPercent: 0,
        pageNumber: 2,
        pageTotal: 0,
        resultsTotal: 0
    }


    componentDidMount() {

        fetch(`https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=${this.state.pageNumber}`, { mode: 'cors' })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: [data],
                    loadPercent: 10
                })
            });

        console.log('Fetching Data');
        fetch("https://xivapi.com/market/Goblin/item/3", { mode: 'cors' })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    items: [data],
                    loadPercent: 100
                })
            });
        console.log('items:', this.state.items);
        console.log('sellables:', this.state.sellables);
    }

    render() {
        return (
            <AppContext.Provider value={{
                items: this.state.items,
                data: this.state.data,
                loadPercent: this.state.loadPercent,
                actions: {}
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
export const Consumer = AppContext.Consumer;