import React from 'react'
import { Link } from 'react-router-dom';
import { pageMove } from "./../../../App.js"//page animation function

function SidebarNav() {
	return (
		<div className="body-sidebar__list">
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/Profile" >MY PROFILE</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/Posts" >MY POSTS</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/Dialogs" >MY DIALOGS</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/UserPage" >USERS BASE</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/Music" >MUSIC</Link>
		</div>
	);
}
export default SidebarNav;