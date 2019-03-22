import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';
import Footer from './Footer';
import Dashboard from './Dashboard';
import '../../components/assets/styles/home.css';

class HomePage extends Component {
    
  render() {
    return (
        <Layout>
            <Navbar />
            <Dashboard />
            <Footer />
        </Layout>
    )
  }
}
export default HomePage;