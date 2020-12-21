import Header from './Header';
import { USER_LOG_OUTactionCreator } from './../../redux/authReducer';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {//data for connect in state
	let userId = state.authReducer ? state.authReducer.currentUserId : null
	let user = state.usersReducer.userBase.filter(item => item.userId === userId)[0]
	return {
		user: userId,
		userAvatar: user ? user.avatarUrl : null
	}
}
let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
	return {
		userLogOut: () => {
			dispatch(USER_LOG_OUTactionCreator())
		}
	}
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)




export default HeaderContainer;