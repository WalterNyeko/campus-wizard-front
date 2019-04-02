import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import DashboardSideNav from './DashboardSideNav';

class Dashboard extends Component {
  render() {
    const {
        Content,
    } = Layout;

    const { 
        renderHome, 
        renderCourses, 
        renderAccepted,
        renderApplicants,
        renderSettings, 
        renderAdmission,
        } = this.props.state;
    return (
        <Layout>
        <Content style={{ padding: '0 0' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item style={{ marginLeft: '50px', fontSize: '18px'}}>Makerere University, Kampala</Breadcrumb.Item>
          </Breadcrumb>
          {renderHome ? (
            <DashboardSideNav />
          ): renderCourses? (
            <DashboardSideNav />
          ): renderAccepted? (
            <DashboardSideNav />
          ): renderApplicants ? (
            <DashboardSideNav />
          ): renderSettings ? (
            <DashboardSideNav />
          ): renderAdmission ? (
            <DashboardSideNav />
          ): (
            <DashboardSideNav />
          )
          }
      </Content>
      </Layout>
    )
  }
}
export default Dashboard;