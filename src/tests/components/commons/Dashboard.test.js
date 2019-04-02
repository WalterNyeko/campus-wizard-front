import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../../containers/commons/Dashboard';
import DashboardSideNav from '../../../containers/commons/DashboardSideNav'

describe('Dashboard Page', () => {

    const props = {
        renderHome: true, 
        renderCourses: false, 
        renderAccepted: false,
        renderApplicants: false,
        renderSettings: false, 
        renderAdmission: false
    }

    let wrapper;
    it('should render dashboard component properly', () => {
        wrapper = shallow(<Dashboard state={props}/>);
        expect(wrapper.find(DashboardSideNav)).toHaveLength(1);
    })
})