import React from 'react'
import BackButton from "../components/layout/BackButton";
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() })

describe("BackButton Component Test", () => {
        let backbutton
  
        beforeEach(() => {
          backbutton = shallow(<BackButton />)
        })
  
        it("should render backbutton", () => {
          expect(backbutton).toMatchSnapshot();
        })
  
        it("should check backbutton class", () => {
          const buttonTextCheck = backbutton.hasClass("backbutton")
  
          expect(buttonTextCheck).toBeTruthy();
        })
      })