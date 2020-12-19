import React from 'react'
import './profile.scss';

function HeroAbout(props) {
	return (
		<div className="body-page__hero-contacts">
			<div className="body-page__hero-contacts_title">ABOUT ME</div>
			{props.text}
		</div>
	);
}
export default HeroAbout;