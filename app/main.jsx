import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import RedditList from './components/lists/OperatorList';
import UserProfile from './components/lists/GithubApi';

import { browserHistory, Router, Route, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={RedditList} />
    <Route path='profile' component={UserProfile} />
  </Router>
  ,
  document.getElementById('app')
);
