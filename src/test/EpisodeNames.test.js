import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import EpisodeNames from "../components/details/EpisodeNames";

Enzyme.configure({ adapter: new Adapter() })

describe("episode names", () => {
    let episodeNames
    let episodeName
    beforeEach(async () => {
        episodeName = "Star Mort: Rickturn of the Jerri"
        episodeNames = shallow(<EpisodeNames epNameforTest={episodeName} />)
        
    })
    it("should render episode names", () => {

        expect(episodeNames.debug()).toMatchSnapshot()
    })

    it("should render episode names correctly", () => {
        let cardText = episodeNames.find('li').text()

        expect(episodeName).toEqual(cardText)
    })
})