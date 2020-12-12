import { createStore, combineReducers } from 'redux'
import userBaseReducer from './userBaseReducer';
import postBaseReducer from './postBaseReducer';
import dialogBaseReducer from './dialogBaseReducer';
import usersPageReducer from './usersPageReducer';

let reducers = combineReducers({
	usersReducer: userBaseReducer,
	postsReducer: postBaseReducer,
	dialogsReducer: dialogBaseReducer,
	usersPageReducer: usersPageReducer
})

let store = createStore(reducers)

export default store           