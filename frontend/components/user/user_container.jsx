import { connect } from 'react-redux';
import signupForm from './signupForm';
import loginForm from './loginForm';
import { login, signup } from '../../actions/session_actions';


const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
});

export const signupContainer = connect(mapStateToProps, mapDispatchToProps)(signupForm);
export const loginContainer = connect(mapStateToProps, mapDispatchToProps)(loginForm);
