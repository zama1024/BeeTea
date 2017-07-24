import React from 'react';
import { Link } from 'react-router-dom';

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
    this.setState({errors: []});
    e.preventDefault();
    this.checkErrors();
  }

  checkErrors(){
    let errorsArr = [];
    if(this.state.card_number.length !== 16 || typeof parseInt(this.card_number) !== 'number'){
      debugger
      errorsArr.push(["Card number must be a valid 16 digit number, ex. 1111111111111111"]);
    }
    if(!this.checkExpiryDate(this.state.card_expiry_date)){
      errorsArr.push(["Please put a valid expiry date, ex. 12/19"]);
    }
    this.setState({errors: errorsArr});
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
    let errors = this.state.errors.map(el => <li>{el}</li>);
    return(
      <div>
        <h2>Please sign up first to request the service!</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.update("username")} placeholder="Username"/>
          <input type="password" onChange={this.update("password")}placeholder="Password"/>
          <input type="text" onChange={this.update("card_number")}placeholder="Credit Card Number"/>
          <input type="text" onChange={this.update("card_expiry_date")}placeholder="Card Expiry Date"/>
          <input type="submit" placeholder="Sign Up"/>
        </form>
        {errors}
      </div>
    );
  }
}

export default SignupForm;
