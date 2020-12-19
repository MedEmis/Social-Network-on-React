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


const PublicUserPageContainer = connect(mapStateToProps, {
	toFollow: FOLLOW_actionCreator,
	setUsers: SET_USERS_actionCreator,
	ChangePage: CHANGE_PAGE_actionCreator,
	toChat: CHAT_actionCreator
})(PublicUserPage)




export default PublicUserPageContainer;