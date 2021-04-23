import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";
import Loader from '../Loader';
import Error from '../Error';
import { Container } from 'react-bootstrap';
import Moment from 'moment';
import Table from '../Table'
import {DetailColumns} from './Columns'

export const EPISODE_QUERY = gql`
  query episode($id: ID!) {
    episode(id:$id) {
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




const EpisodeDetail = (props) => {
    const { id } = props.match.params;

    const { data, loading, error } = useQuery(EPISODE_QUERY,{
        variables: {
            id:id
        },
        fetchPolicy: "cache-and-network"
    });


    console.log(data, loading, error);
    const formatDate = (d)=>{
        return Moment(d)
            .local()
            .format("MM/DD/YYYY hh:mm")
    }
    if(loading)
        return <Loader/>
    if(error)
        return <Error message={error.message}/>
    return (
        <Container>
            {data && data.episode ?
             <div>
                    <h3 className="text-center">{data.episode.name}</h3>
                    <h6 class="text-success justify-content-md-center text-center">{data.episode.air_date}{' - '}{data.episode.episode}{' - '}{formatDate(data.episode.created)}</h6>
                    {data.episode.characters ?
                        <div>
                            <h5>Characters</h5>
                            <Table columns={DetailColumns} data={data.episode.characters} count={data.episode.characters.length}/>
                        </div>:null}



            </div>: null}

        </Container>
    );
};

export default EpisodeDetail;