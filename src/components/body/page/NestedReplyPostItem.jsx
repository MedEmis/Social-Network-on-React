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
					<div className="body-page__hero-posts-nested-reply-log-item__title-from">From: Naadsasdasdasme</div>
					<div className="body-page__hero-posts-nested-reply-log-item__title-date">Date: 00.00.00  /   At: 00.00</div>
				</div>
				<div className="body-page__hero-posts-nested-reply-log-item__body">
					<div className="body-page__hero-posts-nested-reply-log-item__body-text">word sdggf word sdgord sdggf word sdggf woggf word sdggf sdgord sdggf word sdggf woggf word sdggf word sdggf word sdggf word sdggf word sdggf </div>
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