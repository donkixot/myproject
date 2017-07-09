import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import * as pageActions from '../../actions/pageActions.js';
import App from './App.jsx';


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
			}else if (sorting == 'Progress, low to hight') {
				return parseInt(a.progress) > parseInt(b.progress) ? 1 : parseInt(a.progress) < parseInt(b.progress) ? -1 : 0;
			}else if (sorting == 'Progress, hight to low') {
				return parseInt(a.progress) < parseInt(b.progress) ? 1 : parseInt(a.progress) > parseInt(b.progress) ? -1 : 0;
			}
		});
}


function mapStateToProps(state, props) {
	const { preloader, isSignIn, showEmailError, showPassError, currentUser, users } = state.user;
	const { creator, projects, sorting, tasks } = state.tasks;
	return {
		contents: state.contents,
		currentUser,
		showEmailError,
		showPassError,
		isSignIn,
		preloader,
		tasks: getVisibleTasks(tasks, creator, projects, sorting),
		creatorsForFilters: getFilters('creator', tasks),
		projectsForFilters: getFilters('project', tasks),
		creator,
		projects,
		sorting
	};
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));