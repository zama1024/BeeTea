import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';


const _defaultSession = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultSession, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      newState.currentUser = null;
      return newState;
    default:
      return state;
  }
};
export default SessionReducer;
