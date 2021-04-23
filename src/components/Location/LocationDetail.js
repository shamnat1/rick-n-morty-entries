import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from '../Loader';
import Error from '../Error';
import { Container } from 'react-bootstrap';
import Table from '../Table'
import {DetailColumns} from './Columns'

export const LOCATION_QUERY = gql`
  query location($id: ID!) {
    location(id:$id) {
        id
        name
        type
        dimension
        residents{
            id
            name
            status
            species
            type
            gender
            origin {
                id
                name
                type
                dimension
            }
            location{
                id
                name
                type
                dimension
            }
            image
        }
    }
  }
`;




const LocationDetail = (props) => {
    const { id } = props.match.params;
    const { data, loading, error } = useQuery(LOCATION_QUERY,{
        variables: {
            id:id
        },
        fetchPolicy: "cache-and-network"
    });
    if(loading)
        return <Loader/>
    if(error)
        return <Error message={error.message}/>
    return (
        <Container>
            {data && data.location ?
                <div>
                    <h6 className="text-center">LOCATION</h6>
                    <h3 className="text-center">{data.location.name}</h3>
                    <h6 class="text-success text-center">{data.location.type}{' - '}{data.location.dimension}</h6>
                    {data.location.residents ?
                        <p>
                            <h5>Residents</h5>
                            <Table columns={DetailColumns} data={data.location.residents} count={data.location.residents.length}/>
                        </p>:null}


                </div>: null}

        </Container>
    );
};

export default LocationDetail;