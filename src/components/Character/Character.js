import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";
import Loader from '../Loader';
import Error from '../Error';
import { Media } from 'react-bootstrap';
import Moment from 'moment';
import Table from '../Table'
import {DetailColumns} from './Columns'

export const CHARACTER_QUERY = gql`
  query character($id: ID!) {
    character(id:$id) {
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
        episode{
            id
            name
            air_date
            episode
            created
        }
    }
  }
`;




const Character = (props) => {

    const { id } = props.match.params;

    const { data, loading, error } = useQuery(CHARACTER_QUERY,{
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
        <div>
            {data && data.character ?
                <Media>
                    <img
                        width={100}
                        height={100}
                        className="mr-3"
                        src={data.character.image}
                        alt="Generic placeholder"
                    />
                <Media.Body>
                    <h3>{data.character.name}</h3>
                    <h6 class="text-success">{data.character.species}{' - '}{data.character.status}{' - '}{data.character.gender}</h6>
                    <p>{''}
                        {data.character.type ? <div>Type : {data.character.type} </div>:null}
                        {data.character.origin ? <div>Origin : {data.character.origin.name}({data.character.origin.dimension}) </div>:null}
                        {data.character.location ? <div>Location : {data.character.origin.name} </div>:null}
                    </p>
                     {data.character.episode ?
                        <p>
                            <h5>Episodes</h5>
                            <Table columns={DetailColumns} data={data.character.episode} count={data.character.episode.length}/>
                        </p>:null}


                </Media.Body>
            </Media>: null}

        </div>
    );
};

export default Character;