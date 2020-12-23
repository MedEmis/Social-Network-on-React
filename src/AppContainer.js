import { connect } from 'react-redux'
import App from "./App"




let mapStateToProps = (state) => {//data for connect in state
	return {
		isUserExist: state.usersReducer.isUserExist ? state.usersReducer.isUserExist : null,
		currentUserId: state.authReducer ? state.authReducer.currentUserId : null,
		temporaryID: state.usersReducer.profile ? state.usersReducer.profile.userId : null,
		isAuthorized: state.authReducer.isAuthorized
	}
}
let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
	return {}
}


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)




export default AppContainer;