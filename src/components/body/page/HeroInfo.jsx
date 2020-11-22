import React from 'react'
import './heroInfo.css';
import hero from './../../../images/avatar.jpeg'




class HeroInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-page__hero-info">
				<div className="body-page__hero-bigavatar">
					<img className="hero-avatar" src={hero} alt="hero" />
				</div>
				<div className="body-page__hero-data">
					<div className="body-page__hero-data-item">
						<span>Name:</span>
						<span>xxxxx</span>
					</div>
					<div className="body-page__hero-data-item">
						<span>Date of birth:</span>
						<span>xxxx</span>
					</div>
					<div className="body-page__hero-data-item">
						<span>City:</span>
						<span>xxxx</span>
					</div>
					<div className="body-page__hero-data-item">
						<span>Education:</span>
						<span>xxxx</span>
					</div>
					<div className="body-page__hero-data-item">
						<span>Web Site</span>
						<span>xxxxx</span>
					</div>
				</div>
			</div>
		);
	}
}
export default HeroInfo;