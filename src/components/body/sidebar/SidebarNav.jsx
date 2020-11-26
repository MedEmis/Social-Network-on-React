import React from 'react'
import { Link } from 'react-router-dom';
import { pageMove } from "./../../../App.js"//page animation function

class SidebarNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.currentUserId = this.props.currentUserId //Id from Body.js
		this.currentUserPath = "/src/components/body/page/profile/Profile"
		//console.log(this.props.currentUserId) //        + "/" + this.props.currentUserId
		//    sending props via <Link to={{ ... }}  to page /Profile to make it use this props
	}
	render() {
		return (
			<div className="body-sidebar__list">
				<Link onClick={pageMove} className="body-sidebar__list-item"
					// to={this.currentUserPath}
					to={{ pathname: this.currentUserPath, currentUserId: this.currentUserId }}
				> MY PROFILE</Link>
				<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/postlog/Posts" >MY POSTS</Link>
				<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/dialogs/Dialogs" >MY DIALOGS</Link>
				<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/news/News" >NEWS</Link>
				<Link onClick={pageMove} className="body-sidebar__list-item" to="/src/components/body/page/music/Music" >MUSIC</Link>
				{/* <Link to={{ pathname: '/test', state: { data: myData } }} /> */}
			</div>
		);
	}
}
export default SidebarNav;