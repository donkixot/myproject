import AppConstants from '../constants/AppConstants';

const initialState = {
	tasks: JSON.parse(localStorage.getItem('databaseTTS'))[0].tasks,
}

export default function tasks(state = {
	tasks: initialState.tasks,
	creator: 'All',
	projects: 'all',
	sorting: 'Random'
}, action) {
	switch (action.type) {
		case AppConstants.TOGGLE_TASK:
			return {
				tasks: [
					...state.tasks.slice(0,action.taskIndex), //before the one task we are updating
					{
						...state.tasks[action.taskIndex],
						subtasks: [
							...state.tasks[action.taskIndex].subtasks.slice(0, action.subtaskIndex), //before the one subtask we are updating
							{
								...state.tasks[action.taskIndex].subtasks[action.subtaskIndex],  //current subtask
								done: !action.done
							},
							...state.tasks[action.taskIndex].subtasks.slice(action.subtaskIndex+1) //after the one subtask we are updating
						]
					},
					 ...state.tasks.slice(action.taskIndex+1) //after the one task we are updating
				],
				creator: action.creator,
				projects: action.projects,
				sorting: action.sorting
			};
		case AppConstants.SET_CREATOR:
			return  {
				...state,
				creator: action.creator,
				projects: action.projects
			};
		case AppConstants.SET_PROJECT:
			return {
				...state,
				creator: action.creator,
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
			return state;
		default:
			return state;
	}
}




