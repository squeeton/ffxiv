import React from 'react';
import { Consumer } from './Context';
import ReactTable from 'react-table';
import '../css/react-table.css';

const ItemList = () => {


    return (
        <Consumer>
            {context => {

                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

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
                    Header: 'Lowest HQ',
                    accessor: 'MinPriceHQ',
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
                        console.log(row[filter.id], '>=', parseInt(filter.value), '=', row[filter.id] >= parseInt(filter.value));
                        if (filter.value === '') { return true }
                        if (row[filter.id] >= parseInt(filter.value)) {
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
                        if (row[filter.id] <= filter.value) {
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
                        if (row[filter.id] >= parseInt(filter.value)) {
                            return true;
                        }
                    }
                }
                ]

                if (context.specificPage >= context.specificPages) {
                    columns.push({
                        Header: 'Crafter',
                        accessor: 'Crafter',
                        sortable: true,
                        filterable: true,
                        filterMethod: (filter, row) => {
                            if (filter.value === '') { return true }
                            else if (row[filter.id] === undefined || row[filter.id] === null) { return false }
                            else if (row[filter.id].toUpperCase().includes(filter.value.toUpperCase())) {
                                return true;
                            }
                        }
                    })
                }
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

export default ItemList;