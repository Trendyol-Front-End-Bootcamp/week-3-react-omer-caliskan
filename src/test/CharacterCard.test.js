import { getCharacterById } from "../service/RickandMortyService";
import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import CharacterCard from "../components/character/CharacterCard";
import PageNotFound from "../components/notfound/PageNotFound";


Enzyme.configure({ adapter: new Adapter() })

describe("Character Card", () => {
        let characterCard
        let char
        beforeEach(async () => {
          char = await getCharacterById(2)
          characterCard = shallow(<CharacterCard key={2} char={char} />)
        })
  
        it("should render character card", () => {
          expect(characterCard).toMatchSnapshot()
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

          describe("Not Found Page", () => {
            let notfound

            beforeEach(() => {
                notfound = shallow(<PageNotFound />)
            })

            it("should check page not found class", () => {
                const checkClass = notfound.hasClass("notfound")
        
                expect(checkClass).toBeTruthy()
              })

            it("should render Page Not Found", () => {
                expect(notfound).toMatchSnapshot()
            })

            it("should have right Page Not Found message", () => {
                const message = notfound.find('h2').text()

                expect(message).toEqual("The page you are trying to search has been moved to another universe.")
            })
          })
  
  
      })