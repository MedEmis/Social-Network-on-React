import Header from './Header';
import React from 'react'
import StoreContext from '../../redux/storeContext';
import { USER_LOG_OUTactionCreator } from './../../redux/userBaseReducer';
import { connect } from 'react-redux'


// function HeaderContainer(props) {
// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				(store) => {
// 					const userLogOut = () => { store.dispatch(USER_LOG_OUTactionCreator()) }
// 					let user = store.getState().usersReducer.currentUserId
// 					let userAvatar = store.getState().usersReducer.userBase[user]
// 						? store.getState().usersReducer.userBase[user].avatarUrl
// 						: null
// 					return <Header
// 						userLogOut={userLogOut}
// 						userAvatar={userAvatar}
// 						user={user}
// 					/>
// 				}
// 			}
// 		</StoreContext.Consumer>
// 	);
// }
//export default HeaderContainer;


let mapStateToProps = (state) => {//data for connect in state
	return {
		user: state.usersReducer.currentUserId,
		userAvatar: state.usersReducer.userBase[state.usersReducer.currentUserId]
			? state.usersReducer.userBase[state.usersReducer.currentUserId].avatarUrl
			: null
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