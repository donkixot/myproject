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