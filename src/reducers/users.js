import AppConstants from '../constants/AppConstants';

const initialState = {
	users: JSON.parse(localStorage.getItem('databaseTTS'))[0].users,
}

export default function users(state = {
	users: initialState.users,
	isSignIn: false,
	preloader: false,
	email: 'all',
	showEmailError: false,
	showPassError: false,
	pass: ''
}, action) {
	switch (action.type) {
		case AppConstants.SIGN_IN:
			return {
				...state,
				email: action.email,
				pass: action.pass,
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
					email: 'all',
					showEmailError: false,
					showPassError: false,
					pass: ''
				};
		default:
			return state;
	}
}