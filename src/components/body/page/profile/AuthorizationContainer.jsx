import React from 'react'
import { connect } from 'react-redux'
import {
	USER_LOG_INactionCreator,
	LogInThunkCreator,
	AuthorizationThunkCreator,
	GetCaptchaThunkCreator
} from './../../../../redux/authReducer'; //---For my data base
import Authorization from './Autorization';

function AuthorizationContainer(props) {
	return (
		<Authorization {...props} />
	)
}

let mapStateToProps = (state) => {//data for connect in state
	return {
		captcha: state.authReducer.captcha ? state.authReducer.captcha : null
	}
}



export default connect(
	mapStateToProps
	, {
		// LogIn: LogInThunkCreator,
		Authorization: AuthorizationThunkCreator,
		GetCaptcha: GetCaptchaThunkCreator
	})(AuthorizationContainer)


//AuthorizationContainer = connect(null/* no props */, { userLogIn: USER_LOG_INactionCreator, })(Authorization)  //---For my data base
//export default AuthorizationContainer  //---For my data base




