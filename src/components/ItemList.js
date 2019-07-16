import React from 'react';
import Item from './Item';
import NoItems from './NoItems';

const ItemList = props => {

    const results = props.data;
    console.log('props: ', props);
    let items;
    // console.log('props: ', props);
    console.log('props length: ', props.data.length);
    if (results.length > 0) {
        items = results.map((item, index) =>
            <Item i = {item}
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
}

export default ItemList;