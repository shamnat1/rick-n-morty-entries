import React, {useState,useEffect} from 'react';
import { useQuery, gql } from '@apollo/client';
import Table from "../Table";
import { Container } from 'react-bootstrap';
import Loader from'../Loader'
import Error from'../Error'
import {ListColumns} from './Columns';
export const LOCATION_LIST_QUERY = gql`
  query locations($page: Int) {
    locations(page:$page) {
      info{
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;


const LocationList = () => {
    const [page,setPage] = useState(1)
    const [results, setResults] = React.useState([])
    const [count, setCount] = React.useState(0)
    const [loading,setLoading] = useState(true);
    const { data, error } = useQuery(LOCATION_LIST_QUERY,{
        variables: {
            page:page
        },
        fetchPolicy: "cache-and-network"
    });

    useEffect(() => {
        if(data && data.locations) {
            const newResults = [...results, ...data.locations.results]
            setResults(newResults)
            setLoading(false)
            setCount(data.locations.info.count)
            if(data.locations.info.next)
                setPage(page+1)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])


    if (error) return <Error message={error.message}/>;
    if (loading) return <Loader/>;


    return (
        <Container className="mb-4">
            <h1> Locations </h1>
            <Table columns={ListColumns} data={results} count={count}/>
        </Container>
    );
};

export default LocationList;