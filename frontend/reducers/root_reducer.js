import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusesReducer from './bus_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  bus: BusesReducer
});

export default rootReducer;
