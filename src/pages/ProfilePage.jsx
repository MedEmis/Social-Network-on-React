import React from 'react'
import './body.css';
import BodySidebar from './sidebar/BodySidebar';
import Posts from './page/BodyPage';
import Profile from './page/Profile';



class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-main">
				<BodySidebar/>
				<Profile/>
			</div>
		);
	}
}
export default Body;