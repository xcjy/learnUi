import * as renderer from "react-test-renderer";
import Icon from "../icon.tsx";
import {mount} from 'enzyme'
import React from "react";
describe("icon tests", () => {
    it('icon test',()=>{
        const json= renderer.create(<Icon name="alipay"></Icon>).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('onClick',()=>{
        const fn= jest.fn()
        const component= mount(<Icon name='alipay' onClick={fn}/>)
        component.find('svg').simulate('click')
        expect(fn).toBeCalled()
})})
