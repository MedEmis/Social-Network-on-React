import PublicUserPage from './../UserPage/PublicUserPage';
import { connect } from 'react-redux'
import {
	FOLLOW_actionCreator,
	CHAT_actionCreator,
	SET_USERS_actionCreator
} from './../../../../redux/userBaseReducer';


let mapStateToProps = (state) => {//data for connect in state
	return {
		userBase: state.usersReducer.userBase,
		currentUserId: state.usersReducer.currentUserId
	}
}
let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
	return {
		toFollow: (event, currentUserId, userBase) => {
			dispatch(FOLLOW_actionCreator(event, currentUserId, userBase))
		},
		setUsers: (newUsers) => {
			dispatch(SET_USERS_actionCreator(newUsers))
		},
		toChat: (event) => {
			dispatch(CHAT_actionCreator(event))
		}
	}
}


const PublicUserPageContainer = connect(mapStateToProps, mapDispatchToProps)(PublicUserPage)




export default PublicUserPageContainer;