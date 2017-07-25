import { RECEIVE_BUSES } from '../actions/bus_actions';
import merge from 'lodash/merge';

const BusesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_BUSES:
      return action.buses;
    default:
      return state;
  }
};

export default BusesReducer;
