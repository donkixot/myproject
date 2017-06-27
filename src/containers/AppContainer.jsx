import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import * as pageActions from '../actions/pageActions.js';
import App from '../components/App/App.jsx';



function getUser(email, pass, users){
	let currentUser = users.filter(m => {
		return (email == 'all' || email == m.email)
	});
	if(currentUser.length == 1){
		if (currentUser[0].pass == pass) {
			return currentUser[0];
		}
	}else{
		return undefined;
	};
}

function mapStateToProps(state, props) {
	const { preloader, isSignIn, email, pass, users } = state.users;
	const { tasks } = state.tasks;

	return {
		currentUser: getUser(email, pass, users),
		tasks,
		isSignIn,
		preloader
	};
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));