import AppConstants from '../constants/AppConstants';

const initialState = {
	users: JSON.parse(localStorage.getItem('databaseTTS'))[0].users,
}

export default function users(state = {
	users: initialState.users,
	isSignIn: false,
	preloader: false,
	email: 'all',
	pass: ''
}, action) {
	switch (action.type) {
		case AppConstants.SIGN_IN:
			return {
				...state,
				email: action.email,
				pass: action.pass,
				isSignIn: true,
				preloader: true
			};
			case AppConstants.SIGN_IN_FAILED:
				return state;
		default:
			return state;
	}
}