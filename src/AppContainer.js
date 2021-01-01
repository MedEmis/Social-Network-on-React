import { connect } from 'react-redux'
import React from 'react'
import App from "./App"
import { getCurrentUserId, getIsUserExist, getTemporaryID, getIsAuthorized } from './redux/selectors';
import store from "./redux/reduxStore"
import { Provider } from 'react-redux';
import { GetUserProfileThunkCreator } from './redux/userBaseReducer';
import { LogInThunkCreator } from './redux/authReducer';



let mapStateToProps = (state) => {//data for connect in state
	return {
		isUserExist: getIsUserExist(state),
		currentUserId: getCurrentUserId(state),
		temporaryID: getTemporaryID(state),
		isAuthorized: getIsAuthorized(state)
	}
}

const AppContainer = connect(mapStateToProps, {
	getProfile: GetUserProfileThunkCreator
})(App)



const ReactSocialNetwork = (props) => {
	
	return (
		<React.StrictMode>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</React.StrictMode>
	)
}
export default ReactSocialNetwork