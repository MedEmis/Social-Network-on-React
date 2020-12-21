import { CREATE_NEW_USERactionCreator } from './../../../../redux/authReducer';
import { connect } from 'react-redux'
import Registration from './Registration';



let mapStateToProps = (state) => {//data for connect in state
	return {
		isUserExist: state.usersReducer.isUserExist,
		currentUserId: state.usersReducer.currentUserId
	}
}
let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
	return {
		userCreation: (userData) => {
			dispatch(CREATE_NEW_USERactionCreator(userData))
		}
	}
}


const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration)




export default RegistrationContainer;