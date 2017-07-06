import AppConstants from '../constants/AppConstants';

export default function tasks(state = {
	tasks: [],
	creator: 'All',
	projects: 'all',
	sorting: 'Random'
}, action) {
	switch (action.type) {
		case AppConstants.GET_TASKS:
			return{
				...state,
				tasks: action.tasks
			}
		case AppConstants.TOGGLE_TASK:
			return {
				...state,
				tasks: action.tasks
			};
		case AppConstants.SET_CREATOR:
			return  {
				...state,
				creator: action.creator,
			};
		case AppConstants.SET_PROJECT:
			return {
				...state,
				projects: action.projects
			};
		case AppConstants.SET_SORTING:
			return {
				...state,
				sorting: action.sorting
			};
		case AppConstants.FILTERS_RESET:
			return {
				...state,
				creator: action.creator,
				projects: action.projects,
				sorting: action.sorting
			};
		case AppConstants.ADD_TASK:
			return {
				...state,
				tasks: action.tasks
			};
		default:
			return state;
	}
}




