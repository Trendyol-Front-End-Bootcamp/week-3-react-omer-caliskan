import Pickle from "../../assets/images/pickle.png";
import React from 'react'
import Loading from "../components/layout/Loading";
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() })
describe("Loading Component Test", () => {
        let loading
        beforeEach(() => {
          loading = shallow( <Loading />);
        })
  
        it("should render loading", () => {
          expect(loading.debug()).toMatchSnapshot();
        })
  
        it("should have true class", () => {
          const classTruthy = loading.hasClass("loading")
  
          expect(classTruthy).toBeTruthy()
        })
  
        it("should have true img", () => {
  
          const imageSrc = loading.childAt(0).prop('src') 
  
          expect(imageSrc).toEqual(Pickle)
        })
  
        it("should have true text", () => {
  
          const loadingText = loading.childAt(1).find('h2')
          
          expect(loadingText.text()).toEqual('Page Loading ...')
        })
      })