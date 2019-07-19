import React from 'react';
import Item from './Item';
import NoItems from './NoItems';
import { Consumer } from './Context';
import ReactTable from 'react-table';
import '../css/react-table.css';

const ItemList = () => {


    return (
        <Consumer>
            {context => {

                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

                const customNameFilterMethod = ({ filter, row }) => {
                    console.log('filter:', filter);
                    console.log('row:', row[filter.id]);


                    if (filter.value === '') { return true }

                    
                    else { return false }
                }

                const columns = [{
                    Header: 'Item ID',
                    accessor: 'ItemID',
                    headerClassName: 'hidden',
                    className: 'hidden'
                }, {
                    Header: 'Item Name',
                    accessor: 'Item.Name',
                    sortable: true,
                    filterable: true,
                    filterMethod: (filter, row) => {
                        if (filter.value === '') { return true }
                        if (row[filter.id].toUpperCase().includes(filter.value.toUpperCase())) {
                            return true;
                        }
                    }
                }, {
                    Header: 'Lowest Price',
                    accessor: 'MinPrice',
                    className: 'number-table',
                    sortable: true,
                    Cell: props => new Intl.NumberFormat().format(props.value)
                }, {
                    Header: 'Quantity',
                    accessor: 'MinPriceQuantity',
                    className: 'number-table',
                    sortable: true,
                    Cell: props => new Intl.NumberFormat().format(props.value)
                }, {
                    Header: 'Gil Made Last Week',
                    accessor: 'LastWeekGil',
                    className: 'number-table',
                    sortable: true,
                    Cell: props => new Intl.NumberFormat().format(props.value),
                    filterable: true,
                    filterMethod: (filter, row) => {
                        console.log(row[filter.id],'>=',parseInt(filter.value),'=', row[filter.id]>=parseInt(filter.value));
                        if (filter.value === '') { return true }
                        if (row[filter.id]>=parseInt(filter.value)) {
                            return true;
                        }
                    }
                }, {
                    Header: 'Units Sold Last Week',
                    accessor: 'LastWeekQuantity',
                    className: 'number-table',
                    sortable: true,
                    Cell: props => new Intl.NumberFormat().format(props.value),
                    filterable: true,
                    filterMethod: (filter, row) => {
                        if (filter.value === '') { return true }
                        if (row[filter.id]<=filter.value) {
                            return true;
                        }
                    }
                }, {
                    Header: 'Transactions Last Week',
                    accessor: 'LastWeekTransactions',
                    className: 'number-table',
                    sortable: true,
                    Cell: props => new Intl.NumberFormat().format(props.value),
                    filterable: true,
                    filterMethod: (filter, row) => {
                        if (filter.value === '') { return true }
                        if (row[filter.id]>=parseInt(filter.value)) {
                            return true;
                        }
                    }
                }
                ]

                return (
                    <ReactTable className="dark -striped -highlight"
                        data={context.items}
                        columns={columns}
                    />
                );
            }}
        </Consumer>
    );
}
// A function returning a boolean that specifies the filtering logic for the column
// 'filter' == an object specifying which filter is being applied. Format: {id: [the filter column's id], 
//value: [the value the user typed in the filter field], pivotId: [if filtering on a pivot column, 
//the pivotId will be set to the pivot column's id and the `id` field will be set to the top level pivoting column]}
// 'row' || 'rows' == the row (or rows, if filterAll is set to true) of data supplied to the table
// 'column' == the column that the filter is on
export default ItemList;