import React from 'react'
import './posts.css';
import PostLog from './PostLog';





class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: {
				name: "Name Name",
			}
		};

	}
	render() {
		return (
			<>
				<PostLog id='PostLog' name={this.state.userData.name} />
				<div className="body-page__end">no more messages here</div>
			</>
		);
	}
}
export default Posts;