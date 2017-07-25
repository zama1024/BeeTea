import { RECEIVE_BOOKING } from "../actions/booking_actions";

const _defaultState = { booking: {}, errors: [] };

const bookingReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKING:
      return { booking: action.bookings, errors: [] };
    default:
      return state;
  }
};

export default bookingReducer;
