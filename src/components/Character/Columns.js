import { Button,Container } from 'react-bootstrap';
import Moment from 'moment';
export const ListColumns =  [
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
        Header: 'Action',
        accessor: 'action',
        Cell: props  => (
            <Button variant="secondary" size="sm" href={`/character/${props.row.original.id}`}>
                View
            </Button>
        )

    }
]
const formatDate = (d)=>{
    return Moment(d)
        .local()
        .format("MM/DD/YYYY hh:mm")
}


export const DetailColumns = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Air Date',
        accessor: 'air_date',
    },
    {
        Header: 'Episode',
        accessor: 'episode',
    },
    {
        Header: 'Created Date',
        accessor: 'created',
        Cell: props => <div>{formatDate(props.value)} </div>

    },
    ,
    {
        Header: 'Action',
        accessor: 'action',
        Cell: props  => (
            <Button variant="secondary" size="sm" href={`/episode/${props.row.original.id}`}>
                View
            </Button>
        )

    }
]