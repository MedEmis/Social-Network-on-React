import PublicUserPage from './../UserPage/PublicUserPage';
import { connect } from 'react-redux'
import {
	FollowingThunkCreator,
	GetUserBaseThunkCreator,
	CHAT_actionCreator,
	CHANGE_PAGE_actionCreator,
} from './../../../../redux/userBaseReducer';




let mapStateToProps = (state) => {//data for connect in state
	console.log("isFollowing", state.usersReducer.isFollowing,)
	return {
		userBase: state.usersReducer.userBase,
		isFetching: state.usersReducer.isFetching,
		isUserExist: state.usersReducer.isUserExist,
		isAuthorized: state.authReducer.isAuthorized,
		currentUserId: state.authReducer.currentUserId,
		displayedUsers: state.usersReducer.displayedUsers,
		totalUsersCount: state.usersReducer.totalUsersCount,
		currentUsersPage: state.usersReducer.currentUsersPage,
	}
}


const PublicUserPageContainer = connect(mapStateToProps, {
	toChat: CHAT_actionCreator,
	toFollow: FollowingThunkCreator,
	GetUsers: GetUserBaseThunkCreator,
	ChangePage: CHANGE_PAGE_actionCreator,
})(PublicUserPage)




export default PublicUserPageContainer;