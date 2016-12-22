import React from 'react';
import RedditList from './lists/OperatorList';
import UserProfile from './lists/GithubApi';


require('./App.css');

export default class App extends React.Component {
 constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <RedditList />
      <UserProfile />
      </div>
    );
  }
}
