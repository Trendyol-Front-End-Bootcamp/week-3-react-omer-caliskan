import { getCharactersByPageandFilter } from "../service/RickandMortyService";
import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import CharacterList from "../components/character/CharacterList";


Enzyme.configure({ adapter: new Adapter() })

describe("Character List Component", () => {
        let characterList
        beforeEach(async () => {
          const characters = await getCharactersByPageandFilter(1, "All", "All")

          characterList = shallow(<CharacterList characters={[characters]} />)
        })
        it("should render character list", () => {
          expect(characterList).toMatchSnapshot()
        })
  
        it("should check character list class", () => {
          const checkClass = characterList.hasClass("list")
  
          expect(checkClass).toBeTruthy()
        })
  
        it("should check character card called from character list", () => {
          const checkCalled = characterList.find("Character Card")
  
          expect(checkCalled).toBeTruthy()
        })
  
        it("should check character cards have link", () => {
          const checkLink = characterList.find("Link")
  
          expect(checkLink).toBeTruthy()
        })
  
        it("should check all character cards have right link by its id", () => {
          const checkLinkByItem = characterList.find("Link").props().children.props.char.id
          const checkLinkByLink = characterList.find("Link").prop('to')
  
          expect("/" + checkLinkByItem).toEqual(checkLinkByLink)
        })
      })