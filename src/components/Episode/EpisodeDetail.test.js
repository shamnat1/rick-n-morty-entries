import {create, act} from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import Episode, { EPISODE_QUERY } from './EpisodeDetail';


describe("Episode Details Component ", () => {


    it('renders without error', async() => {


        await act(async()=>{
            const match = {
                params: {
                    id: 1
                }
            }
            const mocks = [
                {
                    request: {
                        query: EPISODE_QUERY,
                        variables: {
                            id: 1,
                        },
                    },
                    result: {
                        "data":{
                            "episode":{
                                "id":"1",
                                "name":"Pilot",
                                "air_date":"December 2, 2013",
                                "episode":"S01E01",
                                "created":"2017-11-10T12:56:33.798Z",
                                "characters":[
                                    {
                                        "id":"1",
                                        "name":"Rick Sanchez",
                                        "status":"Alive",
                                        "species":"Human",
                                        "type":"",
                                        "gender":"Male",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"20",
                                            "name":"Earth (Replacement Dimension)",
                                            "type":"Planet",
                                            "dimension":"Replacement Dimension",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"2",
                                        "name":"Morty Smith",
                                        "status":"Alive",
                                        "species":"Human",
                                        "type":"",
                                        "gender":"Male",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"20",
                                            "name":"Earth (Replacement Dimension)",
                                            "type":"Planet",
                                            "dimension":"Replacement Dimension",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"35",
                                        "name":"Bepisian",
                                        "status":"Alive",
                                        "species":"Alien",
                                        "type":"Bepisian",
                                        "gender":"unknown",
                                        "origin":{
                                            "id":"11",
                                            "name":"Bepis 9",
                                            "type":"Planet",
                                            "dimension":"unknown",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"11",
                                            "name":"Bepis 9",
                                            "type":"Planet",
                                            "dimension":"unknown",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/35.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"38",
                                        "name":"Beth Smith",
                                        "status":"Alive",
                                        "species":"Human",
                                        "type":"",
                                        "gender":"Female",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/38.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"62",
                                        "name":"Canklanker Thom",
                                        "status":"Dead",
                                        "species":"Alien",
                                        "type":"Gromflomite",
                                        "gender":"Male",
                                        "origin":{
                                            "id":"19",
                                            "name":"Gromflom Prime",
                                            "type":"Planet",
                                            "dimension":"Replacement Dimension",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":null,
                                            "name":"unknown",
                                            "type":null,
                                            "dimension":null,
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/62.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"92",
                                        "name":"Davin",
                                        "status":"Dead",
                                        "species":"Human",
                                        "type":"",
                                        "gender":"Male",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/92.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"127",
                                        "name":"Frank Palicky",
                                        "status":"Dead",
                                        "species":"Human",
                                        "type":"",
                                        "gender":"Male",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/127.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"144",
                                        "name":"Glenn",
                                        "status":"Dead",
                                        "species":"Alien",
                                        "type":"Gromflomite",
                                        "gender":"Male",
                                        "origin":{
                                            "id":null,
                                            "name":"unknown",
                                            "type":null,
                                            "dimension":null,
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"38",
                                            "name":"Interdimensional Customs",
                                            "type":"Customs",
                                            "dimension":"unknown",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/144.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"158",
                                        "name":"Hookah Alien",
                                        "status":"Alive",
                                        "species":"Alien",
                                        "type":"Tuskfish",
                                        "gender":"unknown",
                                        "origin":{
                                            "id":null,
                                            "name":"unknown",
                                            "type":null,
                                            "dimension":null,
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"38",
                                            "name":"Interdimensional Customs",
                                            "type":"Customs",
                                            "dimension":"unknown",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/158.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"175",
                                        "name":"Jerry Smith",
                                        "status":"Alive",
                                        "species":"Human",
                                        "type":"",
                                        "gender":"Male",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/175.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"179",
                                        "name":"Jessica",
                                        "status":"Alive",
                                        "species":"Cronenberg",
                                        "type":"",
                                        "gender":"Female",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/179.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"181",
                                        "name":"Jessica's Friend",
                                        "status":"Alive",
                                        "species":"Human",
                                        "type":"",
                                        "gender":"Female",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"20",
                                            "name":"Earth (Replacement Dimension)",
                                            "type":"Planet",
                                            "dimension":"Replacement Dimension",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/181.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"239",
                                        "name":"Mr. Goldenfold",
                                        "status":"Alive",
                                        "species":"Cronenberg",
                                        "type":"",
                                        "gender":"Male",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/239.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"249",
                                        "name":"Mrs. Sanchez",
                                        "status":"unknown",
                                        "species":"Human",
                                        "type":"",
                                        "gender":"Female",
                                        "origin":{
                                            "id":null,
                                            "name":"unknown",
                                            "type":null,
                                            "dimension":null,
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":null,
                                            "name":"unknown",
                                            "type":null,
                                            "dimension":null,
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/249.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"271",
                                        "name":"Principal Vagina",
                                        "status":"Alive",
                                        "species":"Cronenberg",
                                        "type":"",
                                        "gender":"Male",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/271.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"338",
                                        "name":"Summer Smith",
                                        "status":"Alive",
                                        "species":"Human",
                                        "type":"",
                                        "gender":"Female",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/338.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"394",
                                        "name":"Davin",
                                        "status":"Dead",
                                        "species":"Cronenberg",
                                        "type":"",
                                        "gender":"Male",
                                        "origin":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"1",
                                            "name":"Earth (C-137)",
                                            "type":"Planet",
                                            "dimension":"Dimension C-137",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/394.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"395",
                                        "name":"Greebybobe",
                                        "status":"Alive",
                                        "species":"Alien",
                                        "type":"Greebybobe",
                                        "gender":"unknown",
                                        "origin":{
                                            "id":"68",
                                            "name":"Girvonesk",
                                            "type":"unknown",
                                            "dimension":"unknown",
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"4",
                                            "name":"Worldender's lair",
                                            "type":"Planet",
                                            "dimension":"unknown",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/395.jpeg",
                                        "__typename":"Character"
                                    },
                                    {
                                        "id":"435",
                                        "name":"Pripudlian",
                                        "status":"Alive",
                                        "species":"Alien",
                                        "type":"Pripudlian",
                                        "gender":"unknown",
                                        "origin":{
                                            "id":null,
                                            "name":"unknown",
                                            "type":null,
                                            "dimension":null,
                                            "__typename":"Location"
                                        },
                                        "location":{
                                            "id":"20",
                                            "name":"Earth (Replacement Dimension)",
                                            "type":"Planet",
                                            "dimension":"Replacement Dimension",
                                            "__typename":"Location"
                                        },
                                        "image":"https://rickandmortyapi.com/api/character/avatar/435.jpeg",
                                        "__typename":"Character"
                                    }
                                ],
                                "__typename":"Episode"
                            }
                        }
                    },
                }
            ];
            const component = create(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Episode match={match}/>
                </MockedProvider>,
            );
            await new Promise(resolve => setTimeout(resolve, 0));
            const tree = component.toJSON();
            expect(tree.children[0].children).toContain('Loading...');
        })
    });

    it('should show error UI', async() => {
        const match = {
            params: {
                id: 1
            }
        }
        const episodeListMock = [{
            request: {
                query: EPISODE_QUERY,
                variables: {
                    id: 1,
                },
            },
            error: new Error('An error occurred')
        }];
        const component =
            create(
                <MockedProvider mocks={episodeListMock} addTypename={false}>
                    <Episode match={match}/>
                </MockedProvider>,
            );


        await new Promise(resolve => setTimeout(resolve, 0));
        const tree = component.toJSON();
        expect(tree.children[1].children).toContain('Error');
    });

    it('should render Episode Details', async() => {
        const episodeListMock = {
            request: {
                query: EPISODE_QUERY,
                variables: {
                    id: 1,
                },
            },

            "result": {
                "data":{
                    "episode":{
                        "id":"1",
                        "name":"Pilot",
                        "air_date":"December 2, 2013",
                        "episode":"S01E01",
                        "created":"2017-11-10T12:56:33.798Z",
                        "characters":[
                            {
                                "id":"1",
                                "name":"Rick Sanchez",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"2",
                                "name":"Morty Smith",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"35",
                                "name":"Bepisian",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"Bepisian",
                                "gender":"unknown",
                                "origin":{
                                    "id":"11",
                                    "name":"Bepis 9",
                                    "type":"Planet",
                                    "dimension":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"11",
                                    "name":"Bepis 9",
                                    "type":"Planet",
                                    "dimension":"unknown",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/35.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"38",
                                "name":"Beth Smith",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/38.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"62",
                                "name":"Canklanker Thom",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Gromflomite",
                                "gender":"Male",
                                "origin":{
                                    "id":"19",
                                    "name":"Gromflom Prime",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":null,
                                    "name":"unknown",
                                    "type":null,
                                    "dimension":null,
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/62.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"92",
                                "name":"Davin",
                                "status":"Dead",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/92.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"127",
                                "name":"Frank Palicky",
                                "status":"Dead",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/127.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"144",
                                "name":"Glenn",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Gromflomite",
                                "gender":"Male",
                                "origin":{
                                    "id":null,
                                    "name":"unknown",
                                    "type":null,
                                    "dimension":null,
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"38",
                                    "name":"Interdimensional Customs",
                                    "type":"Customs",
                                    "dimension":"unknown",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/144.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"158",
                                "name":"Hookah Alien",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"Tuskfish",
                                "gender":"unknown",
                                "origin":{
                                    "id":null,
                                    "name":"unknown",
                                    "type":null,
                                    "dimension":null,
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"38",
                                    "name":"Interdimensional Customs",
                                    "type":"Customs",
                                    "dimension":"unknown",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/158.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"175",
                                "name":"Jerry Smith",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/175.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"179",
                                "name":"Jessica",
                                "status":"Alive",
                                "species":"Cronenberg",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/179.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"181",
                                "name":"Jessica's Friend",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/181.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"239",
                                "name":"Mr. Goldenfold",
                                "status":"Alive",
                                "species":"Cronenberg",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/239.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"249",
                                "name":"Mrs. Sanchez",
                                "status":"unknown",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":null,
                                    "name":"unknown",
                                    "type":null,
                                    "dimension":null,
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":null,
                                    "name":"unknown",
                                    "type":null,
                                    "dimension":null,
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/249.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"271",
                                "name":"Principal Vagina",
                                "status":"Alive",
                                "species":"Cronenberg",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/271.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"338",
                                "name":"Summer Smith",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/338.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"394",
                                "name":"Davin",
                                "status":"Dead",
                                "species":"Cronenberg",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"1",
                                    "name":"Earth (C-137)",
                                    "type":"Planet",
                                    "dimension":"Dimension C-137",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/394.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"395",
                                "name":"Greebybobe",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"Greebybobe",
                                "gender":"unknown",
                                "origin":{
                                    "id":"68",
                                    "name":"Girvonesk",
                                    "type":"unknown",
                                    "dimension":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"4",
                                    "name":"Worldender's lair",
                                    "type":"Planet",
                                    "dimension":"unknown",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/395.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"435",
                                "name":"Pripudlian",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"Pripudlian",
                                "gender":"unknown",
                                "origin":{
                                    "id":null,
                                    "name":"unknown",
                                    "type":null,
                                    "dimension":null,
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/435.jpeg",
                                "__typename":"Character"
                            }
                        ],
                        "__typename":"Episode"
                    }
                }
            }

        }

        let component;
        await act(async() => {
            const match = {
                params: {
                    id: 1
                }
            }
            component =
                create(
                    <MockedProvider mocks={[episodeListMock]}>
                        <Episode match={match}/>
                    </MockedProvider>,
                );
            await new Promise(resolve => setTimeout(resolve, 4000));
            const tree = component.toJSON();
            expect(component.toJSON().children[0].type).toContain('div');
            expect(component.toJSON().children[0].children[0].type).toContain('h3');
        });


    });
});