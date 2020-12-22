import React, { useState } from 'react'
import { connect } from 'react-redux'
//import { SET_USER_DATA_actionCreator } from './../../../../redux/authReducer';
import { USER_LOG_INactionCreator } from './../../../../redux/authReducer'; //---For my data base
import Authorization from './Autorization';
import { userAPI } from "./../../../../API"

function AuthorizationContainer(props) {
	const [isLoading, setIsLoading] = useState(false)
	const logIn = (event) => {
		setIsLoading(true)
		userAPI.logIn().then(data => props.setUsersData(data, event))
		setIsLoading(false)
	}
	return (
		<Authorization
			isLoading={isLoading}
			//userLogIn={logIn}//---for samurai API base
			userLogIn={this.props.userLogIn} //---For my data base
		/>
	)
}


//export default connect(null/* no props */, { setUsersData: SET_USER_DATA_actionCreator })(AuthorizationContainer)


AuthorizationContainer = connect(null/* no props */, { userLogIn: USER_LOG_INactionCreator })(Authorization)  //---For my data base
export default AuthorizationContainer  //---For my data base




