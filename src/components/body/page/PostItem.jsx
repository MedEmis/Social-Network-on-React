import React from 'react'
import './postItem.scss';
import ReplyPostItem from './ReplyPostItem';




class PostItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nikName: 'MyReplyName',
			dataDate: '1.12.2020',
			dataTime: '9:55',
			textBody: "Lorem ita. Aucessitatibus iste doloribus, nam harum alias? Omnis quas dolore rem quia cupiditate laborum at odit, maiores molestias? Vero praesentium dolorum mollitia iste? Molestias consectetur voluptate vitae perferendis nemo dignissimos aperiam suscipit"
		};
		//console.log(!this.props ? this.props.nikName : "Anonymous")
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
						<div className="body-page__hero-posts-log-item__body-text">{!this.props.textBody?"...no text":this.props.textBody}</div>
						<div className="body-page__hero-posts-log-item__body-special">
							<ul className="body-page__hero-posts-log-item__body-special-list">
								<li className="body-page__hero-posts-log-item__body-special-item">OO</li>
								<li className="body-page__hero-posts-log-item__body-special-item">OO</li>
								<li className="body-page__hero-posts-log-item__body-special-item">OO</li>
								<li className="body-page__hero-posts-log-item__body-special-item">OO</li>
								<li className="body-page__hero-posts-log-item__body-special-item">OO</li>
							</ul>
						</div>
					</div>
					<button type="submit" className="body-page__hero-posts-log-item__button-reply">Reply</button>
				</div>
				<div className="body-page__hero-posts-log-reply-wrapper">
					<ReplyPostItem nikName={this.state.nikName} dataDate={this.state.dataDate} dataTime={this.state.dataTime} textBody={this.state.textBody} />
					<ReplyPostItem />
				</div>
			</div>
		);
	}
}
export default PostItem;