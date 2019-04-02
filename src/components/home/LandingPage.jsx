import React from 'react';
import { Steps, Button } from 'antd';
import { steps } from '../../fixtures/Steps';
const Step = Steps.Step;

function LandingPage({current, next, previous, welcomeHome}) {
  return (
    <React.Fragment>
        <div className="row">
            <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="wrapper mt-4 ml-4 mr-4">
                  <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                  </Steps>
                  <div className="steps-content">{steps[current].content}</div>
                  <div className="steps-action">
                    {
                      current < steps.length - 1
                      && <Button type="primary" onClick={() => next()}>Next</Button>
                    }
                    {
                      current === steps.length - 1
                      && <Button type="primary" onClick={() => welcomeHome('Thank you for applying')}>Done</Button>
                    }
                    {
                      current > 0
                      && (
                      <Button style={{ marginLeft: 8 }} onClick={() => previous()}>
                        Previous
                      </Button>
                      )
                      }
                    </div>
                  </div></div>
                  <div className="col-md-1"></div>
                  </div>
                <div className="ocean">
              <div className="wave"></div>
            <div className="wave"></div>
          </div>
    </React.Fragment>
  )
}
export default LandingPage;