import React from 'react';
import {create, act} from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import EpisodeList, { EPISODE_LIST_QUERY } from './EpisodeList';
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { useQuery, gql } from '@apollo/client';

describe("Episode Component ", () => {

    it('renders without error', async() => {

        const mocks = [
            {
                request: {
                    query: EPISODE_LIST_QUERY,
                    variables: {
                        page: 1,
                    },
                },
                result: {
                    data: {},
                },
            }
        ];

        const component = create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <EpisodeList/>
            </MockedProvider>,
        );

        const tree = component.toJSON();
        expect(tree.children[0].children).toContain('Loading...');

    });
    it('should render Episodes', async() => {
        const episodeListMock = {
            request: {
                query: EPISODE_LIST_QUERY,
                variables: {
                    page: 1,
                },
            },

            "result": {
                "data": {
                    "episodes": {
                        "info": {
                            "count": 41,
                            "pages": 3,
                            "next": null,
                            "prev": 2,
                            "__typename": "Info"
                        },
                        "results": [
                            {
                                "id": "41",
                                "name": "Star Mort: Rickturn of the Jerri",
                                "air_date": "May 31, 2020",
                                "episode": "S04E10",
                                "created": "2020-08-06T05:51:52.079Z",
                                "characters": [
                                    {
                                        "id": "1",
                                        "name": "Rick Sanchez",
                                        "status": "Alive",
                                        "species": "Human",
                                        "origin": {
                                            "name": "Earth (C-137)",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "2",
                                        "name": "Morty Smith",
                                        "status": "Alive",
                                        "species": "Human",
                                        "origin": {
                                            "name": "Earth (C-137)",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "3",
                                        "name": "Summer Smith",
                                        "status": "Alive",
                                        "species": "Human",
                                        "origin": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "4",
                                        "name": "Beth Smith",
                                        "status": "Alive",
                                        "species": "Human",
                                        "origin": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "5",
                                        "name": "Jerry Smith",
                                        "status": "Alive",
                                        "species": "Human",
                                        "origin": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "107",
                                        "name": "Dr. Wong",
                                        "status": "Alive",
                                        "species": "Human",
                                        "origin": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "344",
                                        "name": "Tammy Guetermann",
                                        "status": "Dead",
                                        "species": "Human",
                                        "origin": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "NX-5 Planet Remover",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "592",
                                        "name": "Phoenixperson",
                                        "status": "Alive",
                                        "species": "Alien",
                                        "origin": {
                                            "name": "Bird World",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "667",
                                        "name": "Defiance Beth",
                                        "status": "Alive",
                                        "species": "Human",
                                        "origin": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "Earth (Replacement Dimension)",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "668",
                                        "name": "Defiance Squanchette",
                                        "status": "Alive",
                                        "species": "Alien",
                                        "origin": {
                                            "name": "Planet Squanch",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "Defiance's Ship",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "669",
                                        "name": "Defiance Doctor",
                                        "status": "Alive",
                                        "species": "Alien",
                                        "origin": {
                                            "name": "unknown",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "Defiance's Base",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "670",
                                        "name": "New Improved Galactic Federation Guard",
                                        "status": "Dead",
                                        "species": "Alien",
                                        "origin": {
                                            "name": "Gromflom Prime",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "NX-5 Planet Remover",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    },
                                    {
                                        "id": "671",
                                        "name": "New Improved Galactic Federation Guard",
                                        "status": "Dead",
                                        "species": "Alien",
                                        "origin": {
                                            "name": "Gromflom Prime",
                                            "__typename": "Location"
                                        },
                                        "location": {
                                            "name": "NX-5 Planet Remover",
                                            "__typename": "Location"
                                        },
                                        "__typename": "Character"
                                    }
                                ],
                                "__typename": "Episode"
                            }
                        ],
                        "__typename": "Episodes"
                    }
                }
            }
        }

        await act(async() => {
            const component =
                create(
                    <MockedProvider mocks={[episodeListMock]}>
                        <EpisodeList/>
                    </MockedProvider>,
                );
            await new Promise(resolve => setTimeout(resolve, 3000));
            const tree = component.toJSON();
            expect(tree.children[0].children[0]).toContain('Episodes');
        });


    });

    it('should show error UI', async() => {

        await act(async() => {
            const episodeListMock = [{
                request: {
                    query: EPISODE_LIST_QUERY,
                    variables: {
                        page: 1,
                    },
                },
                error: new Error('An error occurred')
            }];
            const component =
                create(
                    <MockedProvider mocks={episodeListMock} addTypename={false}>
                        <EpisodeList/>
                    </MockedProvider>,
                );


            await new Promise(resolve => setTimeout(resolve, 1000));
            const tree = component.toJSON();
            expect(tree.children[1].children).toContain('Error');
        })
    });
});