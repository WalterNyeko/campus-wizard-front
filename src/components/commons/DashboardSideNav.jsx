import React from 'react';
import { allCourses } from '../../fixtures/Courses';
import Drawer from '../../components/commons/MultiLevelDrawer';
import TheFooter from '../commons/Footer';
import {
    Layout, Menu, Table, Tabs, Row, Col, Icon,
} from 'antd';
import { columns } from '../../fixtures/Columns';
import { data } from '../../fixtures/Data';

export default function DashboardSideNav({ width, collapsed, onChange, onCollapse}) {
    const {
        Content, Sider,
      } = Layout;
    const SubMenu = Menu.SubMenu;
    const TabPane = Tabs.TabPane;
  return (
    <Layout style={{ minHeight: '85vh', margin: '1px 2px 2px 1px' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          width={width}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
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
          <Content style={{ padding: '0 24px', backgroundColor: '#fff', minHeight: 585, overflow: 'scroll' }}>
          <Tabs type="card">
            {allCourses.map((element, index) =>(
                <TabPane tab={element.faculty} key={index}>
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
      </Content>
        <TheFooter />
        </Layout>
      </Layout>
  )
}
