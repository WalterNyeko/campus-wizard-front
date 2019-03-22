import React, { Component } from 'react';
import {
    Layout
  } from 'antd';

class Footer extends Component {
  render() {
    const {
        Footer
    } = Layout;
    return (
     <Footer style={{ textAlign: 'center' }}>
        My Campus ©2018 Created by @Walter
      </Footer>
    )
  }
}
export default Footer;