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
				<NavLink onClick={this.pageMove} className="body-sidebar__list-item" to="/src/components/body/page/profile/Profile.jsx" ><span className="body-sidebar__arrov-hint"/>PROFILE</NavLink>
				<NavLink onClick={this.pageMove} className="body-sidebar__list-item" to="/src/components/body/page/postlog/Posts.js" ><span className="body-sidebar__arrov-hint"/>POSTS</NavLink>
				<NavLink onClick={this.pageMove} className="body-sidebar__list-item" to="/src/components/body/page/dialogs/Dialogs.jsx" ><span className="body-sidebar__arrov-hint"/>DIALOGS</NavLink>
				<NavLink onClick={this.pageMove} className="body-sidebar__list-item" to="/src/components/body/page/news/News.jsx" ><span className="body-sidebar__arrov-hint"/>NEWS</NavLink>
				<NavLink onClick={this.pageMove} className="body-sidebar__list-item" to="/src/components/body/page/music/Music.jsx" ><span className="body-sidebar__arrov-hint"/>MUSIC</NavLink>
			</div>
		);
	}
}
export default SidebarNav;