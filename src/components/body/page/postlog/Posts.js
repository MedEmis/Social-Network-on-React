import React from 'react'
import './postLog.scss';
import PostLog from './PostLog';
import { currentUserId } from './../../../body/Body.js'





class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		if (this.props.location.currentUserId) {
			this.userId = this.props.location.currentUserId || this.props.location.UserId
		} else {
			this.userId = currentUserId
		}
		//console.log(this.props.location)

	}
	render() {
		return (
			<>
				<PostLog id='PostLog' userId={this.userId} />
			</>
		);
	}
}
export default Posts;