import { connect } from 'react-redux';
import searchForm from './searchForm';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state,ownProps) => {

  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(searchForm);
