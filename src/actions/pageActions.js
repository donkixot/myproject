import AppConstants from '../constants/AppConstants';
import api from '../api/api';


export function signIn(email, pass) {
	return function(dispatch){
		api.getCurrentUserFromApi(email, pass)
		.then(data => {
			dispatch({
				type: AppConstants.SIGN_IN_SUCCESS,
				currentUser: data
			});
		})
		.catch(err => {
			let checkErrorType = message => message === 'SIGN_IN_EMAIL_FAILED' ? true : false
			dispatch({
				type: AppConstants.SIGN_IN_FAILED,
				showEmailError: checkErrorType(err.message),
				showPassError: true
			});
		});
	}
}

export function signOut() {
	return {
		type: AppConstants.SIGN_OUT
	}
}

export function	getTask() {
	return {
		type: AppConstants.GET_TASKS,
		tasks: api.getTaskFromApi(),
	}
}

export function toggleTask(taskId, subtaskIndex, done) {
	api.toggleTaskInApi(taskId, subtaskIndex, done);
	return {
		type: AppConstants.TOGGLE_TASK,
		tasks: api.getTaskFromApi()
	}
}

export function	addTask(task) {
	api.addTaskToApi(task);
	return {
		type: AppConstants.ADD_TASK,
		tasks: api.getTaskFromApi(),
	}
}

export function	onCreatorChange(creator) {
	return {
		type: AppConstants.SET_CREATOR,
		creator
	}
}

export function	onProjectChange(projects) {
	return {
		type: AppConstants.SET_PROJECT,
		projects
	}
}

export function	onSortChange(sorting) {
	return {
		type: AppConstants.SET_SORTING,
		sorting
	}
}

export function	onFiltersReset(projects, creator, sorting) {
	return {
		type: AppConstants.FILTERS_RESET,
		projects,
		creator,
		sorting
	}
}

