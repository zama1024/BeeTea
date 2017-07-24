import React from 'react';
import { hashHistory, replace, Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  homePage(){
    let frm = "from";
    return(
      <div>
        <h2>Need a ride {frm} the airport?</h2>
        <h2> We got you covered!</h2>
        <div className = "sessionBox">
          <div>Sign Up</div>
          <div>Log In</div>
        </div>
      </div>
    );
  }

  userPage(){
    return(
      <div>
        <h3>Welcome, {this.props.currentUser.username}!</h3>
      </div>
    );
  }

  render(){
    let currentUser = this.props.currentUser;
    return currentUser ? this.userPage() : this.homePage();
  }
}

export default Greeting;
