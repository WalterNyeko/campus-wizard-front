import React, { Component } from 'react';
import '../../components/assets/styles/steps.css';
import '../../components/assets/styles/landingPage.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { steps } from '../../fixtures/Steps';
import LandingPageComponent from '../../components/home/LandingPage';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
      }

    /**
     * Moves the user to the next phase 
     * of the application cycle
     * 
     * @returns {void}
     */
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    /**
     * Moves the user to the previous phase 
     * of the application cycle
     * 
     * @returns {void}
     */
    previous() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

  render() {
    const { current } = this.state;
    return (
        <React.Fragment>
          <LandingPageComponent
            current={current}
            next={this.next}
            previous={this.previous}/>
        </React.Fragment>
    )
  }
}
export default LandingPage;