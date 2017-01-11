import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    user: state.user,
    recipe: state.recipe,
    search: state.search,
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  var actions = {
    ...actionCreators.user,
    ...actionCreators.recipe,
    ...actionCreators.search
  };
  return bindActionCreators(actions, dispatch);
}

const Root = connect(mapStateToProps, mapDispatchToProps)(App);

export default Root;
