import React from 'react'
import './body.css';
import BodyPage from './BodyPage';
import BodySidebar from './BodySidebar';



class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-main">
				<BodySidebar />
				<BodyPage/>
			</div>
		);
	}
}
export default Body;