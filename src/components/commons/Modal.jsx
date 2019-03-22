import { Modal, Button } from 'antd';
import React, { Component } from 'react'

export class CampusModal extends Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  
  render() {
    const { 
      modalBody } = this.props;
      console.log(this.props)
    return (
      <React.Fragment>
      <div>
    <Button type="primary" onClick={this.showModal}>
      Open Modal
    </Button>
    <Modal
      title="Basic Modal"
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
      {modalBody}
    </Modal>
  </div>
</React.Fragment>
    )
  }
}
