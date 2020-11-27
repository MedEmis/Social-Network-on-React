import React from 'react'
import './postLog.scss';
import PostLog from './PostLog';
import { currentUserId } from './../../../body/Body.js'





class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.userBase = this.props.userBase
		this.userId = this.props.currentUserId
		this.postsBase = this.props.postsBase
		// if (this.props.location.currentUserId) {
		// 	this.userId = this.props.location.currentUserId || this.props.location.UserId
		// } else {
		// 	this.userId = currentUserId
		// }
		//console.log("Posts props", this.props)


	}
	render() {
		return (
			<>
				<PostLog
					userId={this.userId}
					userBase={this.props.userBase}
					postsBase={this.props.postsBase}
				/>
			</>
		);
	}
}
export default Posts;