import { Button } from 'react-bootstrap';
export const ListColumns = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Type',
        accessor: 'type',
    },
    {
        Header: 'Dimension',
        accessor: 'dimension',
    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell: props  => (
            <Button variant="secondary" size="sm" href={`/location/${props.row.original.id}`}>
                View
            </Button>
        )

    }
]

export const DetailColumns = [
    {
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

    },
    {
        Header: 'Image',
        accessor: 'image',
        Cell: props => <img src={props.row.original.image} alt={props.row.original.name} width={60} ></img>

    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell: props  => (
            <Button variant="secondary" size="sm" href={`/character/${props.row.original.id}`}>
                View
            </Button>
        )

    }
]