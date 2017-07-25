import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, IndexRoute, hashHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { loginContainer, signupContainer } from './user/user_container';
import taxi from './taxi/taxi.jsx';



const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div>
        <Route path="/" component={ App } />
        <Route exact path="/" component={GreetingContainer} />
        <Route exact path="/signupForm" component={signupContainer} />
        <Route exact path="/loginForm" component={loginContainer} />
        <Route exact path="/taxi" component={taxi} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
