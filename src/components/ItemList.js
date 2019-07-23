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
                    show: false
                }, {
                    Header: 'Rarity',
                    accessor: 'Rarity',
                    className: 'rarity',
                    show: false
                }, {
                    Header: 'Item Name',
                    accessor: 'Item.Name',
                    className: 'item-name',
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
                    Header: 'Qty',
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
                    Header: 'Gil L/W',
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
                    Header: 'Qty L/W',
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
                    Header: 'Transactions L/W',
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

                if ((context.loadPercent === 100) && (context.specificLoaded >= context.specificTotal)) {
                    columns.push({
                        Header: 'Crafters',
                        accessor: 'Crafters',
                        sortable: true,
                        filterable: true,
                        filterMethod: (filter, row) => {
                            if (filter.value === '') { return true }
                            else if (row[filter.id] === undefined || row[filter.id] === null) { return false }
                            else if (row[filter.id].toUpperCase().includes(filter.value.toUpperCase())) {
                                return true;
                            }
                        }
                    });
                    columns.push({
                        Header: 'Lvl',
                        accessor: 'CraftLvl',
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
                    });
                }
                return (
                    <ReactTable className="dark -striped -highlight"
                        data={context.items}
                        columns={columns}
                        pageSizeOptions={[10, 25, 50, 100]}
                        defaultPageSize={25}
                        getTrProps={(state, rowInfo, column) => {
                            return {
                                className: `rarity-${rowInfo.row.Rarity}`
                            }
                        }}
                    />
                );
            }}
        </Consumer>
    );
}

export default ItemList;