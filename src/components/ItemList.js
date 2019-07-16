import React from 'react';
import Item from './Item';
import NoItems from './NoItems';
import { Consumer } from './Context';

const ItemList = props => {


    return (
        <Consumer>
            {context => {

                const results = context.items;
                let items;
                if (results.length > 0) {
                    items = results.map((item, index) =>
                        <Item i={item}
                            key={item.ID.toString()}
                            index={index}
                        />
                    )
                }
                else {
                    items = <NoItems />
                }
                return (
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Lowest Price</th>
                                <th>Quantity</th>
                                <th>Gil Made Last Week</th>
                                <th>Sold Last Week</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                );
            }}
        </Consumer>
    );
}

export default ItemList;