import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux'





let mapStateToProps = (state) => {//data for connect in state
	return {
		userBase: state.usersReducer.userBase,
		userId: state.usersReducer.currentUserId
	}
}
let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
	return {}
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)




export default ProfileContainer;