import React, { Component } from 'react'

const AppContext = React.createContext();

export class Provider extends Component {
    state = {
        items: [],
        loadPercent: 0,
        pageNumber: 0,
        pageTotal: 0,
        resultsTotal: 0
    }


    componentDidMount() {
        console.log('Fetching Data');
        let itemIDs;
        let getItemIdUrl = `https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=${this.state.pageNumber}&columns=ID`;
        let url;

        fetch(getItemIdUrl, { mode: 'cors' })
            .then(response => response.json())
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
                        this.setState({
                            items: data,
                            loadPercent: 100
                        })
                    })
            });
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