import { connect } from 'react-redux';
import booking from './booking';
import { makeBooking } from '../../actions/booking_actions';


const mapStateToProps = (state,ownProps) => {
  debugger
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  makeBooking: (bookingInfo) => dispatch(makeBooking(bookingInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(booking);
