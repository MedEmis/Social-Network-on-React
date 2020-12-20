import React from 'react'
import * as axios from "axios"
import { connect } from 'react-redux'
import { SET_USER_DATA_actionCreator } from './../../../../redux/authReducer';
// import { USER_LOG_INactionCreator } from './../../../../redux/userBaseReducer';
import Authorization from './Autorization';

class AuthorizationContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		}
	}
	async logIn(event) {
		//this.setState({ isLoading: true })
		await axios.get(
			`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true // to send that we are authorized
		})
			.then(response => {
				this.props.setUsersData(response.data, event)
			})
		//this.setState({ isLoading: false })
	}
	render() {
		return (
			<Authorization
				isLoading={this.state.isLoading}
				userLogIn={this.logIn.bind(this)}
			/>
		)
	}
}


let mapStateToProps = (state) => {//data for connect in state
	return {}
}
// let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
// 	return {
// 		userLogIn: (event) => {
// 			dispatch(USER_LOG_INactionCreator(event))
// 		}
// 	}
// }


//const AuthorizationContainer = connect(mapStateToProps, mapDispatchToProps)(Authorization)
export default connect(mapStateToProps, { setUsersData: SET_USER_DATA_actionCreator })(AuthorizationContainer)






