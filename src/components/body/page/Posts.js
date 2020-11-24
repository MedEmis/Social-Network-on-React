import React from 'react'
import './posts.css';
import PostLog from './PostLog';





class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: {
				name: "Name Name",
				dObirth: "20.04.1991",
				city: "Pervomaisk",
				education: "Bachelor",
				webSite: ""
			}
		};

	}
	render() {
		return (
			<div className="body-page">
				<PostLog id='PostLog' name={this.state.userData.name}/>
				<div className="body-page__end">no more messages here</div>
			</div>
		);
	}
}
export default Posts;