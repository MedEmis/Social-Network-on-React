import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux'
import { GetUserProfileThunkCreator } from './../../../../redux/userBaseReducer';
import { withRouter } from 'react-router-dom';


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

let mapStateToProps = (state) => {//data for connect in state
	return {
		userBase: state.usersReducer.userBase,
		userId: state.authReducer.currentUserId,
		profile: state.usersReducer.profile,
		isFetching: state.usersReducer.isFetching
	}
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer) //Connecting URL data to our component
export default connect(mapStateToProps, { setProfile: GetUserProfileThunkCreator })(WithUrlDataContainerComponent)




//export default ProfileContainer;