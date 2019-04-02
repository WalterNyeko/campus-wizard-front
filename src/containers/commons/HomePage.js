import React, { Component } from 'react';
import {
  Layout, Menu
} from 'antd';
import Dashboard from './Dashboard';
class Navbar extends Component {
  constructor(props){
    super(props);
    this.renderHomePage=this.renderHomePage.bind(this);
    this.renderCoursesPage=this.renderCoursesPage.bind(this);
    this.renderApplicantsPage=this.renderApplicantsPage.bind(this);
    this.renderAdmissionsPage=this.renderAdmissionsPage.bind(this);
    this.renderRejectedPage=this.renderRejectedPage.bind(this);
    this.renderAcceptedPage=this.renderAcceptedPage.bind(this);

    this.state = {
      renderHome: true,
      renderCourses: false,
      renderApplicants: false,
      renderAdmission: false,
      renderRejected: false,
      renderAccepted: false,
    }

  }

  renderHomePage = () => {
    this.setState({
      renderHome: true,
      renderCourses: false,
      renderApplicants: false,
      renderAdmission: false,
      renderRejected: false,
      renderAccepted: false,
    })
  }

  renderCoursesPage = () => {
    this.setState({
      renderHome: false,
      renderCourses: true,
      renderApplicants: false,
      renderAdmission: false,
      renderRejected: false,
      renderAccepted: false,
    })   
  }

  renderApplicantsPage = () => {
    this.setState({
      renderHome: false,
      renderCourses: false,
      renderApplicants: true,
      renderAdmission: false,
      renderRejected: false,
      renderAccepted: false,
    })    
  }

  renderAdmissionsPage = () => {
    this.setState({
      renderHome: false,
      renderCourses: false,
      renderApplicants: false,
      renderAdmission: true,
      renderRejected: false,
      renderAccepted: false,
    })   
  }

  renderRejectedPage = () => {
    this.setState({
      renderHome: false,
      renderCourses: false,
      renderApplicants: false,
      renderAdmission: false,
      renderRejected: true,
      renderAccepted: false,
    })    
  }

  renderAcceptedPage = () => {
    this.setState({
      renderHome: false,
      renderCourses: false,
      renderApplicants: false,
      renderAdmission: false,
      renderRejected: false,
      renderAccepted: true,
    })    
  }
 
render() {
  const {
      Header
  } = Layout;
    return (
     <React.Fragment>
        <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', marginLeft: '0' }}
        >
          <Menu.Item key="1" onClick={()=>this.renderHomePage()}>Home</Menu.Item>
          <Menu.Item key="2" onClick={()=>this.renderCoursesPage()}>Courses</Menu.Item>
          <Menu.Item key="3" onClick={()=>this.renderApplicantsPage()}>Applicants</Menu.Item>
          <Menu.Item key="4" onClick={()=>this.renderAdmissionsPage()}>Admission</Menu.Item>
          <Menu.Item key="5" onClick={()=>this.renderRejectedPage()}>Rejected</Menu.Item>
          <Menu.Item key="6" onClick={()=>this.renderAcceptedPage()}>Accepted</Menu.Item>
          <Menu.Item key="7" onClick={()=>this.renderAcceptedPage()}>Projects/Research</Menu.Item>
        </Menu>
    </Header>
      <Dashboard 
        state={this.state}/>
     </React.Fragment>
    );
  }
}
export default Navbar;