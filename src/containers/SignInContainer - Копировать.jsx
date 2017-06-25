import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../components/SignIn/SignIn.jsx';
import * as pageActions from '../actions/SingInAction.js';


function getUser(email, users) {
	return users
		.filter(u => {
			return (
				(email == 'all' || email == u.email)
			);
		});
}

function mapStateToProps(state, props) {
	const { email, users } = state.users;
	return {
		users: getUser(email, users)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);