import { combineReducers } from 'redux'
import user from './user'
import tasks from './tasks'
import contents from './contents'

export default combineReducers({
	user,
	tasks,
	contents
})
