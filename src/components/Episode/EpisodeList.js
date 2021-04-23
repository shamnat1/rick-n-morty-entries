import React, {useState,useEffect} from 'react';
import { useQuery, gql } from '@apollo/client';
import Table from "../Table";
import { Button,Container } from 'react-bootstrap';
import Loader from'../Loader'
import Error from'../Error'
import {ListColumns} from './Columns';
export const EPISODE_LIST_QUERY = gql`
  query episodes($page: Int) {
    episodes(page:$page) {
      info{
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        created
        characters{
            id
            name
            status
            species
            origin {
                name
            }
            location{
                name
            }
        }
      }
    }
  }
`;


const EpisodeList = () => {
    const [page,setPage] = useState(1)
    const [results, setResults] = React.useState([])
    const [count, setCount] = React.useState(0)
    const [loading,setLoading] = useState(true);
    const { data, error } = useQuery(EPISODE_LIST_QUERY,{
        variables: {
            page:page
        },
        fetchPolicy: "cache-and-network"
    });

    useEffect(() => {
        if(data && data.episodes) {
            const newResults = [...results, ...data.episodes.results]
            setResults(newResults)
            setLoading(false)
            setCount(data.episodes.info.count)
            if(data.episodes.info.next)
                setPage(page+1)
        }
    }, [data])


    if (error) return <Error message={error.message}/>;
    if (loading) return <Loader/>;


    return (
        <Container className="mb-4">
            <h1> Episodes </h1>
            <Table columns={ListColumns} data={results} count={count}/>
        </Container>
    );
};

export default EpisodeList;