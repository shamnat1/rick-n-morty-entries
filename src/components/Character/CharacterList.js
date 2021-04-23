import React, {useState,useEffect} from 'react';
import { useQuery, gql } from '@apollo/client';
import Table from "../Table";
import { Button,Container } from 'react-bootstrap';
import Loader from'../Loader'
import Error from'../Error'
import {ListColumns} from'./Columns'
// import CHARACTER_LIST_QUERY from '../queries/Character/ListAllCharactersQuery'

export const CHARACTER_LIST_QUERY = gql`
  query characters($page: Int) {
    characters(page:$page) {
      info{
        count
        pages
        next
        prev
      }
      results {
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
`;




const CharacterList = () => {
    const [page,setPage] = useState(1)
    const [results, setResults] = React.useState([])
    const [count, setCount] = React.useState(0)
    const [loading,setLoading] = useState(true);
    const { data, error } = useQuery(CHARACTER_LIST_QUERY,{
        variables: {
            page:page
        },
        fetchPolicy: "cache-and-network"
    });
    // console.log(data, error,page)

    useEffect(() => {
        if(data && data.characters) {
            const newResults = [...results, ...data.characters.results]
            setResults(newResults)
            setLoading(false)
            setCount(data.characters.info.count)
            if(data.characters.info.next)
                setPage(page+1)
        }
    }, [data])


    if (error) return <Error message={error.message}/>;
    if (loading) return <Loader/>;


    return (
        <Container className="mb-4">
            <h1> Characters </h1>
            <Table columns={ListColumns} data={results} count={count}/>
        </Container>
    );
};

export default CharacterList;