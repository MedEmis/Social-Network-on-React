import React, { useEffect, useState } from 'react'
import Profile from './Profile';
import { connect } from 'react-redux'
import {
	GetUserProfileThunkCreator,
	GetStatusThunkCreator,
	SetStatusThunkCreator,
	SaveImageThunkCreator,
	UpdateProfileThunkCreator
} from './../../../../redux/userBaseReducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect_HOC } from '../../../../HOC/withAuthRedirectHOC.js';
import { compose } from 'redux';

function ProfileContainer(props) {
	let userId = props.match.params.temporaryID
	let isOwner = +props.userId === +userId
	useEffect(() => {
		
		props.getProfile(userId, isOwner)
	}, [userId, isOwner])
	return (
		<Profile
			{...props}
			isOwner={isOwner}
			isLoading={props.isFetching}
		/>
	)
}

//===========================================================================================
let mapStateToProps = (state) => {//data for connect in state
	return {
		profile: state.usersReducer.profile,
		email:state.authReducer.email,
		userBase: state.usersReducer.userBase,
		isFetching: state.usersReducer.isFetching,
		userStatus: state.usersReducer.userStatus,
		watchedProfile: state.usersReducer.watchedProfile,
		userId: state.authReducer.currentUserId || state.authReducer.userId,
	}
}

export default compose(
	connect(mapStateToProps, {
		getProfile: GetUserProfileThunkCreator,
		getStatus: GetStatusThunkCreator,
		setStatus: SetStatusThunkCreator,
		saveImage: SaveImageThunkCreator,
		updateProfile: UpdateProfileThunkCreator
	}), // THIRD =>//  giving props ang callbacks
	withRouter,// SECOND => // //Connecting URL data to our component
	//WithAuthRedirect_HOC// FIRST  => // giving our ProfileContainer to HOC function to wrap with it (HOC), and assign property "isAuthorized" and give ability to redirect
)(ProfileContainer)//TARGET component