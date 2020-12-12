import React from 'react'
import { Link } from 'react-router-dom';
import { pageMove } from "./../../../App.js"//page animation function

function SidebarNav() {
	return (
		<div className="body-sidebar__list">
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/profile/Profile" >MY PROFILE</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/postlog/Posts" >MY POSTS</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/dialogs/Dialogs" >MY DIALOGS</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/news/UserPage" >USERS BASE</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/music/Music" >MUSIC</Link>
		</div>
	);
}
export default SidebarNav;