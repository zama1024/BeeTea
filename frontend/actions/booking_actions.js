import * as APIUtil from "../util/booking_api_util";

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";

export function receiveBooking(booking) {
  return {
    type: RECEIVE_BOOKING,
    booking,
  };
}


export function fetchBookings() {
  return (dispatch) => {
    return APIUtil.fetchBookings()
      .then((bookings) => dispatch(receiveBookings(bookings)));
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
