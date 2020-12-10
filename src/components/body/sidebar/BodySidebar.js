import React from 'react'
import './bodySidebar.scss'
import { MiniMenu } from './miniMenu';
import SidebarNav from './SidebarNav';
import SidebarNews from './SidebarNews';


function BodySidebar() {
	return (
		<div className="body-sidebar" >
			<SidebarNav />
			<MiniMenu />
			<SidebarNews />
		</div>
	);
}
export default BodySidebar;
