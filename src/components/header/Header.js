import React, { useContext } from 'react'
import logo from './../../../src/images/logo192.png';
import { pageMove } from "./../../App"
import { Link } from 'react-router-dom';
import './header.scss';
import defaultAvatar from "./../../images/defaultUser.png"
import { ThemeContext } from '../../redux/ThemeContext';


function Header(props) {
	const lightTheme = useContext(ThemeContext)
	return (
		<div className="header" style={{ background: lightTheme ? " rgb(195, 193, 201)" : "rgb(37, 33, 49)" }}>
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
					<img className="header__hero-avatar" src={props.userAvatar || props.hardcodedUserAvatar || defaultAvatar} alt="hero" />
				</div>
				<div className="header__logo"><img className="App-logo" src={logo} alt="logo" /></div>
			</div>
		</div>
	)
}

export default Header;