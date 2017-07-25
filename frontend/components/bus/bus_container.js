import { connect } from 'react-redux';
import searchForm from './searchForm';
import { fetchBuses } from '../../actions/bus_actions';


const mapStateToProps = (state,ownProps) => {

  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBuses: (buses) => dispatch(fetchBuses(buses))
});

export default connect(mapStateToProps, mapDispatchToProps)(searchForm);
