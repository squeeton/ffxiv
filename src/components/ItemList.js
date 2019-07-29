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
                    headerClassName: 'vertical-center',
                    accessor: 'ItemID',
                    show: false
                }, {
                    Header: 'Rarity',
                    headerClassName: 'vertical-center',
                    accessor: 'Rarity',
                    className: 'rarity',
                    show: false
                }, {
                    Header: 'Item Name',
                    headerClassName: 'vertical-center',
                    accessor: 'Item.Name',
                    className: 'item-name',
                    sortable: true,
                    filterable: true,
                    cell: row => (<div
                        style={{
                            width: '20px',
                            height: '100%',
                            backgroundColor: '#fff',
                            borderRadius: '2px'
                        }}
                    >
                        <div
                        />
                    </div>),
                    filterMethod: (filter, row) => {
                        if (filter.value === '') { return true }
                        if (row[filter.id].toUpperCase().includes(filter.value.toUpperCase())) {
                            return true;
                        }
                    }
                }, {
                    Header: 'Lowest Price',
                    headerClassName: 'vertical-center',
                    accessor: 'MinPrice',
                    className: 'number-table',
                    sortable: true,
                    width: 120,
                    Cell: props => new Intl.NumberFormat().format(props.value)
                }, {
                    Header: 'Qty',
                    headerClassName: 'vertical-center',
                    accessor: 'MinPriceQuantity',
                    className: 'number-table',
                    sortable: true,
                    width: 45,
                    Cell: props => new Intl.NumberFormat().format(props.value)
                }, {
                    Header: 'Lowest HQ',
                    headerClassName: 'vertical-center',
                    accessor: 'MinPriceHQ',
                    className: 'number-table',
                    sortable: true,
                    width: 120,
                    Cell: props => new Intl.NumberFormat().format(props.value)
                }, {
                    Header: 'Gil L/W',
                    headerClassName: 'vertical-center',
                    accessor: 'LastWeekGil',
                    className: 'number-table',
                    sortable: true,
                    width: 120,
                    Cell: props => new Intl.NumberFormat().format(props.value),
                    filterable: true,
                    filterMethod: (filter, row) => {
                        // console.log(row[filter.id], '>=', parseInt(filter.value), '=', row[filter.id] >= parseInt(filter.value));
                        if (filter.value === '') { return true }
                        if (row[filter.id] >= parseInt(filter.value)) {
                            return true;
                        }
                    }
                }, {
                    Header: 'Qty L/W',
                    headerClassName: 'vertical-center',
                    accessor: 'LastWeekQuantity',
                    className: 'number-table',
                    sortable: true,
                    width: 90,
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
                    headerClassName: 'vertical-center',
                    accessor: 'LastWeekTransactions',
                    className: 'number-table',
                    sortable: true,
                    width: 155,
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
                        headerClassName: 'vertical-center',
                        accessor: 'Crafters',
                        sortable: true,
                        width: 215,
                        filterable: true,
                        filterMethod: (filter, row) => {
                            if (filter.value === '') { return true }
                            else if (row[filter.id] === undefined || row[filter.id] === null) { return false }
                            var classes = row[filter.id].toUpperCase().split(', ');
                            var search = filter.value.toUpperCase().split(',');
                            search = search.filter(function (i) {
                                return i !== ""
                            })

                            const found = classes.some(r => search.includes(r))
                            if (found) {
                                return found;
                            }
                        },
                        Filter: ({ filter, onChange }) =>
                            <input type="text" className="hidden"></input>
                    });
                    columns.push({
                        Header: 'Lvl',
                        headerClassName: 'vertical-center',
                        accessor: 'CraftLvl',
                        className: 'number-table',
                        sortable: true,
                        width: 45,
                        Cell: props => new Intl.NumberFormat().format(props.value),
                        filterable: true,
                        filterMethod: (filter, row) => {
                            // console.log('filter', filter);
                            // console.log('row[filter.id]', row[filter.id]);
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
                        filterable
                        filtered={context.filtered}
                        onFilteredChange={filtered => context.actions.filterClass({ filtered })}
                        getTrProps={(state, rowInfo, column) => {
                            if (rowInfo && rowInfo.row) {
                                return {
                                    className: `rarity-${rowInfo.row.Rarity}`
                                }
                            }
                            else { return {}; }
                        }}
                    />
                );
            }}
        </Consumer>
    );
}

export default ItemList;