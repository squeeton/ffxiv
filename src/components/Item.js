import React from 'react';

const Item = props => {

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate( oneWeekAgo.getDate()-7);

    const minPriceItem = props.i.Prices.reduce((prev, current) =>
        (prev.PricePerUnit > current.PricePerUnit) ? prev : current)

    const lastWeekSales = props.i.History.filter(d=>d.PurchaseDate >= oneWeekAgo)

    let gilLastWeek;
    let quantityLastWeek;

    for(var i=0; i<lastWeekSales.length;i++){
        if(i===0){
            gilLastWeek = lastWeekSales[i].PriceTotal;
            quantityLastWeek = lastWeekSales[i].Quantity;
        }
        else{
            gilLastWeek += lastWeekSales[i].PriceTotal;
            quantityLastWeek += lastWeekSales[i].Quantity;
        }
    }

        console.log('lastweekSales:', lastWeekSales);
        console.log('gilLastWeek:', gilLastWeek);
    return (
        <tr>
            <td>Some Item Name: {props.i.ItemID}</td>
            <td>
                {minPriceItem.PricePerUnit}
            </td>
            <td>{minPriceItem.Quantity}</td>
            <td>{gilLastWeek}</td>
            <td>{quantityLastWeek}</td>
        </tr>
    );
}

export default Item;