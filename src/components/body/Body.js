import React from 'react'
import './body.css';
import BodySidebar from './sidebar/BodySidebar';
import BodyPage from './page/BodyPage';



class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-main">
				<BodySidebar/>
				<BodyPage />
			</div>
		);
	}
}
export default Body;