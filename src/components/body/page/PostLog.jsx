import React from 'react'
import './postLog.css';
import PostItem from './PostItem';




class PostLog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-page__hero-posts-log">
				<PostItem/>
				<PostItem/>
				<PostItem/>
				<PostItem/>
				<PostItem/>
				<PostItem/>
				<PostItem/>
			</div>
		);
	}
}
export default PostLog;