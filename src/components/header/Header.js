import React from 'react'
import logo from './../../../src/images/logo192.png';
import { pageMove } from "./../../App"
import { Link } from 'react-router-dom';
import './header.css';


function Header(props) {
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
					{props.user
						? <img className="header__hero-avatar" src={props.userAvatar ? props.userAvatar : null} alt="hero" />
						: null}
				</div>
				<div className="header__logo"><img className="App-logo" src={logo} alt="logo" /></div>
			</div>
		</div>
	);
}

export default Header;