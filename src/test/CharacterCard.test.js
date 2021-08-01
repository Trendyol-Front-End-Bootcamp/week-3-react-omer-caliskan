import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import CharacterCard from "../components/character/CharacterCard";


Enzyme.configure({ adapter: new Adapter() })

describe("Character Card", () => {
        let characterCard
        let char
        beforeEach(async () => {
          char = {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5"],
    "url": "https://rickandmortyapi.com/api/character/2",
    "created": "2017-11-04T18:50:21.651Z"
}
          characterCard = shallow(<CharacterCard key={2} char={char} />)
        })
  
        it("should render character card", () => {
          expect(characterCard.debug()).toMatchSnapshot()
        })

        it("should character card have right class", () => {
            const checkClass = characterCard.hasClass("list-item")
            expect(checkClass).toBeTruthy()
          })

          it("should seen right character name of item", () => {
            const cardName = characterCard.find('h3').text()
            const charName = char.name

            expect(cardName).toEqual(charName)
          })
  
      })