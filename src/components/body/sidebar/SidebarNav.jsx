import React from 'react'
import { NavLink } from 'react-router-dom';


class SidebarNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-sidebar__list">
				<NavLink className="body-sidebar__list-item" to="/src/components/body/page/profile/Profile.jsx" >PROFILE</NavLink>
				<NavLink className="body-sidebar__list-item" to="/src/components/body/page/postlog/Posts.js" >POSTS</NavLink>
				<NavLink className="body-sidebar__list-item" to="/src/components/body/page/dialogs/Dialogs.jsx" >DIALOGS</NavLink>
				<NavLink className="body-sidebar__list-item" to="/src/components/body/page/" >NEWS</NavLink>
				<NavLink className="body-sidebar__list-item" to="/src/components/body/page/" >MUSIC</NavLink>
			</div>
		);
	}
}
export default SidebarNav;