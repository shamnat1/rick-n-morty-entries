import  {create, act}  from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import Location, { LOCATION_QUERY } from './LocationDetail';

describe("Location Details Component ", () => {


    it('renders without error', () => {
        const match = {
            params: {
                id: 81
            }
        }
        const mocks = [
            {
                request: {
                    query: LOCATION_QUERY,
                    variables: {
                        id: 81,
                    },
                },
                result: {
                    "data":{
                        "location":{
                            "id":"20",
                            "name":"Earth (Replacement Dimension)",
                            "type":"Planet",
                            "dimension":"Replacement Dimension",
                            "residents":[
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
                                    "id":"3",
                                    "name":"Summer Smith",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"4",
                                    "name":"Beth Smith",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"5",
                                    "name":"Jerry Smith",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"9",
                                    "name":"Agency Director",
                                    "status":"Dead",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/9.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"11",
                                    "name":"Albert Einstein",
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
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/11.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"13",
                                    "name":"Alien Googah",
                                    "status":"unknown",
                                    "species":"Alien",
                                    "type":"",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/13.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"16",
                                    "name":"Amish Cyborg",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/16.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"31",
                                    "name":"Baby Wizard",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/31.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"32",
                                    "name":"Bearded Lady",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Female",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/32.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"50",
                                    "name":"Blim Blam",
                                    "status":"Alive",
                                    "species":"Alien",
                                    "type":"Korblock",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/50.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"58",
                                    "name":"Brad",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/58.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"59",
                                    "name":"Brad Anderson",
                                    "status":"Dead",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/59.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"64",
                                    "name":"Chris",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Organic gun",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/64.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"66",
                                    "name":"Coach Feratu (Balik Alistane)",
                                    "status":"Dead",
                                    "species":"Mythological Creature",
                                    "type":"Vampire",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/66.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"76",
                                    "name":"Cousin Nicky",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/76.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"88",
                                    "name":"Cynthia",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/88.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"103",
                                    "name":"Doofus Rick",
                                    "status":"unknown",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"31",
                                        "name":"Earth (J19ζ7)",
                                        "type":"Planet",
                                        "dimension":"Dimension J19ζ7",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/103.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"107",
                                    "name":"Dr. Wong",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/107.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"109",
                                    "name":"Duck With Muscles",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/109.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"113",
                                    "name":"Eric Stoltz Mask Morty",
                                    "status":"unknown",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"33",
                                        "name":"Eric Stoltz Mask Earth",
                                        "type":"Planet",
                                        "dimension":"Eric Stoltz Mask Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/113.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"115",
                                    "name":"Ethan",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/115.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"124",
                                    "name":"Father Bob",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/124.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"128",
                                    "name":"Frankenstein's Monster",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/128.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"137",
                                    "name":"Gene",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/137.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"138",
                                    "name":"General Nathan",
                                    "status":"Dead",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/138.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"141",
                                    "name":"Ghost in a Jar",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Genderless",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/141.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"147",
                                    "name":"Gobo",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/147.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"149",
                                    "name":"Gordon Lunas",
                                    "status":"Dead",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/149.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"151",
                                    "name":"Gwendolyn",
                                    "status":"unknown",
                                    "species":"Robot",
                                    "type":"Gazorpian reproduction robot",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"40",
                                        "name":"Gazorpazorp",
                                        "type":"Planet",
                                        "dimension":"unknown",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/151.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"154",
                                    "name":"Hamurai",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/154.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"166",
                                    "name":"Invisi-trooper",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/166.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"167",
                                    "name":"Izzy",
                                    "status":"Alive",
                                    "species":"Animal",
                                    "type":"Cat",
                                    "gender":"unknown",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/167.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"170",
                                    "name":"Jacqueline",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/170.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"171",
                                    "name":"Jaguar",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/171.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"172",
                                    "name":"Jamey",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/172.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"180",
                                    "name":"Jessica",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/180.jpeg",
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
                                    "id":"182",
                                    "name":"Jim",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/182.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"185",
                                    "name":"Joseph Eli Lipkip",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/185.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"189",
                                    "name":"Katarina",
                                    "status":"Dead",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/189.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"190",
                                    "name":"Keara",
                                    "status":"Alive",
                                    "species":"Alien",
                                    "type":"Krootabulan",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"45",
                                        "name":"Krootabulon",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/190.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"210",
                                    "name":"Lucy",
                                    "status":"Dead",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/210.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"217",
                                    "name":"Mechanical Morty",
                                    "status":"Dead",
                                    "species":"Robot",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/217.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"218",
                                    "name":"Mechanical Rick",
                                    "status":"unknown",
                                    "species":"Robot",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/218.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"219",
                                    "name":"Mechanical Summer",
                                    "status":"unknown",
                                    "species":"Robot",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/219.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"227",
                                    "name":"Mitch",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/227.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"230",
                                    "name":"Morty Jr.",
                                    "status":"Alive",
                                    "species":"Humanoid",
                                    "type":"Human Gazorpian",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/230.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"233",
                                    "name":"Morty K-22",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"52",
                                        "name":"Earth (K-22)",
                                        "type":"Planet",
                                        "dimension":"Dimension K-22",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/233.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"234",
                                    "name":"Morty Smith",
                                    "status":"Dead",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/234.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"236",
                                    "name":"Mr. Beauregard",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/236.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"237",
                                    "name":"Mr. Benson",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/237.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"240",
                                    "name":"Mr. Goldenfold",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/240.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"241",
                                    "name":"Mr. Marklovitz",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/241.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"243",
                                    "name":"Mr. Needful",
                                    "status":"Alive",
                                    "species":"Humanoid",
                                    "type":"The Devil",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/243.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"244",
                                    "name":"Mr. Poopybutthole",
                                    "status":"Alive",
                                    "species":"Poopybutthole",
                                    "type":"",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/244.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"245",
                                    "name":"Mrs. Lipkip",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/245.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"248",
                                    "name":"Mrs. Refrigerator",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Female",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/248.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"251",
                                    "name":"Nancy",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/251.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"255",
                                    "name":"Orthodox Jew",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/255.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"259",
                                    "name":"Pencilvester",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/259.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"262",
                                    "name":"Photography Raptor",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/262.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"265",
                                    "name":"Pickle Rick",
                                    "status":"Alive",
                                    "species":"unknown",
                                    "type":"Pickle",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/265.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"272",
                                    "name":"Principal Vagina",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/272.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"276",
                                    "name":"Rat Boss",
                                    "status":"Dead",
                                    "species":"Animal",
                                    "type":"Rat",
                                    "gender":"unknown",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/276.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"280",
                                    "name":"Reverse Giraffe",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/280.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"292",
                                    "name":"Rick K-22",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"52",
                                        "name":"Earth (K-22)",
                                        "type":"Planet",
                                        "dimension":"Dimension K-22",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/292.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"293",
                                    "name":"Rick Sanchez",
                                    "status":"Dead",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/293.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"324",
                                    "name":"Sleepy Gary",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/324.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"326",
                                    "name":"Slippery Stair",
                                    "status":"Alive",
                                    "species":"Mythological Creature",
                                    "type":"Slug",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"48",
                                        "name":"Fantasy World",
                                        "type":"Planet",
                                        "dimension":"Fantasy Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/326.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"327",
                                    "name":"Slow Mobius",
                                    "status":"Alive",
                                    "species":"Humanoid",
                                    "type":"",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/327.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"332",
                                    "name":"Stacy",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/332.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"335",
                                    "name":"Steve",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/335.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"341",
                                    "name":"Taddy Mason",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/341.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"346",
                                    "name":"Terry",
                                    "status":"unknown",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/346.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"347",
                                    "name":"The President",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/347.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"352",
                                    "name":"Tinkles",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Female",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/352.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"353",
                                    "name":"Tiny Rick",
                                    "status":"Dead",
                                    "species":"Human",
                                    "type":"Clone",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/353.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"354",
                                    "name":"Toby Matthews",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/354.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"357",
                                    "name":"Tommy's Clone",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"Clone",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/357.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"360",
                                    "name":"Toxic Morty",
                                    "status":"Dead",
                                    "species":"Humanoid",
                                    "type":"Morty's toxic side",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"64",
                                        "name":"Detoxifier",
                                        "type":"Machine",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/360.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"361",
                                    "name":"Toxic Rick",
                                    "status":"Dead",
                                    "species":"Humanoid",
                                    "type":"Rick's toxic side",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"64",
                                        "name":"Detoxifier",
                                        "type":"Machine",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/361.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"363",
                                    "name":"Trandor",
                                    "status":"Alive",
                                    "species":"Alien",
                                    "type":"Krootabulan",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"45",
                                        "name":"Krootabulon",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/363.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"365",
                                    "name":"Tricia Lange",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/365.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"374",
                                    "name":"Vampire Master",
                                    "status":"Alive",
                                    "species":"Mythological Creature",
                                    "type":"Vampire",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/374.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"377",
                                    "name":"Voltematron",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/377.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"390",
                                    "name":"Zick Zack",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Floop Floopian",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/390.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"391",
                                    "name":"Uncle Steve",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"Parasite",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/391.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"401",
                                    "name":"Morty Jr's interviewer",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/401.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"402",
                                    "name":"Guy from The Bachelor",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/402.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"405",
                                    "name":"Trunkphobic suspenders guy",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/405.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"423",
                                    "name":"Synthetic Laser Eels",
                                    "status":"Alive",
                                    "species":"Animal",
                                    "type":"Eel",
                                    "gender":"unknown",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/423.jpeg",
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
                                },
                                {
                                    "id":"437",
                                    "name":"Michael",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/437.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"438",
                                    "name":"Michael's Lawyer",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/438.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"439",
                                    "name":"Veterinary",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/439.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"440",
                                    "name":"Veterinary Nurse",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/440.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"452",
                                    "name":"Simon",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/452.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"453",
                                    "name":"Vampire Master's Assistant",
                                    "status":"Alive",
                                    "species":"Mythological Creature",
                                    "type":"Vampire",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/453.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"467",
                                    "name":"Morphizer-XE Customer Support",
                                    "status":"Alive",
                                    "species":"Alien",
                                    "type":"",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/467.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"468",
                                    "name":"Morphizer-XE Customer Support",
                                    "status":"Alive",
                                    "species":"Alien",
                                    "type":"",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/468.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"469",
                                    "name":"Morphizer-XE Customer Support",
                                    "status":"unknown",
                                    "species":"Alien",
                                    "type":"",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/469.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"471",
                                    "name":"Little Voltron",
                                    "status":"Alive",
                                    "species":"Robot",
                                    "type":"",
                                    "gender":"Genderless",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/471.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"492",
                                    "name":"Varrix",
                                    "status":"Alive",
                                    "species":"Alien",
                                    "type":"",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/492.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"493",
                                    "name":"Secretary of the Interior",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/493.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"497",
                                    "name":"Hologram Rick",
                                    "status":"Dead",
                                    "species":"Humanoid",
                                    "type":"Hologram",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/497.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"509",
                                    "name":"Bully",
                                    "status":"unknown",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/509.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"510",
                                    "name":"Anchorman",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/510.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"511",
                                    "name":"Anchorwoman",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/511.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"512",
                                    "name":"Morty’s Lawyer",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/512.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"513",
                                    "name":"Judge",
                                    "status":"Dead",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/513.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"514",
                                    "name":"Public Opinion Judge",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/514.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"516",
                                    "name":"Wasp Rick",
                                    "status":"Alive",
                                    "species":"Animal",
                                    "type":"Wasp",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"82",
                                        "name":"Earth (Wasp Dimension)",
                                        "type":"Planet",
                                        "dimension":"Wasp Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/516.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"517",
                                    "name":"Wasp Rick’s Clone",
                                    "status":"unknown",
                                    "species":"Animal",
                                    "type":"Wasp",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"82",
                                        "name":"Earth (Wasp Dimension)",
                                        "type":"Planet",
                                        "dimension":"Wasp Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/517.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"523",
                                    "name":"Boglin",
                                    "status":"unknown",
                                    "species":"unknown",
                                    "type":"Toy",
                                    "gender":"unknown",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/523.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"524",
                                    "name":"Kirkland Brand Mr. Meeseeks",
                                    "status":"unknown",
                                    "species":"Humanoid",
                                    "type":"Meeseeks",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"53",
                                        "name":"Mr. Meeseeks Box",
                                        "type":"Box",
                                        "dimension":"unknown",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/524.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"526",
                                    "name":"Danny Publitz",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/526.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"534",
                                    "name":"Tony's Dad",
                                    "status":"Alive",
                                    "species":"Alien",
                                    "type":"",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/534.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"535",
                                    "name":"Jeff",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/535.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"536",
                                    "name":"Josiah",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/536.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"537",
                                    "name":"Maggie",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/537.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"538",
                                    "name":"Priest Witherspoon",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/538.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"539",
                                    "name":"Richard",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/539.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"540",
                                    "name":"Running Bird",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/540.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"541",
                                    "name":"Secretary at Tony's",
                                    "status":"Alive",
                                    "species":"Alien",
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
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/541.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"561",
                                    "name":"Netflix Executive",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/561.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"562",
                                    "name":"Balthromaw",
                                    "status":"Alive",
                                    "species":"Mythological Creature",
                                    "type":"Dragon",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"94",
                                        "name":"Draygon",
                                        "type":"Planet",
                                        "dimension":"Magic Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/562.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"564",
                                    "name":"Talking Cat",
                                    "status":"Alive",
                                    "species":"Animal",
                                    "type":"",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/564.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"570",
                                    "name":"Chachi",
                                    "status":"Dead",
                                    "species":"Alien",
                                    "type":"",
                                    "gender":"Male",
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
                                    "image":"https://rickandmortyapi.com/api/character/avatar/570.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"575",
                                    "name":"Snake Resistance Robot",
                                    "status":"Dead",
                                    "species":"Robot",
                                    "type":"Human-Snake hybrid",
                                    "gender":"Genderless",
                                    "origin":{
                                        "id":"78",
                                        "name":"Snake Planet",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/575.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"584",
                                    "name":"Bar Customer",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/584.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"585",
                                    "name":"Bartender",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/585.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"586",
                                    "name":"PC Basketball Player",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/586.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"588",
                                    "name":"Pet Shop Employee",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/588.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"590",
                                    "name":"High Pilot",
                                    "status":"unknown",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/590.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"591",
                                    "name":"High Pilot",
                                    "status":"unknown",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/591.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"592",
                                    "name":"Phoenixperson",
                                    "status":"Alive",
                                    "species":"Alien",
                                    "type":"Cyborg",
                                    "gender":"Male",
                                    "origin":{
                                        "id":"15",
                                        "name":"Bird World",
                                        "type":"Planet",
                                        "dimension":"unknown",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/592.jpeg",
                                    "__typename":"Character"
                                },
                                {
                                    "id":"667",
                                    "name":"Defiance Beth",
                                    "status":"Alive",
                                    "species":"Human",
                                    "type":"",
                                    "gender":"Female",
                                    "origin":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "location":{
                                        "id":"20",
                                        "name":"Earth (Replacement Dimension)",
                                        "type":"Planet",
                                        "dimension":"Replacement Dimension",
                                        "__typename":"Location"
                                    },
                                    "image":"https://rickandmortyapi.com/api/character/avatar/667.jpeg",
                                    "__typename":"Character"
                                }
                            ],
                            "__typename":"Location"
                        }
                    }
                }
            }
        ];
        const component = create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Location match={match}/>
            </MockedProvider>,
        );

        const tree = component.toJSON();
        expect(tree.children[0].children).toContain('Loading...');
    });

    it('should show error UI', async() => {
        const match = {
            params: {
                id: 81
            }
        }
        const locationListMock = [{
            request: {
                query: LOCATION_QUERY,
                variables: {
                    id: 20,
                },
            },
            error: new Error('An error occurred')
        }];
        const component =
            create(
                <MockedProvider mocks={locationListMock} addTypename={false}>
                    <Location match={match}/>
                </MockedProvider>,
            );


        await new Promise(resolve => setTimeout(resolve, 0));
        const tree = component.toJSON();
        expect(tree.children[1].children).toContain('Error');
    });

    it('should render Location Details', async() => {
        const locationListMock = {
            request: {
                query: LOCATION_QUERY,
                variables: {
                    id: 81,
                },
            },

            "result": {
                "data":{
                    "location":{
                        "id":"20",
                        "name":"Earth (Replacement Dimension)",
                        "type":"Planet",
                        "dimension":"Replacement Dimension",
                        "residents":[
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
                                "id":"3",
                                "name":"Summer Smith",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"4",
                                "name":"Beth Smith",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"5",
                                "name":"Jerry Smith",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"9",
                                "name":"Agency Director",
                                "status":"Dead",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/9.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"11",
                                "name":"Albert Einstein",
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
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/11.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"13",
                                "name":"Alien Googah",
                                "status":"unknown",
                                "species":"Alien",
                                "type":"",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/13.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"16",
                                "name":"Amish Cyborg",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/16.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"31",
                                "name":"Baby Wizard",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/31.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"32",
                                "name":"Bearded Lady",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Female",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/32.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"50",
                                "name":"Blim Blam",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"Korblock",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/50.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"58",
                                "name":"Brad",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/58.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"59",
                                "name":"Brad Anderson",
                                "status":"Dead",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/59.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"64",
                                "name":"Chris",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Organic gun",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/64.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"66",
                                "name":"Coach Feratu (Balik Alistane)",
                                "status":"Dead",
                                "species":"Mythological Creature",
                                "type":"Vampire",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/66.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"76",
                                "name":"Cousin Nicky",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/76.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"88",
                                "name":"Cynthia",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/88.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"103",
                                "name":"Doofus Rick",
                                "status":"unknown",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"31",
                                    "name":"Earth (J19ζ7)",
                                    "type":"Planet",
                                    "dimension":"Dimension J19ζ7",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/103.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"107",
                                "name":"Dr. Wong",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/107.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"109",
                                "name":"Duck With Muscles",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/109.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"113",
                                "name":"Eric Stoltz Mask Morty",
                                "status":"unknown",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"33",
                                    "name":"Eric Stoltz Mask Earth",
                                    "type":"Planet",
                                    "dimension":"Eric Stoltz Mask Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/113.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"115",
                                "name":"Ethan",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/115.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"124",
                                "name":"Father Bob",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/124.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"128",
                                "name":"Frankenstein's Monster",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/128.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"137",
                                "name":"Gene",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/137.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"138",
                                "name":"General Nathan",
                                "status":"Dead",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/138.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"141",
                                "name":"Ghost in a Jar",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Genderless",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/141.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"147",
                                "name":"Gobo",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/147.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"149",
                                "name":"Gordon Lunas",
                                "status":"Dead",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/149.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"151",
                                "name":"Gwendolyn",
                                "status":"unknown",
                                "species":"Robot",
                                "type":"Gazorpian reproduction robot",
                                "gender":"Female",
                                "origin":{
                                    "id":"40",
                                    "name":"Gazorpazorp",
                                    "type":"Planet",
                                    "dimension":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/151.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"154",
                                "name":"Hamurai",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/154.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"166",
                                "name":"Invisi-trooper",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/166.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"167",
                                "name":"Izzy",
                                "status":"Alive",
                                "species":"Animal",
                                "type":"Cat",
                                "gender":"unknown",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/167.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"170",
                                "name":"Jacqueline",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/170.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"171",
                                "name":"Jaguar",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/171.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"172",
                                "name":"Jamey",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/172.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"180",
                                "name":"Jessica",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/180.jpeg",
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
                                "id":"182",
                                "name":"Jim",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/182.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"185",
                                "name":"Joseph Eli Lipkip",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/185.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"189",
                                "name":"Katarina",
                                "status":"Dead",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/189.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"190",
                                "name":"Keara",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"Krootabulan",
                                "gender":"Female",
                                "origin":{
                                    "id":"45",
                                    "name":"Krootabulon",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/190.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"210",
                                "name":"Lucy",
                                "status":"Dead",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/210.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"217",
                                "name":"Mechanical Morty",
                                "status":"Dead",
                                "species":"Robot",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/217.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"218",
                                "name":"Mechanical Rick",
                                "status":"unknown",
                                "species":"Robot",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/218.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"219",
                                "name":"Mechanical Summer",
                                "status":"unknown",
                                "species":"Robot",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/219.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"227",
                                "name":"Mitch",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/227.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"230",
                                "name":"Morty Jr.",
                                "status":"Alive",
                                "species":"Humanoid",
                                "type":"Human Gazorpian",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/230.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"233",
                                "name":"Morty K-22",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"52",
                                    "name":"Earth (K-22)",
                                    "type":"Planet",
                                    "dimension":"Dimension K-22",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/233.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"234",
                                "name":"Morty Smith",
                                "status":"Dead",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/234.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"236",
                                "name":"Mr. Beauregard",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/236.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"237",
                                "name":"Mr. Benson",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/237.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"240",
                                "name":"Mr. Goldenfold",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/240.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"241",
                                "name":"Mr. Marklovitz",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/241.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"243",
                                "name":"Mr. Needful",
                                "status":"Alive",
                                "species":"Humanoid",
                                "type":"The Devil",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/243.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"244",
                                "name":"Mr. Poopybutthole",
                                "status":"Alive",
                                "species":"Poopybutthole",
                                "type":"",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/244.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"245",
                                "name":"Mrs. Lipkip",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/245.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"248",
                                "name":"Mrs. Refrigerator",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Female",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/248.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"251",
                                "name":"Nancy",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/251.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"255",
                                "name":"Orthodox Jew",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/255.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"259",
                                "name":"Pencilvester",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/259.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"262",
                                "name":"Photography Raptor",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/262.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"265",
                                "name":"Pickle Rick",
                                "status":"Alive",
                                "species":"unknown",
                                "type":"Pickle",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/265.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"272",
                                "name":"Principal Vagina",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/272.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"276",
                                "name":"Rat Boss",
                                "status":"Dead",
                                "species":"Animal",
                                "type":"Rat",
                                "gender":"unknown",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/276.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"280",
                                "name":"Reverse Giraffe",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/280.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"292",
                                "name":"Rick K-22",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"52",
                                    "name":"Earth (K-22)",
                                    "type":"Planet",
                                    "dimension":"Dimension K-22",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/292.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"293",
                                "name":"Rick Sanchez",
                                "status":"Dead",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/293.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"324",
                                "name":"Sleepy Gary",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/324.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"326",
                                "name":"Slippery Stair",
                                "status":"Alive",
                                "species":"Mythological Creature",
                                "type":"Slug",
                                "gender":"Male",
                                "origin":{
                                    "id":"48",
                                    "name":"Fantasy World",
                                    "type":"Planet",
                                    "dimension":"Fantasy Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/326.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"327",
                                "name":"Slow Mobius",
                                "status":"Alive",
                                "species":"Humanoid",
                                "type":"",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/327.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"332",
                                "name":"Stacy",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/332.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"335",
                                "name":"Steve",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/335.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"341",
                                "name":"Taddy Mason",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/341.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"346",
                                "name":"Terry",
                                "status":"unknown",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/346.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"347",
                                "name":"The President",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/347.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"352",
                                "name":"Tinkles",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Female",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/352.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"353",
                                "name":"Tiny Rick",
                                "status":"Dead",
                                "species":"Human",
                                "type":"Clone",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/353.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"354",
                                "name":"Toby Matthews",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/354.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"357",
                                "name":"Tommy's Clone",
                                "status":"Alive",
                                "species":"Human",
                                "type":"Clone",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/357.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"360",
                                "name":"Toxic Morty",
                                "status":"Dead",
                                "species":"Humanoid",
                                "type":"Morty's toxic side",
                                "gender":"Male",
                                "origin":{
                                    "id":"64",
                                    "name":"Detoxifier",
                                    "type":"Machine",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/360.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"361",
                                "name":"Toxic Rick",
                                "status":"Dead",
                                "species":"Humanoid",
                                "type":"Rick's toxic side",
                                "gender":"Male",
                                "origin":{
                                    "id":"64",
                                    "name":"Detoxifier",
                                    "type":"Machine",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/361.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"363",
                                "name":"Trandor",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"Krootabulan",
                                "gender":"Male",
                                "origin":{
                                    "id":"45",
                                    "name":"Krootabulon",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/363.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"365",
                                "name":"Tricia Lange",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/365.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"374",
                                "name":"Vampire Master",
                                "status":"Alive",
                                "species":"Mythological Creature",
                                "type":"Vampire",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/374.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"377",
                                "name":"Voltematron",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/377.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"390",
                                "name":"Zick Zack",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Floop Floopian",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/390.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"391",
                                "name":"Uncle Steve",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"Parasite",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/391.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"401",
                                "name":"Morty Jr's interviewer",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/401.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"402",
                                "name":"Guy from The Bachelor",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/402.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"405",
                                "name":"Trunkphobic suspenders guy",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/405.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"423",
                                "name":"Synthetic Laser Eels",
                                "status":"Alive",
                                "species":"Animal",
                                "type":"Eel",
                                "gender":"unknown",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/423.jpeg",
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
                            },
                            {
                                "id":"437",
                                "name":"Michael",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/437.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"438",
                                "name":"Michael's Lawyer",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/438.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"439",
                                "name":"Veterinary",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/439.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"440",
                                "name":"Veterinary Nurse",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/440.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"452",
                                "name":"Simon",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/452.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"453",
                                "name":"Vampire Master's Assistant",
                                "status":"Alive",
                                "species":"Mythological Creature",
                                "type":"Vampire",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/453.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"467",
                                "name":"Morphizer-XE Customer Support",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/467.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"468",
                                "name":"Morphizer-XE Customer Support",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/468.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"469",
                                "name":"Morphizer-XE Customer Support",
                                "status":"unknown",
                                "species":"Alien",
                                "type":"",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/469.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"471",
                                "name":"Little Voltron",
                                "status":"Alive",
                                "species":"Robot",
                                "type":"",
                                "gender":"Genderless",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/471.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"492",
                                "name":"Varrix",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/492.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"493",
                                "name":"Secretary of the Interior",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/493.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"497",
                                "name":"Hologram Rick",
                                "status":"Dead",
                                "species":"Humanoid",
                                "type":"Hologram",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/497.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"509",
                                "name":"Bully",
                                "status":"unknown",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/509.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"510",
                                "name":"Anchorman",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/510.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"511",
                                "name":"Anchorwoman",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/511.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"512",
                                "name":"Morty’s Lawyer",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/512.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"513",
                                "name":"Judge",
                                "status":"Dead",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/513.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"514",
                                "name":"Public Opinion Judge",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/514.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"516",
                                "name":"Wasp Rick",
                                "status":"Alive",
                                "species":"Animal",
                                "type":"Wasp",
                                "gender":"Male",
                                "origin":{
                                    "id":"82",
                                    "name":"Earth (Wasp Dimension)",
                                    "type":"Planet",
                                    "dimension":"Wasp Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/516.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"517",
                                "name":"Wasp Rick’s Clone",
                                "status":"unknown",
                                "species":"Animal",
                                "type":"Wasp",
                                "gender":"Male",
                                "origin":{
                                    "id":"82",
                                    "name":"Earth (Wasp Dimension)",
                                    "type":"Planet",
                                    "dimension":"Wasp Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/517.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"523",
                                "name":"Boglin",
                                "status":"unknown",
                                "species":"unknown",
                                "type":"Toy",
                                "gender":"unknown",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/523.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"524",
                                "name":"Kirkland Brand Mr. Meeseeks",
                                "status":"unknown",
                                "species":"Humanoid",
                                "type":"Meeseeks",
                                "gender":"Male",
                                "origin":{
                                    "id":"53",
                                    "name":"Mr. Meeseeks Box",
                                    "type":"Box",
                                    "dimension":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/524.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"526",
                                "name":"Danny Publitz",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/526.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"534",
                                "name":"Tony's Dad",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/534.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"535",
                                "name":"Jeff",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/535.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"536",
                                "name":"Josiah",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/536.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"537",
                                "name":"Maggie",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/537.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"538",
                                "name":"Priest Witherspoon",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/538.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"539",
                                "name":"Richard",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/539.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"540",
                                "name":"Running Bird",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/540.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"541",
                                "name":"Secretary at Tony's",
                                "status":"Alive",
                                "species":"Alien",
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
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/541.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"561",
                                "name":"Netflix Executive",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/561.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"562",
                                "name":"Balthromaw",
                                "status":"Alive",
                                "species":"Mythological Creature",
                                "type":"Dragon",
                                "gender":"Male",
                                "origin":{
                                    "id":"94",
                                    "name":"Draygon",
                                    "type":"Planet",
                                    "dimension":"Magic Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/562.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"564",
                                "name":"Talking Cat",
                                "status":"Alive",
                                "species":"Animal",
                                "type":"",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/564.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"570",
                                "name":"Chachi",
                                "status":"Dead",
                                "species":"Alien",
                                "type":"",
                                "gender":"Male",
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
                                "image":"https://rickandmortyapi.com/api/character/avatar/570.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"575",
                                "name":"Snake Resistance Robot",
                                "status":"Dead",
                                "species":"Robot",
                                "type":"Human-Snake hybrid",
                                "gender":"Genderless",
                                "origin":{
                                    "id":"78",
                                    "name":"Snake Planet",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/575.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"584",
                                "name":"Bar Customer",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/584.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"585",
                                "name":"Bartender",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/585.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"586",
                                "name":"PC Basketball Player",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/586.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"588",
                                "name":"Pet Shop Employee",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/588.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"590",
                                "name":"High Pilot",
                                "status":"unknown",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/590.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"591",
                                "name":"High Pilot",
                                "status":"unknown",
                                "species":"Human",
                                "type":"",
                                "gender":"Male",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/591.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"592",
                                "name":"Phoenixperson",
                                "status":"Alive",
                                "species":"Alien",
                                "type":"Cyborg",
                                "gender":"Male",
                                "origin":{
                                    "id":"15",
                                    "name":"Bird World",
                                    "type":"Planet",
                                    "dimension":"unknown",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/592.jpeg",
                                "__typename":"Character"
                            },
                            {
                                "id":"667",
                                "name":"Defiance Beth",
                                "status":"Alive",
                                "species":"Human",
                                "type":"",
                                "gender":"Female",
                                "origin":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "location":{
                                    "id":"20",
                                    "name":"Earth (Replacement Dimension)",
                                    "type":"Planet",
                                    "dimension":"Replacement Dimension",
                                    "__typename":"Location"
                                },
                                "image":"https://rickandmortyapi.com/api/character/avatar/667.jpeg",
                                "__typename":"Character"
                            }
                        ],
                        "__typename":"Location"
                    }
                }
            }

        }

        let component;
        await act(async() => {
            const match = {
                params: {
                    id: 81
                }
            }
            component =
                create(
                    <MockedProvider mocks={[locationListMock]}>
                        <Location match={match}/>
                    </MockedProvider>,
                );
            await new Promise(resolve => setTimeout(resolve, 1000));
            const tree = component.toJSON();
            expect(component.toJSON().children[0].type).toContain('div');
            expect(component.toJSON().children[0].children[0].type).toContain('h6');
        });


    });
});