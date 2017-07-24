import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="text" placeholder="Password"/>
          <input type="submit" placeholder="Log In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
