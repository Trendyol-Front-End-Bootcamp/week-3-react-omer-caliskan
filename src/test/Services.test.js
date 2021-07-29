import { getCharactersByPageandFilter, getCharacterById, getEpisodeName } from "../service/RickandMortyService";
const axios = require("axios")

jest.mock("axios");

describe("RickAndMortyService", () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Character Detail", () => {
    it("should return character by given id", async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          data: [{
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",
            origin: {
              name: "Earth",
              url: "https://rickandmortyapi.com/api/location/1"
            },
            location: {
              name: "Earth",
              url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            url: "https://rickandmortyapi.com/api/character/2",
            created: "2017-11-04T18:50:21.651Z"
          }]
        });
      });

      const data = await getCharacterById(2);

      expect(data).toEqual([
        {
          id: 2,
          name: "Morty Smith",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          origin: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/1"
          },
          location: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/20"
          },
          image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          url: "https://rickandmortyapi.com/api/character/2",
          created: "2017-11-04T18:50:21.651Z"
        }
      ]);
    });
  });

  describe("Episode Name", () => {
    it("should return episode name", async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          // Last Episode of Morty Sanchez
          data: {
            name: "Star Mort: Rickturn of the Jerri"
          }
        })
      });

      const data = await getEpisodeName("https://rickandmortyapi.com/api/episode/41");

      expect(data).toEqual(
        "Star Mort: Rickturn of the Jerri"
      )
    })
  })

  describe("Filtered Characters", () => {
    it("should return filtered characters without pagination ( page 1 )", async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          // gender: genderless, status: dead
          data: [
            {
              "id": 141,
              "name": "Ghost in a Jar",
              "status": "Dead",
              "species": "Alien",
              "type": "Parasite",
              "gender": "Genderless",
              "origin": {
                "name": "unknown",
                "url": ""
              },
              "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/141.jpeg",
              "episode": [
                "https://rickandmortyapi.com/api/episode/15"
              ],
              "url": "https://rickandmortyapi.com/api/character/141",
              "created": "2017-12-27T19:14:14.545Z"
            }
          ]
        })
      });

      const data = await getCharactersByPageandFilter(1, "dead", "genderless");

      expect(data).toMatchObject(
        [
          {
            "id": 141,
            "name": "Ghost in a Jar",
            "status": "Dead",
            "species": "Alien",
            "type": "Parasite",
            "gender": "Genderless",
            "origin": {
              "name": "unknown",
              "url": ""
            },
            "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/141.jpeg",
            "episode": [
              "https://rickandmortyapi.com/api/episode/15"
            ],
            "url": "https://rickandmortyapi.com/api/character/141",
            "created": "2017-12-27T19:14:14.545Z"
          }
        ]
      )

    })
  })

  describe("Pagination for Characters", () => {
    it("should return characters by given page without any filter", async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          // page : 4
          data: [
            {
              "id": 61,
              "name": "Campaign Manager Morty",
              "status": "Dead",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                "name": "unknown",
                "url": ""
              },
              "location": {
                "name": "Citadel of Ricks",
                "url": "https://rickandmortyapi.com/api/location/3"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/61.jpeg",
              "episode": [
                "https://rickandmortyapi.com/api/episode/28"
              ],
              "url": "https://rickandmortyapi.com/api/character/61",
              "created": "2017-11-05T11:53:44.737Z"
            }
          ]
        })
      });

      const data = await getCharactersByPageandFilter(4, "All", "All");

      expect(data).toMatchObject(
        [
          {
            "id": 61,
            "name": "Campaign Manager Morty",
            "status": "Dead",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
              "name": "unknown",
              "url": ""
            },
            "location": {
              "name": "Citadel of Ricks",
              "url": "https://rickandmortyapi.com/api/location/3"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/61.jpeg",
            "episode": [
              "https://rickandmortyapi.com/api/episode/28"
            ],
            "url": "https://rickandmortyapi.com/api/character/61",
            "created": "2017-11-05T11:53:44.737Z"
          }
        ]
      )

    })
  })

  describe("Pagination and Filter Characters", () => {
    it("should return characters by given page with filter", async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          // page : 4, gender : male, status : dead
          data: [
            {
              "id": 223,
              "name": "Michael Jenkins",
              "status": "Dead",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "origin": {
                "name": "unknown",
                "url": ""
              },
              "location": {
                "name": "Interdimensional Cable",
                "url": "https://rickandmortyapi.com/api/location/6"
              },
              "image": "https://rickandmortyapi.com/api/character/avatar/223.jpeg",
              "episode": [
                "https://rickandmortyapi.com/api/episode/19"
              ],
              "url": "https://rickandmortyapi.com/api/character/223",
              "created": "2017-12-30T14:44:51.373Z"
            }
          ]
        })
      });

      const data = await getCharactersByPageandFilter(4, "dead", "male");

      expect(data).toMatchObject(
        [
          {
            "id": 223,
            "name": "Michael Jenkins",
            "status": "Dead",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
              "name": "unknown",
              "url": ""
            },
            "location": {
              "name": "Interdimensional Cable",
              "url": "https://rickandmortyapi.com/api/location/6"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/223.jpeg",
            "episode": [
              "https://rickandmortyapi.com/api/episode/19"
            ],
            "url": "https://rickandmortyapi.com/api/character/223",
            "created": "2017-12-30T14:44:51.373Z"
          }
        ])
      })  
    })
  })
