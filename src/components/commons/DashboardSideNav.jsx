import React from 'react';
import { allCourses } from '../../fixtures/Courses';
import Drawer from '../../components/commons/MultiLevelDrawer';
import TheFooter from '../commons/Footer';
import {
    Layout, Menu, Table, Tabs, Row, Col, Icon,
} from 'antd';
import { columns } from '../../fixtures/Columns';
import { data } from '../../fixtures/Data';
import '../assets/styles/tabs.css';

export default function DashboardSideNav({ width, collapsed, onChange, onCollapse}) {
    const {
        Content, Sider,
      } = Layout;
    const SubMenu = Menu.SubMenu;
    const TabPane = Tabs.TabPane;
  return (
    <React.Fragment>
    <Layout style={{ minHeight: '85vh', margin: '0' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          width={width}
          style={{
            borderRadius: '5px',
            backgroundColor: 'transparent'
          }}
        >
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <div className="card-container">
          <Tabs type="card" style={{ 
            minHeight: '100vh',
            padding: '0 24px'
            }}>
            {allCourses.map((element, index) =>(
                <TabPane tab={element.faculty} key={index} style={{
                  padding: '10px',
                  minHeight: '650px',
                }}>
                <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                </Col>
                <Col className="gutter-row" span={6}>
                </Col>
                <Col className="gutter-row" span={6}>
                </Col>
                <Col className="gutter-row" span={6}>
                <Drawer/>
                </Col>
                </Row>
                <br></br>
                <Table columns={columns} dataSource={data} onChange={onChange}  size="small"/>,            
                </TabPane>
              ))}
          </Tabs>
          </div>
        </Layout>
      </Layout>
      <TheFooter />
      </React.Fragment>
  )
}
