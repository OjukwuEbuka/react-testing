import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../../utils';
import ListItem from './index'

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            let expectedProps = {
                title: 'Test Title',
                desc: 'Test desc'
            }
            let propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Test Title',
                desc: 'Test desc'
            }
            wrapper = shallow(<ListItem {...props} />);
        })
        
        it('Should render w/o error', () => {
            const component = findByTestAttr(wrapper, 'ListItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'titleComponent');
            expect(title.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'descComponent');
            expect(desc.length).toBe(1);
        })
    });

    describe('Should NOT render', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Test desc'
            }
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Component is not rendered', () => {
            const component = findByTestAttr(wrapper, 'ListItemComponent');
            expect(component.length).toBe(0);
        })

    })


})