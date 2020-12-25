import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userBaseReducer from './userBaseReducer';
import postBaseReducer from './postBaseReducer';
import dialogBaseReducer from './dialogBaseReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
	usersReducer: userBaseReducer,
	postsReducer: postBaseReducer,
	dialogsReducer: dialogBaseReducer,
	authReducer: authReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancer(applyMiddleware(thunkMiddleware)),
);

export default store;