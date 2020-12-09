import { createStore, combineReducers } from 'redux'
import userBaseReducer from './userBaseReducer';
import postBaseReducer from './postBaseReducer';
import dialogBaseReducer from './dialogBaseReducer';

let reducers = combineReducers({
	usersReducer: userBaseReducer,
	postsReducer: postBaseReducer,
	dialogsReducer: dialogBaseReducer
})

let store = createStore(reducers)

export default store           