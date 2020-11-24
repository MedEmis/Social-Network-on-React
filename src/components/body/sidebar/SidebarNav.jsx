import React from 'react'


class SidebarNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-sidebar__list">
				<button className="body-sidebar__list-item">PROFILE</button>
				<button className="body-sidebar__list-item">POSTS</button>
				<button className="body-sidebar__list-item">DIALOGS</button>
				<button className="body-sidebar__list-item">NEWS</button>
				<button className="body-sidebar__list-item">MUSIC</button>
			</div>
		);
	}
}
export default SidebarNav;