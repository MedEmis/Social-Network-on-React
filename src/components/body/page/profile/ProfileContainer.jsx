import React from 'react'
import * as axios from "axios"
import Profile from './Profile';
import { connect } from 'react-redux'
import { SET_PROFILE_actionCreator } from './../../../../redux/userBaseReducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		}
	}
	async componentDidMount() {
		this.setState({ isLoading: true })
		let userId = this.props.match.params.temporaryID
		await axios.get(
			`https://social-network.samuraijs.com/api/1.0/profile/${userId}`
		)
			.then(response => {
				this.props.setUsers(response.data)
			})
		this.setState({ isLoading: false })
	}
	render() {
		return (
			<Profile
				{...this.props}
				isLoading={this.state.isLoading}
			/>
		)
	}
}



let mapStateToProps = (state) => {//data for connect in state
	return {
		userBase: state.usersReducer.userBase,
		userId: state.usersReducer.currentUserId,
		profile: state.usersReducer.profile
	}
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer) //Connecting URL data to our component
// const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default connect(mapStateToProps, { setUsers: SET_PROFILE_actionCreator })(WithUrlDataContainerComponent)




//export default ProfileContainer;