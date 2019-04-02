import React from 'react';
import { mount } from 'enzyme';
import LandingPage from '../../../containers/home/LandingPage';

describe('Landing Page', () => {

    const props = {
        current: true,
        next: jest.fn(),
        previous: jest.fn()
    }

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<LandingPage {...props}/>);
    })
    
    it('should show a previous button when next button is clicked', () => {
        const nextButton = wrapper.find('.ant-btn-primary');
        expect(nextButton).toHaveLength(1);
        nextButton.simulate('click');
        expect(wrapper.text()).toContain('Previous');
    })

    it('should increment state value of current when next is clicked', () =>{
        expect(wrapper.state().current).toBe(0);
        const nextButton = wrapper.find('.ant-btn-primary');
        nextButton.simulate('click');
        expect(wrapper.state().current).toBe(1);
    })

    it('should decrement state value of current when previous is clicked', () =>{
        expect(wrapper.state().current).toBe(0);
        const nextButton = wrapper.find('.ant-btn-primary');
        nextButton.simulate('click');
        expect(wrapper.state().current).toBe(1);
        const prevButton = wrapper.find('.ant-btn').at(1);
        prevButton.simulate('click');
        expect(wrapper.state().current).toBe(0);
    })

    it('should call next() function when the button is clicked', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'next');
        wrapper.instance().next();
        expect(spy).toHaveBeenCalled();
    })

    it('should call previous() function when the previous button is clicked', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'previous');
        wrapper.instance().next();
        wrapper.instance().previous();
        expect(spy).toHaveBeenCalled();
    })

    it('should call welcomeHome() when Done button is clicked after third stage', () => {
        const nextButton = wrapper.find('.ant-btn-primary');
        expect(nextButton).toHaveLength(1);
        nextButton.simulate('click');
        nextButton.simulate('click');
        const spy = jest.spyOn(wrapper.instance(), 'welcomeHome');
        expect(wrapper.text()).toContain('Done');
        expect(wrapper.find('button')).toHaveLength(2);
        const doneButton = wrapper.find('button').at(0);
        doneButton.simulate('click');
        wrapper.instance().welcomeHome('Thank you for applying');
        expect(spy).toHaveBeenCalledWith('Thank you for applying');
        
    })
})