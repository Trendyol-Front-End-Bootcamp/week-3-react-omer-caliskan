import React from 'react'
import Homepage from "../components/homepage/Homepage";
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() })

describe("Homepage", () => {
  let homepage
  
  beforeEach(async () => {
    homepage = shallow(<Homepage test={true}/>)
    })

    it("should render homepage", () => {
      jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f())
      expect(homepage.debug()).toMatchSnapshot()
      })
      
      it("should selects have onchange func", () => {
        const selects = homepage.find('select').at(0).props('onChange')

        expect(selects).toBeTruthy()
      })

    it("should check select items ", () => {
      const select = homepage.find('select').at(0)

      const selectedItems = select.props().children[1].props.children

      expect(selectedItems).toEqual("Male")

      })
      
  })