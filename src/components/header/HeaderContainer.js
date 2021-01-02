import Header from './Header';
import { USER_LOG_OUTactionCreator, LogOutThunkCreator } from './../../redux/authReducer';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {//data for connect in state
	let userId = state.authReducer ? state.authReducer.currentUserId : null
	const hardcodedUser = state.usersReducer.userBase.filter((user) => user.userId === (localStorage.getItem("currentUserId")))[0]
	const userAvatar = state.usersReducer.profile ? state.usersReducer.profile.photos.small : null
	return {
		user: userId,
		userAvatar: userAvatar,
		hardcodedUserAvatar: hardcodedUser ? hardcodedUser.avatarUrl : null
	}
}


const HeaderContainer = connect(mapStateToProps, { userLogOut: LogOutThunkCreator })(Header)




export default HeaderContainer;

