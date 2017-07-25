import * as APIUtil from '../util/bus_api_util';

export const RECEIVE_BUSES = "RECEIVE_BUSES";

export const fetchBuses = buses => dispatch => (
  APIUtil.fetchBuses(buses)
    .then(buses => dispatch(receiveBuses(buses)))
);

export const receiveBuses = buses => ({
  type: RECEIVE_BUSES,
  buses
});
