import React from 'react'
import './body.css';
import topImage from "./../../images/page-top.jpg"
import hero from './../../../src/images/avatar.jpeg';




class BodyPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-page">
				<div className="body-page__background"><img src={topImage} alt="topImage"></img></div>
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
				<div className="body-page__hero-posts">
					<div className="body-page__hero-posts-title">My posts</div>
					<div className="body-page__hero-posts-textarea">
						<textarea type="text" placeholder="some news?.." />
					</div>
					<div className="body-page__hero-posts-submit">
						<button type="submit" className="blue-btn" id="neon-text">Send</button>

					</div>
				</div>
				<div className="body-page__hero-posts-log">
					<div className="body-page__hero-posts-log-item">loredkfgjbdksfgbsdk;lfgjbe;rgbd;sgkberg</div>
					<div className="body-page__hero-posts-log-item">engejkg;bndkcvhjbashdejrygtlafsdghfbasdjhfdvasjdhfvj</div>
					<div className="body-page__hero-posts-log-item">kfjgbaklfdhjbdsfgbeirfgbi</div>
				</div>
			</div>
		);
	}
}
export default BodyPage;