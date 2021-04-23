import React from 'react';
import {create, act} from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import CharacterList, { CHARACTER_LIST_QUERY } from './CharacterList';
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { useQuery, gql } from '@apollo/client';

describe("Episode Component ", () => {
    it('renders without error', async() => {

        const mocks = [
            {
                request: {
                    query: CHARACTER_LIST_QUERY,
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
                <CharacterList/>
            </MockedProvider>,
        );

        const tree = component.toJSON();
        expect(tree.children[0].children).toContain('Loading...');

    });
    it('should render Characters', async() => {
        const characterListMock = {
            request: {
                query: CHARACTER_LIST_QUERY,
                variables: {
                    page: 1,
                },
            },

            "result": {

                "data": {
                    "character": {
                        "id": "1",
                        "name": "Rick Sanchez",
                        "status": "Alive",
                        "species": "Human",
                        "type": "",
                        "gender": "Male",
                        "origin": {
                            "id": "1",
                            "name": "Earth (C-137)",
                            "type": "Planet",
                            "dimension": "Dimension C-137",
                            "__typename": "Location"
                        },
                        "location": {
                            "id": "20",
                            "name": "Earth (Replacement Dimension)",
                            "type": "Planet",
                            "dimension": "Replacement Dimension",
                            "__typename": "Location"
                        },
                        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                        "episode": [
                            {
                                "id": "1",
                                "name": "Pilot",
                                "air_date": "December 2, 2013",
                                "episode": "S01E01",
                                "created": "2017-11-10T12:56:33.798Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "2",
                                "name": "Lawnmower Dog",
                                "air_date": "December 9, 2013",
                                "episode": "S01E02",
                                "created": "2017-11-10T12:56:33.916Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "3",
                                "name": "Anatomy Park",
                                "air_date": "December 16, 2013",
                                "episode": "S01E03",
                                "created": "2017-11-10T12:56:34.022Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "4",
                                "name": "M. Night Shaym-Aliens!",
                                "air_date": "January 13, 2014",
                                "episode": "S01E04",
                                "created": "2017-11-10T12:56:34.129Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "5",
                                "name": "Meeseeks and Destroy",
                                "air_date": "January 20, 2014",
                                "episode": "S01E05",
                                "created": "2017-11-10T12:56:34.236Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "6",
                                "name": "Rick Potion #9",
                                "air_date": "January 27, 2014",
                                "episode": "S01E06",
                                "created": "2017-11-10T12:56:34.339Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "7",
                                "name": "Raising Gazorpazorp",
                                "air_date": "March 10, 2014",
                                "episode": "S01E07",
                                "created": "2017-11-10T12:56:34.441Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "8",
                                "name": "Rixty Minutes",
                                "air_date": "March 17, 2014",
                                "episode": "S01E08",
                                "created": "2017-11-10T12:56:34.543Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "9",
                                "name": "Something Ricked This Way Comes",
                                "air_date": "March 24, 2014",
                                "episode": "S01E09",
                                "created": "2017-11-10T12:56:34.645Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "10",
                                "name": "Close Rick-counters of the Rick Kind",
                                "air_date": "April 7, 2014",
                                "episode": "S01E10",
                                "created": "2017-11-10T12:56:34.747Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "11",
                                "name": "Ricksy Business",
                                "air_date": "April 14, 2014",
                                "episode": "S01E11",
                                "created": "2017-11-10T12:56:34.850Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "12",
                                "name": "A Rickle in Time",
                                "air_date": "July 26, 2015",
                                "episode": "S02E01",
                                "created": "2017-11-10T12:56:34.953Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "13",
                                "name": "Mortynight Run",
                                "air_date": "August 2, 2015",
                                "episode": "S02E02",
                                "created": "2017-11-10T12:56:35.055Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "14",
                                "name": "Auto Erotic Assimilation",
                                "air_date": "August 9, 2015",
                                "episode": "S02E03",
                                "created": "2017-11-10T12:56:35.158Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "15",
                                "name": "Total Rickall",
                                "air_date": "August 16, 2015",
                                "episode": "S02E04",
                                "created": "2017-11-10T12:56:35.261Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "16",
                                "name": "Get Schwifty",
                                "air_date": "August 23, 2015",
                                "episode": "S02E05",
                                "created": "2017-11-10T12:56:35.364Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "17",
                                "name": "The Ricks Must Be Crazy",
                                "air_date": "August 30, 2015",
                                "episode": "S02E06",
                                "created": "2017-11-10T12:56:35.467Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "18",
                                "name": "Big Trouble in Little Sanchez",
                                "air_date": "September 13, 2015",
                                "episode": "S02E07",
                                "created": "2017-11-10T12:56:35.569Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "19",
                                "name": "Interdimensional Cable 2: Tempting Fate",
                                "air_date": "September 20, 2015",
                                "episode": "S02E08",
                                "created": "2017-11-10T12:56:35.669Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "20",
                                "name": "Look Who's Purging Now",
                                "air_date": "September 27, 2015",
                                "episode": "S02E09",
                                "created": "2017-11-10T12:56:35.772Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "21",
                                "name": "The Wedding Squanchers",
                                "air_date": "October 4, 2015",
                                "episode": "S02E10",
                                "created": "2017-11-10T12:56:35.875Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "22",
                                "name": "The Rickshank Rickdemption",
                                "air_date": "April 1, 2017",
                                "episode": "S03E01",
                                "created": "2017-11-10T12:56:35.983Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "23",
                                "name": "Rickmancing the Stone",
                                "air_date": "July 30, 2017",
                                "episode": "S03E02",
                                "created": "2017-11-10T12:56:36.100Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "24",
                                "name": "Pickle Rick",
                                "air_date": "August 6, 2017",
                                "episode": "S03E03",
                                "created": "2017-11-10T12:56:36.206Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "25",
                                "name": "Vindicators 3: The Return of Worldender",
                                "air_date": "August 13, 2017",
                                "episode": "S03E04",
                                "created": "2017-11-10T12:56:36.310Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "26",
                                "name": "The Whirly Dirly Conspiracy",
                                "air_date": "August 20, 2017",
                                "episode": "S03E05",
                                "created": "2017-11-10T12:56:36.413Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "27",
                                "name": "Rest and Ricklaxation",
                                "air_date": "August 27, 2017",
                                "episode": "S03E06",
                                "created": "2017-11-10T12:56:36.515Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "28",
                                "name": "The Ricklantis Mixup",
                                "air_date": "September 10, 2017",
                                "episode": "S03E07",
                                "created": "2017-11-10T12:56:36.618Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "29",
                                "name": "Morty's Mind Blowers",
                                "air_date": "September 17, 2017",
                                "episode": "S03E08",
                                "created": "2017-11-10T12:56:36.726Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "30",
                                "name": "The ABC's of Beth",
                                "air_date": "September 24, 2017",
                                "episode": "S03E09",
                                "created": "2017-11-10T12:56:36.828Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "31",
                                "name": "The Rickchurian Mortydate",
                                "air_date": "October 1, 2017",
                                "episode": "S03E10",
                                "created": "2017-11-10T12:56:36.929Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "32",
                                "name": "Edge of Tomorty: Rick, Die, Rickpeat",
                                "air_date": "November 10, 2019",
                                "episode": "S04E01",
                                "created": "2020-04-30T06:52:04.495Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "33",
                                "name": "The Old Man and the Seat",
                                "air_date": "November 17, 2019",
                                "episode": "S04E02",
                                "created": "2020-04-30T06:52:04.498Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "34",
                                "name": "One Crew Over the Crewcoo's Morty",
                                "air_date": "November 24, 2019",
                                "episode": "S04E03",
                                "created": "2020-04-30T06:52:04.498Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "35",
                                "name": "Claw and Hoarder: Special Ricktim's Morty",
                                "air_date": "December 8, 2019",
                                "episode": "S04E04",
                                "created": "2020-04-30T06:52:04.498Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "36",
                                "name": "Rattlestar Ricklactica",
                                "air_date": "December 15, 2019",
                                "episode": "S04E05",
                                "created": "2020-04-30T06:52:04.499Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "37",
                                "name": "Never Ricking Morty",
                                "air_date": "May 3, 2020",
                                "episode": "S04E06",
                                "created": "2020-08-06T05:44:21.422Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "38",
                                "name": "Promortyus",
                                "air_date": "May 10, 2020",
                                "episode": "S04E07",
                                "created": "2020-08-06T05:49:40.563Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "39",
                                "name": "The Vat of Acid Episode",
                                "air_date": "May 17, 2020",
                                "episode": "S04E08",
                                "created": "2020-08-06T05:51:07.419Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "40",
                                "name": "Childrick of Mort",
                                "air_date": "May 24, 2020",
                                "episode": "S04E09",
                                "created": "2020-08-06T05:51:25.458Z",
                                "__typename": "Episode"
                            },
                            {
                                "id": "41",
                                "name": "Star Mort: Rickturn of the Jerri",
                                "air_date": "May 31, 2020",
                                "episode": "S04E10",
                                "created": "2020-08-06T05:51:52.079Z",
                                "__typename": "Episode"
                            }
                        ],
                        "__typename": "Character"
                    }
                }

            }
        }

        await act(async() => {
            const component =
                create(
                    <MockedProvider mocks={[characterListMock]}>
                        <CharacterList/>
                    </MockedProvider>,
                );
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            const tree = component.toJSON();
            expect(tree.children[0].children).toContain('Loading...');
        });


    });

    it('should show error UI', async() => {

        await act(async() => {
            const characterListMock = [{
                request: {
                    query: CHARACTER_LIST_QUERY,
                    variables: {
                        page: 1,
                    },
                },
                error: new Error('An error occurred')
            }];
            const component =
                create(
                    <MockedProvider mocks={characterListMock} addTypename={false}>
                        <CharacterList/>
                    </MockedProvider>,
                );


            await new Promise(resolve => setTimeout(resolve, 1000));
            const tree = component.toJSON();
            expect(tree.children[1].children).toContain('Error');
        })
    });
});
