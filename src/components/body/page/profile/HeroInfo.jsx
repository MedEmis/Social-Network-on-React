import React from 'react'
import './heroInfo.css';




class HeroInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroPicture: props.heroPicture,
			name: props.name,
			dObirth: props.dObirth,
			city: props.city,
			education: props.education,
			webSite: props.webSite
		};
	}
	render() {
		return (
			<div className="body-page__hero-info">
				<div className="body-page__hero-bigavatar">
					<img className="hero-avatar" src={this.props.heroPicture} alt="hero" />
				</div>
				<div className="body-page__hero-data">
					<div className="body-page__hero-data-item">
						<span>Name:</span>
						<span>{!this.props.name ? "-None-" : this.props.name}</span>
					</div>
					<div className="body-page__hero-data-item">
						<span>Date of birth:</span>
						<span>{!this.props.dObirth ? "-None-" : this.props.dObirth}</span>
					</div>
					<div className="body-page__hero-data-item">
						<span>City:</span>
						<span>{!this.props.city ? "-None-" : this.props.city}</span>
					</div>
					<div className="body-page__hero-data-item">
						<span>Education:</span>
						<span>{!this.props.education ? "-None-" : this.props.education}</span>
					</div>
					<div className="body-page__hero-data-item">
						<span>Web Site</span>
						<span>{!this.props.webSite ? "-None-" : this.props.webSite}</span>
					</div>
				</div>
			</div>
		);
	}
}
export default HeroInfo;