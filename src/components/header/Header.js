import React from 'react'
import logo from './../../../src/images/logo192.png';
import './header.css';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.user = this.props.headerState.currentUserId
		this.userBase = this.props.headerState.userBase
		this.userAvatar = this.props.headerState.userBase[this.user].avatarUrl
		//console.log("header props", this.props)
	}
	render() {
		return (
			<div className="header">
				<div className="header-nav-item">Home</div>
				<div className="header__pictures">
					<div ><img className="header__hero-avatar" src={this.userAvatar} alt="hero" /></div>
					<div className="header__logo"><img className="App-logo" src={logo} alt="logo" /></div>
				</div>
			</div>
		);
	}
}
export default Header;