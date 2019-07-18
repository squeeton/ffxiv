import React, { PureComponent } from 'react';

class Item extends PureComponent {
    
    render() {


        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const minPriceItem = this.props.i.Prices.reduce((prev, current) =>
            (prev.PricePerUnit > current.PricePerUnit) ? prev : current, 0)

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