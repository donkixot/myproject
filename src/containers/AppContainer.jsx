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
function getVisibleTasks(tasks, creator, projects, sorting) {
	return tasks
		.filter(t => {
			return (
				(creator == 'All' || creator == t.creator) &&
				(projects == 'all' || projects[1] == t.project || projects[2] == t.project || projects[3] == t.project || projects[4] == t.project)
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
	const { preloader, isSignIn, email, pass, showEmailError, showPassError, users } = state.users;
	const { creator, projects, sorting, tasks } = state.tasks;
	return {
		currentUser: getUser(email, pass, users),
		tasks: getVisibleTasks(tasks, creator, projects, sorting),
		// tasks,
		isSignIn,
		preloader,
		showEmailError,
		showPassError,
		creator,
		projects,
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