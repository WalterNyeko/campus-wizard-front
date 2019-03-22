import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Routes } from './containers/helpers/Routes';
import LoginPage from './containers/authentication/Login';
import Register from './containers/authentication/Register';
import LandingPage from './containers/home/LandingPage';
import Navbar from './containers/commons/Navbar';
import HomePage from './containers/commons/HomePage';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <BrowserRouter>
            <Switch>
              <Route exact path={Routes.LOGIN} component={LoginPage} />
              <Route exact path={Routes.REGISTER} component={Register} />
              <Route exact path={Routes.LANDING_PAGE} component={LandingPage} />
              <Route exact path={Routes.NAV_BAR} component={Navbar} />
              <Route exact path={Routes.HOMEPAGE} component={Navbar} />
            </Switch>
          </BrowserRouter>
        </React.Fragment>
        </Provider>
    )
  }
}
export default App;