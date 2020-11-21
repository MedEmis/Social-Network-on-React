import React from 'react'
import logo from './../../../src/images/logo192.png';
import hero from './../../../src/images/avatar.jpeg';
import './header.css';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="header">
				<div className="header-nav-item">Home</div>
				<div className="header-nav-item">Tab 1</div>
				<div className="header-nav-item">Tab 2</div>
				<div className="header__pictures">
					<div ><img className="header__hero-avatar" src={hero} alt="hero" /></div>
					<div className="header__logo"><img className="App-logo" src={logo} alt="logo" /></div>
				</div>
			</div>
		);
	}
}
export default Header;