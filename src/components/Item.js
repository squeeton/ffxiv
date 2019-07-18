import React, { PureComponent } from 'react';

class Item extends PureComponent {

    render() {
        return (
            <tr className="tab">
                <td>{this.props.item.Item.Name}</td>
                <td>{(this.props.item.MinPrice ===100) ? '100+' 
                : this.props.item.MinPrice }</td>
                <td>{(this.props.item.MinPriceQuantity ===100) ? '100+' 
                : this.props.item.MinPriceQuantity }</td>
                <td>{(this.props.item.LastWeekGil ===100) ? '100+' 
                : this.props.item.LastWeekGil }</td>
                <td>{(this.props.item.LastWeekQuantity ===100) ? '100+' 
                : this.props.item.LastWeekQuantity }</td>
                <td>{(this.props.item.LastWeekTransactions === 100) ? '100+' 
                : this.props.item.LastWeekTransactions }</td>
            </tr>
        );
    }
}

export default Item;