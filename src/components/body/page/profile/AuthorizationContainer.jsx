import { connect } from 'react-redux'
import { USER_LOG_INactionCreator } from './../../../../redux/userBaseReducer';
import Authorization from './Autorization';




let mapStateToProps = (state) => {//data for connect in state
	return {}
}
let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
	return {
		userLogIn: (event) => {
			dispatch(USER_LOG_INactionCreator(event))
		}
	}
}


const AuthorizationContainer = connect(mapStateToProps, mapDispatchToProps)(Authorization)




export default AuthorizationContainer;



