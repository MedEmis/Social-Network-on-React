import React from 'react'
import ReplyPostItem from './ReplyPostItem';
import { AUTO_GROWactionCreator, ADD_NEW_REPLYactionCreator } from "../../../../redux/store"
import './postItem.scss';
let classNames = require('classnames');



class PostItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVoted: false,
			IsTextOpen: false,
			postsBlock: props.childReply,
		};
		this.isLiked = this.props.userBase[this.props.userId].voutedLike
		this.isDisliked = this.props.userBase[this.props.userId].voutedDislike
	}
	panelColor = () => {
		if (this.props.likes > this.props.dislikes) {
			this.panColor = {
				background: ' rgb(72, 139, 72)'
			};
		} else if (this.props.likes < this.props.dislikes) {
			this.panColor = {
				background: 'rgb(155, 49, 49)'
			};
		} else {
			this.panColor = {
				background: 'rgb(105, 85, 17)'
			};
		}
	}
	isVoutedCheck = (event) => {
		this.props.dispatch({
			type: "LIKE_INCREMENT",
			event: event,
		})
	}
	render() {

		return (
			<div className="posts-log-item-wrapper">
				<div className="hero-posts-log-item">
					<img className="hero-posts-log-item_avatar" src={this.props.userBase[this.props.userId].avatarUrl} alt="avatar" />
					<div className="hero-posts-log-item__title">
						<div className="hero-posts-log-item__title-from">From: {!this.props.userBase[this.props.userId].name ? " Anonymous" : this.props.userBase[this.props.userId].name}</div>
						<div className="hero-posts-log-item__title-date">{this.props.userId}</div>
						<div className="hero-posts-log-item__title-date">
							Date: {!this.props.dataDate ? "--.--.--" : this.props.dataDate}  /   At: {!this.props.dataTime ? "--:--" : this.props.dataTime}
						</div>
						<div className="hero-posts-log-item__title-log-id">log id: {this.props.id}</div>
					</div>
					<div className="hero-posts-log-item__body">
						<div className="hero-posts-log-item__body-text">{!this.props.textBody ? "...no text" : this.props.textBody}</div>
						<ul onLoad={this.panelColor()} style={this.panColor} className="hero-posts-log-item__body-special-list"  >
							<li onClick={(event) => { this.isVoutedCheck(event) }}
								style={this.isLiked.includes(this.props.id) ? { backgroundColor: "green" } : { backgroundColor: "none" }}
								name="like" className="hero-posts-log-item__body-special-item tooltip">
								<span className="tooltiptext">Thumbs Up</span></li>
							<li onClick={(event) => { this.isVoutedCheck(event) }}
								style={this.isDisliked.includes(this.props.id) ? { backgroundColor: "red" } : { backgroundColor: "none" }}
								name="dislike" className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Down</span></li>
							<li className="hero-posts-log-item__body-special-item tooltip">{this.props.likes ? this.props.likes : 0}<span className="tooltiptext">Likes</span></li>
							<li className="hero-posts-log-item__body-special-item tooltip">{this.props.dislikes ? this.props.dislikes : 0}<span className="tooltiptext">Dislikes</span></li>
						</ul>
					</div>
					<div onClick={() => this.setState({ IsTextOpen: true })} type="submit" className="hero-posts-log-item__button-reply">Reply</div>
					<div className={classNames(" body-page__reply-textarea", { " visible": this.state.IsTextOpen })}>
						<textarea
							// onInput={(event) => this.props.dispatch(AUTO_GROWactionCreator(event))}
							className="body-page__reply-textarea-input" type="text"
							defaultValue={`Answer to ${this.props.nikName === null || this.props.nikName === undefined ? "anonymous" : this.props.nikName}:---`}
						/>
						<div className="body-page__reply-textarea-buttons">
							<button onClick={() => this.setState({ IsTextOpen: false })} type="submit" className="red-btn" id="neon-text">Close</button>
							<button onClick={
								(event) => {
									this.props.dispatch(ADD_NEW_REPLYactionCreator(
										this.props.userId,
										this.props.id,
										this.props.userBase[this.props.userId].name,
										event))
									this.setState({ IsTextOpen: false })
								}
							} type="submit" className="blue-btn" id="neon-text">Publish</button>
						</div>
					</div>
				</div>
				<div className="hero-posts-log-reply-wrapper">
					{
						this.state.postsBlock.map((item, index) => (item ? <ReplyPostItem
							ref={this.child}
							key={Math.floor(Math.random() * 10000)}
							id={this.state.postsBlock[index].id}
							initialUser={this.props.userId}
							initialPost={this.props.id}
							userId={this.state.postsBlock[index].userId}
							userBase={this.props.userBase}
							nikName={this.state.postsBlock[index].nikName}
							dataDate={this.state.postsBlock[index].dataDate}
							dataTime={this.state.postsBlock[index].dataTime}
							textBody={this.state.postsBlock[index].textBody}
							likes={this.state.postsBlock[index].like}
							dislikes={this.state.postsBlock[index].dislike}
							childReply={this.state.postsBlock[index].nestedReply}
							dispatch={this.props.dispatch}//all functions
						/> : null))
					}
				</div>
			</div>
		);
	}
}
export default PostItem;