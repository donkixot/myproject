import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../actions/pageActions.js';
import SignIn from '../components/SignIn/SignIn.jsx';


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

	return {
		currentUser: getUser(email, pass, users),
		isSignIn,
		preloader
	};
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);