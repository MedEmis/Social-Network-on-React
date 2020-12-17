import PublicUserPage from './../UserPage/PublicUserPage';
import { connect } from 'react-redux'
import {
	FOLLOW_actionCreator,
	CHAT_actionCreator,
	SET_USERS_actionCreator,
	CHANGE_PAGE_actionCreator
} from './../../../../redux/userBaseReducer';


let mapStateToProps = (state) => {//data for connect in state
	return {
		userBase: state.usersReducer.userBase,
		currentUserId: state.usersReducer.currentUserId,
		displayedUsers: state.usersReducer.displayedUsers,
		totalUsersCount: state.usersReducer.totalUsersCount,
		currentUsersPage: state.usersReducer.currentUsersPage
	}
}
let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
	return {
		toFollow: (event, currentUserId, userBase) => {
			dispatch(FOLLOW_actionCreator(event, currentUserId, userBase))
		},
		setUsers: (newUsers, totalCount) => {
			dispatch(SET_USERS_actionCreator(newUsers, totalCount))
		},
		ChangePage: (event) => {
			dispatch(CHANGE_PAGE_actionCreator(event))
		},
		toChat: (event) => {
			dispatch(CHAT_actionCreator(event))
		}
	}
}


const PublicUserPageContainer = connect(mapStateToProps, mapDispatchToProps)(PublicUserPage)




export default PublicUserPageContainer;