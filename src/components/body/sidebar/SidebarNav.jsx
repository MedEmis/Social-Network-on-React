import React from 'react'
import { NavLink } from 'react-router-dom';
import { pageMove } from "./../../../App.js"//page animation function

class SidebarNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-sidebar__list">
				<NavLink onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/profile/Profile" >PROFILE</NavLink>
				<NavLink onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/postlog/Posts" >POSTS</NavLink>
				<NavLink onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/dialogs/Dialogs" >DIALOGS</NavLink>
				<NavLink onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/news/News" >NEWS</NavLink>
				<NavLink onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/music/Music" >MUSIC</NavLink>
			</div>
		);
	}
}
export default SidebarNav;