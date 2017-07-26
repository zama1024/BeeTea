import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      card_number: '',
      card_expiry_date: '',
      errors: []
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({errors: []});
    let errorsArr = this.checkErrors();
    this.setState({errors: errorsArr}, () => {
      if(this.state.errors.length === 0) {
        this.props.signup(this.state).fail( ({errors}) => {this.setState({ errors });})
          .then(() => {this.props.history.push("/");});
      }
    });

  }

  checkErrors(){
    let errorsArr = [];
    if(this.state.card_number.length !== 16 || typeof parseInt(this.card_number) !== 'number'){
      errorsArr.push("Card number must be a valid 16 digit number, ex. 1111111111111111");
    }
    if(!this.checkExpiryDate(this.state.card_expiry_date)){
      errorsArr.push("Please put a valid expiry date, ex. 12/19");
    }
    return errorsArr;
  }

  checkExpiryDate(str){
    let arr = str.split('/');
    if(arr.length !== 2){
      return false;
    }
    for (var i = 0; i < arr.length; i++) {
      if(typeof parseInt(arr[i]) !== 'number'){
        return false;
      }
    }
    return true;
  }

  render(){
    let bottom;
    if(this.state.errors.length > 0){
      bottom = <div></div>;
    }else{
      bottom = <div><h2>Already have an account?</h2>
      <div className='box'><Link to='/loginForm'>Log In</Link></div></div>;
    }
    let errors = this.state.errors.map((el,idx) => <li key={idx}>{el}</li>);
    return(
      <div>
        <h2>Please sign up first to request the service!</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.update("username")} placeholder="Username"/>
          <input type="password" onChange={this.update("password")}placeholder="Password"/>
          <input type="text" onChange={this.update("card_number")}placeholder="Credit Card Number"/>
          <input type="text" onChange={this.update("card_expiry_date")}placeholder="Card Expiry Date"/>
          <input type="submit" value="Sign Up"/>
        </form>
        {errors}
        {bottom}
      </div>
    );
  }
}

export default withRouter(SignupForm);
