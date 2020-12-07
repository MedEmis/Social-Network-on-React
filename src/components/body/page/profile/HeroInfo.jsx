import React from 'react'
import './profile.scss';





class HeroInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		//console.log(this.props)
	}
	render() {
		return (
			<div className="body-page__info">
				<div className="body-page__hero-bigavatar">
					{
						this.props.heroPicture
							? <img className="hero-avatar" src={this.props.heroPicture} alt="hero" />
							: 'no image'
					}
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
						<span>E-mail:</span>
						<span>{!this.props.email ? "-None-" : this.props.email}</span>
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