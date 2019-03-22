import React, { Component } from 'react';
import RegisterContainer from '../../components/authentication/Register';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: ''
        }

        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    } 
  render() {
    return (
      <React.Fragment>
          <RegisterContainer 
            handleSubmit={this.handleSubmit}
            onChange={this.handleInputChange}
          />
      </React.Fragment>
    )
  }
}
export default Register;