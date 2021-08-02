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
          expect(backbutton.debug()).toMatchSnapshot();
        })
  
        it("should check backbutton class", () => {
          const buttonTextCheck = backbutton.find('button').hasClass("backbutton")
  
          expect(buttonTextCheck).toBeTruthy();
        })

        it("should check backbutton's link", () => {
          const backLink = backbutton.find('Link').prop('to')

          expect(backLink).toEqual('/')
        })
      })