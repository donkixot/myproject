import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import * as pageActions from '../actions/pageActions.js';
import App from '../components/App/App.jsx';


//simple helper function, which return all filters from state by given key.
function getFilters(key, tasks) {
	return tasks.reduce((acc, task) => {
		if (!acc.includes(task[key])) {
			return [...acc, task[key]];
		}
		return acc;
	}, []);
}

//getting visible tasks from state.
function getVisibleTasks(tasks, creator, project, sorting) {
	return tasks
		.filter(t => {
			return (
				(creator == 'all' || creator == t.creator) &&
				(project == 'all' || project[1] == t.project || project[2] == t.project || project[3] == t.project || project[4] == t.project)
			);
		})
		.sort((a, b) => {
			if(sorting == 'Random'){
				return;
			}else if (sorting == 'Name, A to Z') {
				return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
			}else if (sorting == 'Name, Z to A') {
				return a.title < b.title ? 1 : a.title > b.title ? -1 : 0;
			}
		});
}

//getting authorized user
function getUser(email, pass, users){
	let currentUser = users.filter(m => {
		return (email == 'all' || email == m.email)
	});
	return currentUser[0];
}

function mapStateToProps(state, props) {
	const { preloader, isSignIn, email, pass, users } = state.users;
	const { creator, project, sorting, tasks } = state.tasks;
	return {
		currentUser: getUser(email, pass, users),
		tasks: getVisibleTasks(tasks, creator, project, sorting),
		// tasks,
		isSignIn,
		preloader,
		selectedCreator: creator,
		project,
		creatorsForFilters: getFilters('creator', tasks),
		projectsForFilters: getFilters('project', tasks),
		sorting,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));