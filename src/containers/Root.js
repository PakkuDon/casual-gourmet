import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    user: state.user,
    recipes: state.recipes,
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  var actions = {
    ...actionCreators.user,
    ...actionCreators.recipe
  };
  return bindActionCreators(actions, dispatch);
}

const Root = connect(mapStateToProps, mapDispatchToProps)(App);

export default Root;
