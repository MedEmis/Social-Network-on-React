import React from 'react'
import logo from './../../../src/images/logo192.png';
import { USER_LOG_OUTactionCreator } from "../../redux/userBaseReducer"
import { pageMove } from "./../../App"
import { Link } from 'react-router-dom';
import './header.css';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.user = this.props.headerState.currentUserId
		this.userBase = this.props.headerState.userBase
		this.userAvatar = this.props.headerState.userBase[this.user] ? this.props.headerState.userBase[this.user].avatarUrl : ""
		//console.log("header props", this.props.headerState.userBase[this.user])
	}
	render() {
		return (
			<div className="header" >
				<Link to="/"
					className="header-nav-item"
					onClick={(event) => {
						this.props.dispatch(USER_LOG_OUTactionCreator())
						pageMove(event)
					}
					}
				>Log Out</Link>
				<div className="header__pictures">
					<div >
						{this.user ? <img className="header__hero-avatar" src={this.userAvatar ? this.userAvatar : null} alt="hero" /> : null}
					</div>
					<div className="header__logo"><img className="App-logo" src={logo} alt="logo" /></div>
				</div>
			</div >
		);
	}
}
export default Header;