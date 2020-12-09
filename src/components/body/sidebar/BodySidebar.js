import React from 'react'
import './bodySidebar.scss'
import { MiniMenu } from './miniMenu';
import SidebarNav from './SidebarNav';
import SidebarNews from './SidebarNews';


function BodySidebar(props) {
	return (
		<div className="body-sidebar">
			<SidebarNav
				currentUserId={props.sidebarState.currentUserId}
				userBase={props.sidebarState.userBase}
				postsBase={props.sidebarState.postsBase}
				dialogBase={props.sidebarState.dialogBase}
			/>
			<MiniMenu />
			<SidebarNews />
		</div>
	);
}
export default BodySidebar;