import React from 'react'
import './bodySidebar.scss'
import { MiniMenu } from './miniMenu';
import SidebarNav from './SidebarNav';
import SidebarNews from './SidebarNews';


class BodySidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.currentUserId = this.props.currentUserId
	}
	render() {
		return (
			<div className="body-sidebar">
				<SidebarNav
					currentUserId={this.props.currentUserId}
					userBase={this.props.userBase}
					postsBase={this.props.postsBase}
					dialogBase={this.props.dialogBase}
				/>
				<MiniMenu />
				<SidebarNews />
			</div>
		);
	}
}
export default BodySidebar;