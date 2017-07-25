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

export default connect(mapStateToProps, mapDispatchToProps)(signupForm);
