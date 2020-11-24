import React from 'react'
import './body.css';
import Dialogs from './../components/body/page/Dialogs';



class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-main">
				<BodySidebar/>
				<Dialogs/>
				
			</div>
		);
	}
}
export default Body;