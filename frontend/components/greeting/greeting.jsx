import React from 'react';
import { Link } from 'react-router-dom';

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
          <div><Link to='/signupForm' >Sign Up</Link></div>
          <div><Link to='/loginForm' >Log In</Link></div>
        </div>
      </div>
    );
  }

  userPage(){
    return(
      <div>
        <h2>Welcome, {this.props.currentUser.username}!</h2>
        <h2>Please select a service</h2>
        <div className="sessionBox">
          <div><Link to='/taxi'>Taxi</Link></div>
          <div><Link to='/bus'>Bus</Link></div>
        </div>
      </div>
    );
  }

  render(){
    let currentUser = this.props.currentUser;
    return currentUser ? this.userPage() : this.homePage();
  }
}

export default Greeting;
