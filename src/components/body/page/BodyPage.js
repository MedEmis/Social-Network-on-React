import React from 'react'
import './bodyPage.css';
import topImage from "./../../../images/page-top.jpg"
import HeroInfo from './HeroInfo';
import MakePost from './MakePost';
import PostItem from './PostItem';
import PostLog from './PostLog';




class BodyPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-page">
				<div className="body-page__background"><img src={topImage} alt="topImage"></img></div>
				<HeroInfo />
				<MakePost />
				<PostLog />
				<div className="body-page__end">no more messages here</div>
			</div>
		);
	}
}
export default BodyPage;