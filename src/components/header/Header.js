import React from 'react'
import logo from './../../../src/images/logo192.png';
import { pageMove } from "./../../App"
import { Link } from 'react-router-dom';
import './header.css';


function Header(props) {
	let user = props.headerState.currentUserId
	let userAvatar = props.headerState.userBase[user] ? props.headerState.userBase[user].avatarUrl : ""
	//console.log("header props",      props.headerState.userBase[     user])
	return (
		<div className="header" >
			<Link to="/"
				className="header-nav-item"
				onClick={(event) => {
					props.userLogOut()
					pageMove(event)
				}
				}
			>Log Out</Link>
			<div className="header__pictures">
				<div >
					{user ? <img className="header__hero-avatar" src={userAvatar ? userAvatar : null} alt="hero" /> : null}
				</div>
				<div className="header__logo"><img className="App-logo" src={logo} alt="logo" /></div>
			</div>
		</div >
	);
}
export default Header;