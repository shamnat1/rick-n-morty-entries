export const Columns = [{
    Header: 'Name',
    accessor: 'name',
},
    {
        Header: 'Species',
        accessor: 'species',
    },
    {
        Header: 'Origin',
        accessor: 'origin',
        Cell: props => <div>{props.row.original.origin.name }</div>
    },
    {
        Header: 'Location',
        accessor: 'location',
        Cell: props => <div>{props.row.original.location.name }</div>

    }
]