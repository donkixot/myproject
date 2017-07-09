import AppConstants from '../constants/AppConstants';

export default function content(state = JSON.parse(localStorage.getItem('databaseTTS'))[0].contents, action) {
	switch (action.type) {
		default:
			return state;
	}
}



