import React from 'react'
import { Link } from 'react-router-dom';
import { pageMove } from "./../../../App.js"//page animation function

function SidebarNav(props) {
	let currentUserId = props.currentUserId
	let currentUserPath = {
		pathname: "/src/components/body/page/profile/Profile",
		// currentUserId: props.currentUserId,
		// userBase: props.userBase,
		// postsBase: props.postsBase,
		// dialogBase: props.dialogBase
		//can be used as props for redirecting to another user profile
	}
	return (
		<div className="body-sidebar__list">
			<Link
				onClick={pageMove}
				className="body-sidebar__list-item"
				to={currentUserPath}
			>MY PROFILE</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/postlog/Posts" >MY POSTS</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/dialogs/Dialogs" >MY DIALOGS</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/news/News" >NEWS</Link>
			<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/music/Music" >MUSIC</Link>
			{/* <Link to={{ pathname: '/test', state: { data: myData } }} /> */}
		</div>
	);
}
export default SidebarNav;