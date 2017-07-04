import AppConstants from '../constants/AppConstants';

export function signIn(email, pass) {
	if (email && pass) {
		return {
			type: AppConstants.SIGN_IN,
			email,
			pass
		}
	}else{
		return {
			type: AppConstants.SIGN_IN_FAILED
		}
	};
}

export function toggleTask(taskIndex, subtaskIndex, done, projects, creator, sorting) {
	return {
		type: AppConstants.TOGGLE_TASK,
		taskIndex,
		subtaskIndex,
		done,
		projects,
		creator,
		sorting
	}
}

export function	onCreatorChange(creator, projects) {
	return {
		type: AppConstants.SET_CREATOR,
		creator,
		projects,
	}
}

export function	onProjectChange(projects, creator) {
	return {
		type: AppConstants.SET_PROJECT,
		projects,
		creator
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

