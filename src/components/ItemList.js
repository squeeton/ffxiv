import React from 'react';
import Item from './Item';
import NoItems from './NoItems';
import { Consumer } from './Context';

const ItemList = () => {


    return (
        <Consumer>
            {context => {

                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

                const results = context.items;
                console.log('context', context.items);

                let items;
                if (results.length > 0) {
                    items = results.map((item) =>

                        <Item item={item}
                            key={item.ID.toString()}
                        />
                    )
                }
                else {
                    items = <NoItems />
                }
                return (
                    <table className="table table-dark item-table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Item</th>
                                <th>Lowest Price</th>
                                <th>Quantity</th>
                                <th>Gil Made Last Week</th>
                                <th>Units Sold Last Week</th>
                                <th>Transactions Last Week</th>
                            </tr>
                        </thead>
                        <tbody className="table table-dark table-striped">
                            {items}
                        </tbody>
                    </table>
                );
            }}
        </Consumer>
    );
}

export default ItemList;