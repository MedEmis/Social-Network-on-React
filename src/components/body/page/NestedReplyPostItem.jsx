import React from 'react'
import './nestedReplyPostItem.css';




class NestedReplyPostItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-page__hero-posts-nested-reply-log-item">
				<div className="body-page__hero-posts-nested-reply-log-item__title">
					<div className="body-page__hero-posts-nested-reply-log-item__title-from">{!this.props.nikName ? " Anonymous" : this.props.nikName}</div>
					<div className="body-page__hero-posts-nested-reply-log-item__title-date">{!this.props.dataDate ? "--.--.--" : this.props.dataDate}  /   At: {!this.props.dataTime ? "--:--" : this.props.dataTime}</div>
				</div>
				<div className="body-page__hero-posts-nested-reply-log-item__body">
					<div className="body-page__hero-posts-nested-reply-log-item__body-text">{!this.props.textBody?"...no text":this.props.textBody}</div>
					<div className="body-page__hero-posts-nested-reply-log-item__body-special">
						<ul className="body-page__hero-posts-nested-reply-log-item__body-special-list">
							<li className="body-page__hero-posts-nested-reply-log-item__body-special-item">OO</li>
							<li className="body-page__hero-posts-nested-reply-log-item__body-special-item">OO</li>
							<li className="body-page__hero-posts-nested-reply-log-item__body-special-item">OO</li>
							<li className="body-page__hero-posts-nested-reply-log-item__body-special-item">OO</li>
							<li className="body-page__hero-posts-nested-reply-log-item__body-special-item">OO</li>
						</ul>
					</div>
				</div>
				<button type="submit"  className="body-page__hero-posts-log-item__button-reply"></button>
			</div>
		);
	}
}
export default NestedReplyPostItem;