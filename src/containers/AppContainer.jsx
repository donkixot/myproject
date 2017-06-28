import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import * as pageActions from '../actions/pageActions.js';
import App from '../components/App/App.jsx';


//simple helper function, which return all filters from state by given key.
function getFilters(key, movies) {
	return movies.reduce((acc, movie) => {
		if (!acc.includes(movie[key])) {
			return [...acc, movie[key]];
		}
		return acc;
	}, []);
}

//getting visible tasks from state.
function getVisibleTasks(creator, project) {
	return tasks
		.filter(t => {
			return (
				(project == 'all' || project == t.project) &&
				(creator == 'all' || creator[1] == t.creator || creator[2] == t.creator)
			);
		})
		.sort((a, b) => {
			if (sorting == 'alphabetically') {
				return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
			}
		});
}
function getUser(email, pass, users){
	let currentUser = users.filter(m => {
		return (email == 'all' || email == m.email)
	});
	// if(currentUser.length == 1){
	// 	if (currentUser[0].pass == pass) {
			return currentUser[0];
	// 	}
	// }else{
	// 	return undefined;
	// };
}

function mapStateToProps(state, props) {
	const { preloader, isSignIn, email, pass, users } = state.users;
	const { creator, project, sorting, tasks } = state.tasks;

	// _updateStorage(users, tasks);

	return {
		currentUser: getUser(email, pass, users),
		tasks: getVisibleTasks(creator, project),
		isSignIn,
		preloader,
		selectedCreator: creator,
		selectedProject: project,
		creators: getFilters('creator', state.tasks),
		projects: getFilters('project', state.tasks),
		sorting,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

function _updateStorage(users, tasks){
	let databaseTTS = [
		{
			users
		},
		{
			tasks
		}
	]
	localStorage.setItem('databaseTTS', JSON.stringify(databaseTTS));
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));