import { connect } from 'react-redux';
import greeting from './greeting';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state,ownProps) => {

  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(greeting);
