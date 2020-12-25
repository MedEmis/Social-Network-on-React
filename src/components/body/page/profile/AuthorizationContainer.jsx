import React from 'react'
import { connect } from 'react-redux'
import { USER_LOG_INactionCreator, LogInThunkCreator, AuthorizationThunkCreator } from './../../../../redux/authReducer'; //---For my data base
import Authorization from './Autorization';

function AuthorizationContainer(props) {
	return (
		<Authorization {...props} />
	)
}

export default connect(null, {
	// LogIn: LogInThunkCreator,
	Authorization: AuthorizationThunkCreator
})(AuthorizationContainer)


//AuthorizationContainer = connect(null/* no props */, { userLogIn: USER_LOG_INactionCreator, })(Authorization)  //---For my data base
//export default AuthorizationContainer  //---For my data base




