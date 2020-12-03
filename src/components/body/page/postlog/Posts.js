import React from 'react'
import './postLog.scss';
import PostLog from './PostLog';





class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
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
					userId={this.props.currentUserId}
					userBase={this.props.userBase}
					postsBase={this.props.postsBase}
					currentPostText={this.props.currentPostText}
					updatePostText={this.props.updatePostText}
					addNewPost={this.props.addNewPost}
					addNewReply={this.props.addNewReply}
					addNewNestedReply={this.props.addNewNestedReply}
					likeIncrementState={this.props.likeIncrementState}
					auto_grow={this.props.auto_grow}
				/>
			</>
		);
	}
}
export default Posts;