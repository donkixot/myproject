import { connect } from 'react-redux';
import Account from '../components/Account/Account.jsx';


function mapStateToProps(state, props) {
	const { users } = state.users;
	return {
		users: users
	};
}

export default connect(mapStateToProps)(Account);
