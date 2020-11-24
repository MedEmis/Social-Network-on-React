import React from 'react'


class SidebarNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-sidebar__list">
				<a href="/src/components/body/page/profile/Profile.jsx" className="body-sidebar__list-item">PROFILE</a>
				<a href="/src/components/body/page/postlog/Posts.js" className="body-sidebar__list-item">POSTS</a>
				<a href="/src/components/body/page/dialogs/Dialogs.jsx" className="body-sidebar__list-item">DIALOGS</a>
				<a href="/src/components/body/page/" className="body-sidebar__list-item">NEWS</a>
				<a href="/src/components/body/page/" className="body-sidebar__list-item">MUSIC</a>
			</div>
		);
	}
}
export default SidebarNav;