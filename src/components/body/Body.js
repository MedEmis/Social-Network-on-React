import React from 'react'
import './Body.css';


class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-main">
				<div className="body-main__sidebar"></div>
				<div className="body-main__body-page"></div>
			</div>
		);
	}
}
export default Body;