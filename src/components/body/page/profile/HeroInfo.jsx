import React from 'react'
import topImage from "./../../../../images/page-top.jpg"
import './profile.scss';





class HeroInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroPicture: props.heroPicture,
			name: props.name,
			birthDate: props.birthDate,
			city: props.city,
			education: props.education,
			webSite: props.webSite
		};
		//console.log(this.props.birthDate)

	}
	render() {
		return (
			<div className="body-page__hero-page">
				<div className="body-page__background"><img src={topImage} alt="topImage"></img></div>
				<div className="body-page__info">
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
							<span>{!this.props.birthDate ? "-None-" : this.props.birthDate}</span>
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

			</div>
		);
	}
}
export default HeroInfo;