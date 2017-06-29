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

export function toggleTask(taskIndex, subtaskIndex, done, project, creator) {
	return {
		type: AppConstants.TOGGLE_TASK,
		taskIndex,
		subtaskIndex,
		done,
		project,
		creator
	}
}

export function	onCreatorChange(creator, project) {
	return {
		type: AppConstants.SET_CREATOR,
		creator,
		project,
	}
}

export function	onProjectChange(project, creator) {
	return {
		type: AppConstants.SET_PROJECT,
		project,
		creator
	}
}

export function	onSortChange(sorting) {
	return {
		type: AppConstants.SET_SORTING,
		sorting
	}
}

