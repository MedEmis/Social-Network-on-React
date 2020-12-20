import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import userBaseReducer from './userBaseReducer';
import postBaseReducer from './postBaseReducer';
import dialogBaseReducer from './dialogBaseReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
	usersReducer: userBaseReducer,
	postsReducer: postBaseReducer,
	dialogsReducer: dialogBaseReducer,
	authReducer: authReducer,
})

const store = createStore(reducers, devToolsEnhancer());

export default store           