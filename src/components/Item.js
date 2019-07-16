import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Item extends PureComponent {
    static propTypes={
    }
    render() {

        console.log(this.props.i);

        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const minPriceItem = this.props.i.Prices.reduce((prev, current) =>
            (prev.PricePerUnit > current.PricePerUnit) ? prev : current)

        const lastWeekSales = this.props.i.History.filter(d => d.PurchaseDateMS >= oneWeekAgo)

        let gilLastWeek;
        let quantityLastWeek;

        for (var i = 0; i < lastWeekSales.length; i++) {
            if (i === 0) {
                gilLastWeek = lastWeekSales[i].PriceTotal;
                quantityLastWeek = lastWeekSales[i].Quantity;
            }
            else {
                gilLastWeek += lastWeekSales[i].PriceTotal;
                quantityLastWeek += lastWeekSales[i].Quantity;
            }
        }

        console.log('lastweekSales:', lastWeekSales);
        console.log('gilLastWeek:', gilLastWeek);

        return (
            <tr>
                <td>{this.props.i.Item.Name}</td>
                <td>
                    {minPriceItem.PricePerUnit}
                </td>
                <td>{minPriceItem.Quantity}</td>
                <td>{gilLastWeek}</td>
                <td>{quantityLastWeek}</td>
            </tr>
        );
    }
}

export default Item;