import AppConstants from '../constants/AppConstants';

const initialState = {
	tasks: JSON.parse(localStorage.getItem('databaseTTS'))[0].tasks,
}

export default function tasks(state = {
	tasks: initialState.tasks
}, action) {
	switch (action.type) {
		case AppConstants.COMPLETE_TASK:
			return {
				...state,
			}
		default:
			return state;
	}
}