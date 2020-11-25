import React from 'react'
import { NavLink } from 'react-router-dom';


class SidebarNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	pageMove = (event) => {
		if (window.location.href === event.target.href) { return }
		let page = document.querySelector(".body-page")
		let pageCover = document.querySelector(".body-page_cover")
		page.style.right = "120%"
		pageCover.style.display = "block"
		setTimeout(() => {
			page.style.right = "0%"
			pageCover.style.display = "none"
		}, 300);
	}
	render() {
		return (
			<div className="body-sidebar__list">
				<NavLink onClick={this.pageMove} className="body-sidebar__list-item" to="/src/components/body/page/profile/Profile.jsx" >PROFILE</NavLink>
				<NavLink onClick={this.pageMove} className="body-sidebar__list-item" to="/src/components/body/page/postlog/Posts.js" >POSTS</NavLink>
				<NavLink onClick={this.pageMove} className="body-sidebar__list-item" to="/src/components/body/page/dialogs/Dialogs.jsx" >DIALOGS</NavLink>
				<NavLink onClick={this.pageMove} className="body-sidebar__list-item" to="/src/components/body/page/" >NEWS</NavLink>
				<NavLink onClick={this.pageMove} className="body-sidebar__list-item" to="/src/components/body/page/" >MUSIC</NavLink>
			</div>
		);
	}
}
export default SidebarNav;