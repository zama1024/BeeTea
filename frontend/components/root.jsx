import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, IndexRoute, hashHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';



const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <div>
        <Route exact path="/" component={ App } />
        <Route exact path="/" component={GreetingContainer} />
      </div>
    </Router>
  </Provider>
);

export default Root;
