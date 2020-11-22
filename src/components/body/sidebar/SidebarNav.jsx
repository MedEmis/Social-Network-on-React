import React from 'react'


class SidebarNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<ul className="body-sidebar__list">
				<li className="body-sidebar__list-item">PROFILE</li>
				<li className="body-sidebar__list-item">MESSAGES</li>
				<li className="body-sidebar__list-item">NEWS</li>
				<li className="body-sidebar__list-item">MUSIC</li>
			</ul>
		);
	}
}
export default SidebarNav;