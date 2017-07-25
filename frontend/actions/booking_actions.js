import * as APIUtil from "../util/booking_api_util";

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";

export function receiveBooking(booking) {
  return {
    type: RECEIVE_BOOKING,
    booking,
  };
}


export function fetchBooking() {
  return (dispatch) => {
    return APIUtil.fetchBookings()
      .then((booking) => dispatch(receiveBooking(booking)));
  };

}

export function createBooking(bookingInfo) {
  return (dispatch) => {
    return APIUtil.createBooking(bookingInfo)
      .then((booking) => {
        return dispatch(receiveBooking(booking));
      });
  };
}
