import AppConstants from '../constants/AppConstants';

export default function users(state = {
	currentUser: [],
	isSignIn: false,
	preloader: false,
	showEmailError: false,
	showPassError: false,
}, action) {
	switch (action.type) {
		case AppConstants.SIGN_IN:
			return {
				...state,
				currentUser: action.currentUser,
				isSignIn: true,
				preloader: true,
			};
		case AppConstants.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.currentUser,
				isSignIn: true,
				preloader: true,
			};
			case AppConstants.SIGN_IN_FAILED:
				return {
					...state,
					showEmailError: action.showEmailError,
					showPassError: action.showPassError
				};
			case AppConstants.SIGN_OUT:
				return {
					...state,
					isSignIn: false,
					preloader: false,
					showEmailError: false,
					showPassError: false,
				};
		default:
			return state;
	}
}