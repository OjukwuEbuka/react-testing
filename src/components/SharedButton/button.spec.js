import React from 'react';
import { findByTestAttr, checkProps } from '../../../utils';
import { shallow } from 'enzyme';
import SharedButton from './index';

describe('SharedButton Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Button Text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(SharedButton, expectedProps);

            expect(propsError).toBeUndefined()
        })

    });

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Button Text',
                emitEvent: () => {}
            };
            wrapper = shallow(<SharedButton {...props} />)
        });

        it('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })
    })


})