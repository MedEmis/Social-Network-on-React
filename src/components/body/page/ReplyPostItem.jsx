import React from 'react'
import NestedReplyPostItem from './NestedReplyPostItem';
import './replyPostItem.css';




class ReplyPostItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nikName: 'MyName',
			dataDate: '23.11.2020',
			dataTime: '15:55',
			textBody: "Loreme esentium dolorum mollitia iste? Molestias consectetur voluptate vitae perferendis nemo dignissimos aperiam suscipit",

		};
	}
	render() {
		return (
			<>
				<div className="body-page__hero-posts-reply-log-item">
					<div className="body-page__hero-posts-reply-log-item__title">
						<div className="body-page__hero-posts-reply-log-item__title-from">From: {!this.props.nikName ? " Anonymous" : this.props.nikName}</div>
						<div className="body-page__hero-posts-reply-log-item__title-date">{!this.props.dataDate ? "--.--.--" : this.props.dataDate}  /   At: {!this.props.dataTime ? "--:--" : this.props.dataTime}</div>
					</div>
					<div className="body-page__hero-posts-reply-log-item__body">
						<div className="body-page__hero-posts-reply-log-item__body-text">{!this.props.textBody ? "...no text" : this.props.textBody}</div>
						<div className="body-page__hero-posts-reply-log-item__body-special">
							<ul className="body-page__hero-posts-reply-log-item__body-special-list">
								<li className="body-page__hero-posts-reply-log-item__body-special-item">OO</li>
								<li className="body-page__hero-posts-reply-log-item__body-special-item">OO</li>
								<li className="body-page__hero-posts-reply-log-item__body-special-item">OO</li>
								<li className="body-page__hero-posts-reply-log-item__body-special-item">OO</li>
								<li className="body-page__hero-posts-reply-log-item__body-special-item">OO</li>
							</ul>
						</div>
					</div>
					<button type="submit" className="body-page__hero-posts-log-item__button-reply"></button>
				</div>
				<div className="body-page__hero-posts-log-nested-reply-wrapper">
					<NestedReplyPostItem nikName={this.state.nikName} dataDate={this.state.dataDate} dataTime={this.state.dataTime} textBody={this.state.textBody} />
					<NestedReplyPostItem />
				</div>

			</>
		);
	}
}
export default ReplyPostItem;