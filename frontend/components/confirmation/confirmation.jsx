import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Confirmation extends React.Component{
  constructor(props){
    super(props);
  }

  goToHome(e){
    e.preventDefault();
    this.props.history.push('/');
  }

  render(){
    let f = "of";
    let th = "this";
    return(
      <div>
        <h2>Your booking is confirmed!</h2>
        <h2>Your booking number: {this.props.confId}</h2>
        <img src='http://worldbarcodes.com/wp-content/uploads/39123439-code39.gif' />
        <h4>Please take a screenshot {f} {th} page</h4>
        <h5 onClick={this.goToHome.bind(this)}>Go back to Home Page</h5>
      </div>
    );
  }
}

export default withRouter(Confirmation);
