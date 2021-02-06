import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import {checkProps, findByTestAttr} from '../../../utils';

let setUp = (props = {} ) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {

    describe('Check PropTypes', () => {
        
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'TEst Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName:  'Test fName',
                    lName:  'Test lName',
                    email:  'Test email',
                    age:  23,
                    onlineStatus:  false,
                }]
            };
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBe(undefined);
        })
    })

    describe('Have Props', () => {
        let component;
        beforeEach(() => {
            const props = {
                header: 'My Header',
                desc: 'Click to load'
            }
            component = setUp(props);
        })
        
        it('Should render w/o errors', () => {
            const wrapper = findByTestAttr(component, 'headlineComponent');
            expect(wrapper.length).toBe(1)
        })
        
        it('Should render a h1', () => {
            const header = findByTestAttr(component, 'header');
            expect(header.length).toBe(1)
        })
        
        it('Should render a desc', () => {
            const desc = findByTestAttr(component, 'desc');
            expect(desc.length).toBe(1)
        })
        
    })

    describe('Have NO Props', () => {
        let component;
        beforeEach(() => {
            component = setUp();
        })
        
        it('Should not render', () => {
            const wrapper = findByTestAttr(component, 'headlineComponent');
            expect(wrapper.length).toBe(0)
        })


    })

})