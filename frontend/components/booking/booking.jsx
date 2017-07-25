import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Booking extends React.Component {
  constructor(props){
    super(props);
    let terminal = {A:0,B:1,C:2,D:3};
    let boarding_time_arr = this.props.bus.start_time.split(':');
    let boarding_time_hour = boarding_time_arr[0];
    let boarding_time_minute = parseInt(boarding_time_arr[1]) + terminal[this.props.terminal] * 5;
    let boarding_time = boarding_time_hour + ":" + this.parseTime(boarding_time_minute);
    this.state = {
      airport: this.props.bus.airport,
      terminal: this.props.terminal,
      bus_id: this.props.bus.id,
      num_of_guests: this.props.num_of_guests,
      destination: this.props.bus.destination,
      boarding_time: boarding_time
    };
  }

  parseTime(min){
    let str;
    if(min < 10){
      str = '0' + min.toString();
    } else {
      str = min.toString();
    }
    return str;
  }

  handleSubmit(e){
    let bookingInfo = this.state;
    e.preventDefault();
    this.props.createBooking(bookingInfo).then(booking => {this.props.history.push({pathname: '/confirmation', state : {confId: booking.booking.id}});});
  }

  render(){
    let fr = "for";
    let nm = "Number";
    let f = "of";
    return(
      <div>
        <h2>Hey, {this.props.currentUser.username}</h2>
        <h3>We have found a match {fr} you!</h3>
        <h3>Bus Information :</h3>
        <h4>Bus number: {this.state.bus_id} &emsp; Airport: {this.state.airport}</h4>
        <h4>Terminal: {this.state.terminal} &emsp; Destination: {this.state.destination}</h4>
        <h4>{nm} {f} Seats: {this.state.num_of_guests}</h4>
        <h4>Your bus will arrive at: {this.state.boarding_time}</h4>
        <div onClick={this.handleSubmit.bind(this)} className="box">Confirm Booking</div>
      </div>

    );
  }
}

export default withRouter(Booking);
