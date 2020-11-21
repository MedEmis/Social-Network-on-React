import React from 'react'
import logo from './../../../src/logo192.png';
import './header.css';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="header">
				<ul className="header__header-nav">
					<li className="header-nav_item">Home</li>
					<li className="header-nav_item">Tab 1</li>
					<li className="header-nav_item">Tab 2</li>
					<li className="header-nav_item">Tab 3</li>
				</ul>
				<div className="header__logo"><img className="App-logo" src={logo} alt="logo"></img></div>
			</div>
		);
	}
}
export default Header;