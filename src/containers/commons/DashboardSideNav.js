import React, { Component } from 'react';
import DashboardSideNavComponent from '../../components/commons/DashboardSideNav';
  
 
class DashboardSideNav extends Component {
    constructor(props){
        super(props);
        this.state = {
          collapsed: false,
        };
        this.onChange=this.onChange.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
    }
    
    onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
      }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
      }
    
  render() {
    const { collapsed } = this.state;
    return (
        <React.Fragment>
          <DashboardSideNavComponent 
            width="300"
            collapsed={collapsed}
            onCollapse={this.onCollapse}
            onChange={this.onChange}/>
        </React.Fragment>
    )
  }
}
export default DashboardSideNav;