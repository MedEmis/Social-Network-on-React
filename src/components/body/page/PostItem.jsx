import React from 'react'
import './postItem.scss';
import ReplyPostItem from './ReplyPostItem';




class PostItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-page__hero-posts-log-item-wrapper">
				<div className="body-page__hero-posts-log-item">
					<div className="body-page__hero-posts-log-item__title">
						<div className="body-page__hero-posts-log-item__title-from">From: Naadsasdasdasme</div>
						<div className="body-page__hero-posts-log-item__title-date">Date: 00.00.00  /   At: 00.00</div>
					</div>
					<div className="body-page__hero-posts-log-item__body">
						<div className="body-page__hero-posts-log-item__body-text">word gfgfwordgfgfword gfgfword gfgfword gfgfword gfgf </div>
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
					<ReplyPostItem />
					<ReplyPostItem />
				</div>
			</div>
		);
	}
}
export default PostItem;