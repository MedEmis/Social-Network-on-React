import PublicUserPage from './../UserPage/PublicUserPage';
import { connect } from 'react-redux'
import {
	FollowingThunkCreator,
	GetUserBaseThunkCreator,
	CHAT_actionCreator,
	CHANGE_PAGE_actionCreator,
} from './../../../../redux/userBaseReducer';




let mapStateToProps = (state) => {//preparing props for component
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
	toChat: CHAT_actionCreator,// giving function callbacks to component
	toFollow: FollowingThunkCreator,
	GetUsers: GetUserBaseThunkCreator,
	ChangePage: CHANGE_PAGE_actionCreator,
})(PublicUserPage)




export default PublicUserPageContainer;