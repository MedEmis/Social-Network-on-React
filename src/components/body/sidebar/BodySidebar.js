import React, { useContext } from 'react'
import { ThemeContext } from '../../../redux/ThemeContext';
import './bodySidebar.scss'
import { MiniMenu } from './miniMenu';
import SidebarNav from './SidebarNav';
import SidebarNews from './SidebarNews';


function BodySidebar(props) {
	const lightTheme = useContext(ThemeContext)
	return (
		<div className="body-sidebar"  style={{ background: lightTheme ? " rgb(205, 215, 223)" : "rgb(42, 53, 61)" }}>
			<SidebarNav />
			<MiniMenu themeChange={props.themeChange} />
			<SidebarNews />
		</div>
	);
}
export default BodySidebar;
