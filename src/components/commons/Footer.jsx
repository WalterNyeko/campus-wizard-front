import React from 'react';
import {
  Layout
} from 'antd';
const Footer = () => {
  
  const {
    Footer
  } = Layout;

  return (
    <React.Fragment>
      <Footer style={{ textAlign: 'center', backgroundColor: '#1DA1F2', marginBottom: '0' }}>
        Campus ©2018 Designed by @Walter
      </Footer>
    </React.Fragment>
  )
}
export default Footer;