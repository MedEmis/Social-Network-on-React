import React from 'react'
import './bodySidebar.scss'
import { MiniMenu } from './miniMenu';
import SidebarNav from './SidebarNav';
import SidebarNews from './SidebarNews';


class BodySidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-sidebar">
				<SidebarNav/>
				<MiniMenu />
				<SidebarNews/>
			</div>
		);
	}
}
export default BodySidebar;