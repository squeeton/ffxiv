import React, { PureComponent } from 'react';

class Item extends PureComponent {

    render() {
        return (
            <tr className="tab">
                <td>{this.props.item.Item.Name}</td>
                <td>{(this.props.item.MinPrice === undefined) ? '' 
                : this.props.item.MinPrice.toLocaleString(navigator.language) }</td>
                <td>{(this.props.item.MinPriceQuantity === undefined) ? '' 
                : this.props.item.MinPriceQuantity.toLocaleString(navigator.language) }</td>
                <td>{(this.props.item.LastWeekGil === undefined) ? '' 
                : this.props.item.LastWeekGil.toLocaleString(navigator.language) }</td>
                <td>{(this.props.item.LastWeekQuantity === undefined) ? '' 
                : this.props.item.LastWeekQuantity.toLocaleString(navigator.language) }</td>
            </tr>
        );
    }
}

export default Item;