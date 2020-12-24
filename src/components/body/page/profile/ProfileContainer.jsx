import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux'
import { GetUserProfileThunkCreator } from './../../../../redux/userBaseReducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect_HOC } from '../../../../HOC/withAuthRedirectHOC.js';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	componentDidMount() {
		let userId = this.props.match.params.temporaryID
		this.props.setProfile(userId)
	}
	render() {
		return (
			<Profile
				{...this.props}
				isLoading={this.props.isFetching}
			/>
		)
	}
}
//===========================================================================================
let mapStateToProps = (state) => {//data for connect in state
	return {
		profile: state.usersReducer.profile,
		userBase: state.usersReducer.userBase,
		userId: state.authReducer.currentUserId,
		isFetching: state.usersReducer.isFetching,
	}
}

export default compose(
	connect(mapStateToProps, { setProfile: GetUserProfileThunkCreator }), // THIRD =>//  giving props ang callbacks
	withRouter,// SECOND => // //Connecting URL data to our component
	WithAuthRedirect_HOC// FIRST  => // giving our ProfileContainer to HOC function to wrap with it (HOC), and assign property "isAuthorized" and give ability to redirect
)(ProfileContainer)//TARGET component