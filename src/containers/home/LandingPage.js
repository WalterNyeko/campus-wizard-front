import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../../components/assets/styles/steps.css';
import '../../components/assets/styles/landingPage.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { message } from 'antd';
import LandingPageComponent from '../../components/home/LandingPage';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.welcomeHome = this.welcomeHome.bind(this);
      }

    /**
     * Moves the user to the next phase 
     * of the application cycle
     * 
     * @returns {void}
     */
    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    /**
     * Moves the user to the previous phase 
     * of the application cycle
     * 
     * @returns {void}
     */
    previous = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    /**
     * takes the user to the welcome page
     * shows welcome message
     * 
     * @param {String} message
     * 
     * @returns {JSX}
     */
    welcomeHome = (userMessage) => {
      message.success(userMessage);
      return (
        <Redirect to="/home" />
      )
    }

  render() {
    const { current } = this.state;
    return (
        <React.Fragment>
          <LandingPageComponent
            current={current}
            next={this.next}
            previous={this.previous}
            welcomeHome={this.welcomeHome}/>
        </React.Fragment>
    )
  }
}
export default LandingPage;