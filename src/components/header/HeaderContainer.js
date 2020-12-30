import Header from './Header';
import { USER_LOG_OUTactionCreator, LogOutThunkCreator } from './../../redux/authReducer';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {//data for connect in state
	let userId = state.authReducer ? state.authReducer.currentUserId : null
	let user = state.usersReducer.userBase.filter(item => item.userId === userId)[0]
	const userAvatar = state.usersReducer.profile ? state.usersReducer.profile.photos.small : null
	return {
		user: userId,
		// userAvatar: user ? user.avatarUrl : null // for my data base
		userAvatar: userAvatar
	}
}


const HeaderContainer = connect(mapStateToProps, { userLogOut: LogOutThunkCreator })(Header)




export default HeaderContainer;