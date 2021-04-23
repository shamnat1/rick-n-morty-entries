import React from 'react';
import {create, act} from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import LocationList, { LOCATION_LIST_QUERY } from './LocationList';
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { useQuery, gql } from '@apollo/client';

describe("Location Component ", () => {

    it('renders without error', async() => {

        const mocks = [
            {
                request: {
                    query: LOCATION_LIST_QUERY,
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
                <LocationList/>
            </MockedProvider>,
        );

        const tree = component.toJSON();
        expect(tree.children[0].children).toContain('Loading...');

    });
    it('should render Locations', async() => {
        const locationListMock = {
            request: {
                query: LOCATION_LIST_QUERY,
                variables: {
                    page: 1,
                },
            },

            "result": {
                "data":{
                    "characters":{
                        "info":{
                            "count":671,
                            "pages":34,
                            "next":5,
                            "prev":3,
                            "__typename":"Info"
                        },
                        "results":[
                            {
                                "id":"61",
                                "name":"Campaign Manager Morty",
                                "status":"Dead",
                                "species":"Human",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Citadel of Ricks",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"62",
                                "name":"Canklanker Thom",
                                "status":"Dead",
                                "species":"Alien",
                                "origin":{
                                    "name":"Gromflom Prime",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"63",
                                "name":"Centaur",
                                "status":"Alive",
                                "species":"Mythological Creature",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Mr. Goldenfold's dream",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"64",
                                "name":"Chris",
                                "status":"Dead",
                                "species":"Alien",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Earth (Replacement Dimension)",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"65",
                                "name":"Chris",
                                "status":"Alive",
                                "species":"Humanoid",
                                "origin":{
                                    "name":"Rick's Battery Microverse",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Rick's Battery Microverse",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"66",
                                "name":"Coach Feratu (Balik Alistane)",
                                "status":"Dead",
                                "species":"Mythological Creature",
                                "origin":{
                                    "name":"Earth (Replacement Dimension)",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Earth (Replacement Dimension)",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"67",
                                "name":"Collector",
                                "status":"Alive",
                                "species":"Alien",
                                "origin":{
                                    "name":"The Menagerie",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"The Menagerie",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"68",
                                "name":"Colossus",
                                "status":"Dead",
                                "species":"Human",
                                "origin":{
                                    "name":"Post-Apocalyptic Earth",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Post-Apocalyptic Earth",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"69",
                                "name":"Commander Rick",
                                "status":"Dead",
                                "species":"Human",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Citadel of Ricks",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"70",
                                "name":"Concerto",
                                "status":"Dead",
                                "species":"Humanoid",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"71",
                                "name":"Conroy",
                                "status":"Dead",
                                "species":"Robot",
                                "origin":{
                                    "name":"Earth (Replacement Dimension)",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Earth (C-137)",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"72",
                                "name":"Cool Rick",
                                "status":"Alive",
                                "species":"Human",
                                "origin":{
                                    "name":"Earth (K-83)",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Citadel of Ricks",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"73",
                                "name":"Cop Morty",
                                "status":"Dead",
                                "species":"Human",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Citadel of Ricks",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"74",
                                "name":"Cop Rick",
                                "status":"Alive",
                                "species":"Human",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Citadel of Ricks",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"75",
                                "name":"Courier Flap",
                                "status":"Alive",
                                "species":"Alien",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Planet Squanch",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"76",
                                "name":"Cousin Nicky",
                                "status":"Dead",
                                "species":"Alien",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Earth (Replacement Dimension)",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"77",
                                "name":"Cowboy Morty",
                                "status":"Alive",
                                "species":"Human",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Citadel of Ricks",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"78",
                                "name":"Cowboy Rick",
                                "status":"Alive",
                                "species":"Human",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Citadel of Ricks",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"79",
                                "name":"Crab Spider",
                                "status":"Alive",
                                "species":"Alien",
                                "origin":{
                                    "name":"Hideout Planet",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Hideout Planet",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            },
                            {
                                "id":"80",
                                "name":"Creepy Little Girl",
                                "status":"Alive",
                                "species":"Human",
                                "origin":{
                                    "name":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "name":"Mr. Goldenfold's dream",
                                    "__typename":"Location"
                                },
                                "__typename":"Character"
                            }
                        ],
                        "__typename":"Characters"
                    }
                }
            }
        }

        await act(async() => {
            const component =
                create(
                    <MockedProvider mocks={[locationListMock]}>
                        <LocationList/>
                    </MockedProvider>,
                );
            await new Promise(resolve => setTimeout(resolve, 4000));
            
            const tree = component.toJSON();
            expect(tree.children[0].children[0]).toContain('Loading...');
        });


    });

    it('should show error UI', async() => {

        await act(async() => {
            const locationListMock = [{
                request: {
                    query: LOCATION_LIST_QUERY,
                    variables: {
                        page: 1,
                    },
                },
                error: new Error('An error occurred')
            }];
            const component =
                create(
                    <MockedProvider mocks={locationListMock} addTypename={false}>
                        <LocationList/>
                    </MockedProvider>,
                );


            await new Promise(resolve => setTimeout(resolve, 1000));
            const tree = component.toJSON();
            expect(tree.children[1].children).toContain('Error');
        })
    });
});
