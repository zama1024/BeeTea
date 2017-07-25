import { connect } from 'react-redux';
import confirmation from './confirmation';


const mapStateToProps = (state,ownProps) => {
  return {
    confId: ownProps.location.state.confId,
  };
};


export default connect(mapStateToProps, null)(confirmation);
