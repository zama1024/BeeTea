import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: [],
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state).fail( ({errors}) => {this.setState({ errors: errors.base[0] });})
      .then(() => {this.props.history.push("/");});
  }

  render(){
    return(
      <div>
        <h2>Please Log In first to request the service</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.update("username")} placeholder="Username"/>
          <input type="password" onChange={this.update("password")}placeholder="Password"/>
          <input type="submit" value="Log In"/>
        </form>
        {this.state.errors}
        <h2>Don't have an acount?</h2>
        <div className='box'><Link to='/signupForm'>Sign Up</Link></div>
      </div>
    );
  }
}

export default LoginForm;
