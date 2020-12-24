import React from 'react'
import { connect } from 'react-redux'
import { USER_LOG_INactionCreator, LogInThunkCreator } from './../../../../redux/authReducer'; //---For my data base
import Authorization from './Autorization';

function AuthorizationContainer(props) {
	return (
		<Authorization
			userLogIn={props.LogIn}//---for samurai API base
			//userLogIn={props.userLogIn} //---For my data base
		/>
	)
}


export default connect(null/* no props */, { LogIn: LogInThunkCreator })(AuthorizationContainer)


//AuthorizationContainer = connect(null/* no props */, { userLogIn: USER_LOG_INactionCreator, })(Authorization)  //---For my data base
//export default AuthorizationContainer  //---For my data base




