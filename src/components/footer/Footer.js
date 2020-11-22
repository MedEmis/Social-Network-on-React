import React from 'react'
import './footer.css';


class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="footer">
				<div className="footer__author">Project author - Maksym Drahanov</div>
				<div className="footer__version">V 0.1.0</div>
			</div>
		);
	}
}
export default Footer;