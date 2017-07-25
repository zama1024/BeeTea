import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      airport: '',
      terminal: '',
      number_of_guests: 0,
      boarding_time: '',
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
    if(this.state.errors.length === 0) {
      this.props.signup(this.state).fail( ({errors}) => {this.setState({ errors });})
        .then(() => {return this.props.history.push("/");});
    }
  }


  render(){
    let errors = this.state.errors.map((el,idx) => <li key={idx}>{el}</li>);
    return(
      <div>
        <h2>Time to book your seats!</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="dropdown">
            <span>Airport &emsp;</span>
            <select onChange={this.update("airport")} name="airport">
              <option selected disabled>Choose Airport</option>
              <option value="JFK">JFK</option>
              <option value="LGA">LGA</option>
              <option value="EWR">EWR</option>
            </select>
          </div>
          <div className="dropdown">
            <span>Terminal &emsp;</span>
            <select onChange={this.update("terminal")} name="terminal">
              <option selected disabled>Choose Terminal</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <div className="dropdown">
            <span>Boarding Time &emsp;</span>
            <select onChange={this.update("boarding_time")} name="boarding_time">
              <option selected disabled>Choose Time</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="01:00">01:00</option>
              <option value="01:30">01:30</option>
              <option value="02:00">02:00</option>
              <option value="02:30">02:30</option>
              <option value="03:00">03:00</option>
              <option value="03:30">03:30</option>
              <option value="04:00">04:00</option>
              <option value="04:30">04:30</option>
              <option value="05:00">05:00</option>
              <option value="05:30">05:30</option>
              <option value="06:00">06:00</option>
              <option value="06:30">06:30</option>
              <option value="07:00">07:00</option>
              <option value="07:30">07:30</option>
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
            </select>
            <select>
              <option value="a.m.">a.m.</option>
              <option value="p.m.">p.m.</option>
            </select>
          </div>
          <input type="number" onChange={this.update("number_of_guests")}placeholder="Number of Guests"/>
          <input type="submit" value="Search"/>
        </form>
        {errors}
      </div>
    );
  }
}

export default withRouter(SearchForm);
