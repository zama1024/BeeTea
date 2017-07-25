import { connect } from 'react-redux';
import booking from './booking';
import { createBooking } from '../../actions/booking_actions';


const mapStateToProps = (state,ownProps) => {

  return {
    terminal: ownProps.location.state.terminal,
    num_of_guests: ownProps.location.state.num_of_guests,
    currentUser: state.session.currentUser,
    bus: state.bus
  };
};

const mapDispatchToProps = (dispatch) => ({
  createBooking: (bookingInfo) => dispatch(createBooking(bookingInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(booking);
