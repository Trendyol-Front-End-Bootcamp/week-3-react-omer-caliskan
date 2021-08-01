import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import PageNotFound from "../components/notfound/PageNotFound";

Enzyme.configure({ adapter: new Adapter() })

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