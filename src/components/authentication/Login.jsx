import React from 'react';
import {
  Form, Card, Button, Col, Row, Input, Select, DatePicker
} from 'antd';
import InputPassword from 'antd-input-password';
import Facebook from '../../components/assets/images/Facebook-Logo.png'
const { Option } = Select;

 const Login = ({ handleSubmit, onChange, onClose }) =>{
  return (
    <React.Fragment>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              {/* <Card title="Card title" bordered={false}>Card content</Card> */}
            </Col>
            <Col span={8}>
              <Card title="Sign In" bordered={false} style = {{ 
                marginTop: '150px',
                width: '100%',
                textAlign: 'center',
                padding: '10px',
                boxShadow: '5px 5px 5px grey' }}>
                
                <Form layout="vertical" hideRequiredMark>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item label="Email">
                        <Input placeholder="Please enter your email" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item label="Password">
                        <InputPassword placeholder="Please enter password"/>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                  <Col span={12}>
                    <Button onClick={onClose} type="primary" style={{ width: '180px'}}>
                      Login
                    </Button>
                    </Col>
                    <Col span={12}>
                    Need an account? <a href="/">Sign Up</a> 
                    </Col>
                  </Row>
                  <br/>
                  Forgot Password? <a href="/">Click Here!</a>
                  <br/>
                  OR
                  <br/><br/>
                  <Row gutter={16}>
                    <Col span={12}>
                      <div id="spinner"
                        style={{
                            background: '#4267b2',
                            borderRadius: '5px',
                            color: 'white',
                            height: '40px',
                            textAlign: 'center',
                            width: '180px'}}>
                        Continue with facebook
                        <div
                        class="fb-login-button"
                        data-max-rows="1"
                        data-size="large"
                        data-button-type="continue_with"
                        data-use-continue-as="true"
                        ></div>
                    </div>
                </Col>
                    <Col span={12}>
                <div id="spinner"
                    style={{
                        background: 'red',
                        borderRadius: '5px',
                        color: 'white',
                        height: '40px',
                        textAlign: 'center',
                        width: '180px'}}>
                    Continue with Google
                    <div
                    class="fb-login-button"
                    data-max-rows="1"
                    data-size="large"
                    data-button-type="continue_with"
                    data-use-continue-as="true"
                    ></div>
                </div>
                </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
            <Col span={8}>
              {/* <Card title="Card title" bordered={false}>Card content</Card> */}
            </Col>
          </Row>
         
        </div>
    </React.Fragment>
  )
}
export default Login;