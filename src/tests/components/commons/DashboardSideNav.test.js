import React from 'react';
import { shallow } from 'enzyme';
import DashboardSideNav from '../../../containers/commons/DashboardSideNav';

describe('DashboardSideNav Page', () => {

    const props = {
        width: "250",
        collapsed: true,
        onCollapse: jest.fn(),
        onChange: jest.fn()
    }
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<DashboardSideNav {...props}/>);
    })

    it('should call onChange and onCollapse', () => {
        const spyOnChange = jest.spyOn(wrapper.instance(), 'onChange')
        const spyspyOnCollapse = jest.spyOn(wrapper.instance(), 'onCollapse')
        wrapper.instance().onChange();
        wrapper.instance().onCollapse();
        expect(spyOnChange).toHaveBeenCalled();
        expect(spyspyOnCollapse).toHaveBeenCalled();
    })

})