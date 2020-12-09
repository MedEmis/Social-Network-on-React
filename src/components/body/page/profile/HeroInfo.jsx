import React from 'react'
import './profile.scss';


function HeroInfo(props) {
	return (
		<div className="body-page__info">
			<div className="body-page__hero-bigavatar">
				{
					props.heroPicture
						? <img className="hero-avatar" src={props.heroPicture} alt="hero" />
						: 'no image'
				}
			</div>
			<div className="body-page__hero-data">
				<div className="body-page__hero-data-item">
					<span>Name:</span>
					<span>{!props.name ? "-None-" : props.name}</span>
				</div>
				<div className="body-page__hero-data-item">
					<span>Date of birth:</span>
					<span>{!props.birthDate ? "-None-" : props.birthDate}</span>
				</div>
				<div className="body-page__hero-data-item">
					<span>City:</span>
					<span>{!props.city ? "-None-" : props.city}</span>
				</div>
				<div className="body-page__hero-data-item">
					<span>E-mail:</span>
					<span>{!props.email ? "-None-" : props.email}</span>
				</div>
				<div className="body-page__hero-data-item">
					<span>Web Site</span>
					<span>{!props.webSite ? "-None-" : props.webSite}</span>
				</div>
			</div>
		</div>
	);
}
export default HeroInfo;