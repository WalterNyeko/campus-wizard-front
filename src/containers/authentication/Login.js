import React, { Component } from 'react';
import LoginPage from '../../components/authentication/Login';

class Login extends Component {
    // constructor(props){
    //     super(props);

    // }

    handleSubmit = () => {

    }

    handleInputChange = () => {

    } 
  render() {
    return (
      <React.Fragment>
          <LoginPage 
            onChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
      </React.Fragment>
    )
  }
}
export default Login;