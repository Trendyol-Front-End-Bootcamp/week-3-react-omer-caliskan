import React from 'react'
import Homepage from "../components/homepage/Homepage";
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() })
describe("Homepage", () => {
        it("should render homepage", () => {
          const homepage = shallow(<Homepage />)
  
          expect(homepage).toMatchSnapshot()
        })
  
      })