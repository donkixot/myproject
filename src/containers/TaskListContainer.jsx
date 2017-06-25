import { connect } from 'react-redux';
import TaskList from '../components/TaskList/TaskList.jsx';


function mapStateToProps(state, props) {
	const { users } = state.users;
	return {
		users: users
	};
}

export default connect(mapStateToProps)(TaskList);
