import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusesReducer from './bus_reducer';
import BookingsReducer from './booking_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  bus: BusesReducer,
  booking: BookingsReducer
});

export default rootReducer;
