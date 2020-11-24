import React from 'react'
import './postItem.scss';
import ReplyPostItem from './ReplyPostItem';
//import heroPicture from './../../../images/like.png'





class PostItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVouted: false,
			like: 0,
			dislike: 0
		};
	}
	likeIncrement = () => {
		let elemPanel = document.querySelector('.body-page__hero-posts-log-item__body-special-list')
		this.setState({
			like: this.state.like + 1,
			isVouted: true
		})
		this.state.dislike > this.state.like ? elemPanel.style.background = 'rgb(163, 4, 4)' : elemPanel.style.background = 'rgb(47, 110, 10)'
	}
	likeDecrement = () => {
		let elemPanel = document.querySelector('.body-page__hero-posts-log-item__body-special-list')
		this.setState({
			dislike: this.state.dislike + 1,
			isVouted: true
		})
		this.state.dislike > this.state.like ? elemPanel.style.background = 'rgb(163, 4, 4)' : elemPanel.style.background = 'rgb(47, 110, 10)'
	}

	render() {
		return (
			<div className="body-page__hero-posts-log-item-wrapper">
				<div className="body-page__hero-posts-log-item">
					<div className="body-page__hero-posts-log-item__title">
						<div className="body-page__hero-posts-log-item__title-from">From: {!this.props.nikName ? " Anonymous" : this.props.nikName}</div>
						<div className="body-page__hero-posts-log-item__title-date">Date: {!this.props.dataDate ? "--.--.--" : this.props.dataDate}  /   At: {!this.props.dataTime ? "--:--" : this.props.dataTime}</div>
					</div>
					<div className="body-page__hero-posts-log-item__body">
						<div className="body-page__hero-posts-log-item__body-text">{!this.props.textBody ? "...no text" : this.props.textBody}</div>
						<div className="body-page__hero-posts-log-item__body-special">
							<ul className="body-page__hero-posts-log-item__body-special-list" >
								<li onClick={this.likeIncrement} className="body-page__hero-posts-log-item__body-special-item tooltip">{this.state.like}<span className="tooltiptext">Like</span></li>
								<li onClick={this.likeDecrement} className="body-page__hero-posts-log-item__body-special-item tooltip">{this.state.dislike}<span className="tooltiptext">Dislike</span></li>
								<li className="body-page__hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Feature 2</span></li>
								<li className="body-page__hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Feature 3</span></li>
								<li className="body-page__hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Feature 4</span></li>
							</ul>
						</div>
					</div>
					<button type="submit" className="body-page__hero-posts-log-item__button-reply">Reply</button>
				</div>
				<div className="body-page__hero-posts-log-reply-wrapper">
					{/* <ReplyPostItem nikName={this.state.nikName} dataDate={this.state.dataDate} dataTime={this.state.dataTime} textBody={this.state.textBody} /> */}
					{/* <ReplyPostItem /> */}
				</div>
			</div>
		);
	}
}
export default PostItem;