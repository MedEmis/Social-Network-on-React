import React from 'react'
import './footer.scss';

function Footer(prop) {
	return (
		<div className="footer">
			<div className="footer__author">Project author - Maksym Drahanov</div>
			<div className="footer__git"><a target="blank" href="https://github.com/MedEmis" >GitHub: https://github.com/MedEmis</a></div>
			<div className="footer__email" ><a target="blank" href="mailto:draganovmaksim9@gmail.com" >Email: draganovmaksim9@gmail.com  </a></div>
			<div className="footer__version"> V 0.1.0</div>
		</div>
	);
}
export default Footer;