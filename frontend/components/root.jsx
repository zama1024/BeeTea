import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, IndexRoute, hashHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupContainer from './user/signup_container';
import LoginContainer from './user/login_container';
import Taxi from './taxi/taxi.jsx';
import BusContainer from './bus/bus_container';
import BookingContainer from './booking/booking_container';
import ConfirmationContainer from './confirmation/confirmation_container';



const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div>
        <Route path="/" component={ App } />
        <Route exact path="/" component={GreetingContainer} />
        <Route exact path="/signupForm" component={SignupContainer} />
        <Route exact path="/loginForm" component={LoginContainer} />
        <Route exact path="/taxi" component={Taxi} />
        <Route exact path="/bus" component={BusContainer} />
        <Route exact path="/booking" component={BookingContainer} />
        <Route exact path="/confirmation" component={ConfirmationContainer} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
