import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from 'antd';
import HomePage from '../../../containers/commons/HomePage';

describe('Dashboard Page', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<HomePage/>);
    })

    it('should set state of renderHome to true', () => {
        wrapper.instance().renderHomePage();
        expect(wrapper.instance().state.renderHome).toBe(true);
    })

    it('should set state of renderCourses to true', () => {
        wrapper.instance().renderCoursesPage();
        expect(wrapper.instance().state.renderCourses).toBe(true);
    })

    it('should set state of renderApplicants to true', () => {
        wrapper.instance().renderApplicantsPage();
        expect(wrapper.instance().state.renderApplicants).toBe(true);
    })

    it('should set state of renderAdmission to true', () => {
        wrapper.instance().renderAdmissionsPage();
        expect(wrapper.instance().state.renderAdmission).toBe(true);
    })

    it('should set state of renderRejected to true', () => {
        wrapper.instance().renderRejectedPage();
        expect(wrapper.instance().state.renderRejected).toBe(true);
    })

    it('should set state of renderAccepted to true', () => {
        wrapper.instance().renderAcceptedPage();
        expect(wrapper.instance().state.renderAccepted).toBe(true);
    })

    it('should set state of renderAccepted to true when it is the last clicked menu item', () => {
        wrapper.find(Menu.Item).at(0).simulate('click');
        wrapper.find(Menu.Item).at(1).simulate('click');
        wrapper.find(Menu.Item).at(2).simulate('click');
        wrapper.find(Menu.Item).at(3).simulate('click');
        wrapper.find(Menu.Item).at(4).simulate('click');
        wrapper.find(Menu.Item).at(5).simulate('click');
        wrapper.find(Menu.Item).at(6).simulate('click');
        expect(wrapper.instance().state.renderAccepted).toBe(true);
    })

})