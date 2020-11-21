import React from 'react'
import './body.css';
import { MiniMenu } from './miniMenu';


class BodySidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-sidebar">
				<ul className="body-sidebar__list">
					<li className="body-sidebar__list-item">Menu</li>
					<li className="body-sidebar__list-item">Menu</li>
					<li className="body-sidebar__list-item">Menu</li>
					<li className="body-sidebar__list-item">Menu</li>
					<li className="body-sidebar__list-item">Menu</li>
				</ul>
				{/* <div className="body-sidebar__app-settings"><img src="https://img.icons8.com/nolan/64/gear.png" /></div> */}
				<MiniMenu />
				<div className="body-sidebar__news-box"></div>
			</div>
		);
	}
}
export default BodySidebar;