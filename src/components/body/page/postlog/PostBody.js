import React, { useState } from 'react'
import defaultAvatar from "./../../../../images/defaultUser.png"
import PostReplyTextarea from './PostReplyTextarea';

function PostBody(props) {
	let className = "hero-posts-log-item" + " " + props.type
	const [IsVoted, setIsVoted] = useState(false)
	return (
		<div className={className}>
			<img className="hero-posts-log-item_avatar" src={props.avatar || defaultAvatar} alt="avatar" />
			<div className="hero-posts-log-item__title">
				<div className="hero-posts-log-item__title-from">From: {!props.nikName ? " Anonymous" : props.nikName}</div>
				<div className="hero-posts-log-item__title-date">{props.userId}</div>
				<div className="hero-posts-log-item__title-date">Date: {!props.dataDate ? "--.--.--" : props.dataDate}  /   At: {!props.dataTime ? "--:--" : props.dataTime}</div>
				<div className="hero-posts-log-item__title-log-id">log id: {props.id}</div>
			</div>
			<div className="hero-posts-log-item__body">
				<div className="hero-posts-log-item__body-text">{!props.textBody ? "...no text" : props.textBody}</div>
				<ul style={props.panelColor(props)}
					className="hero-posts-log-item__body-special-list" >
					<li onClick={(event) => {
						props.isVotedCheck(event, props.userBase)
						setIsVoted(true)
					}}
						style={props.isLiked.includes(props.id) ? { backgroundColor: "green" } : { backgroundColor: "none" }}
						name="like" className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Up</span></li>
					<li onClick={(event) => {
						props.isVotedCheck(event, props.userBase)
						setIsVoted(true)
					}}
						style={props.isDisliked.includes(props.id) ? { backgroundColor: "red" } : { backgroundColor: "none" }}
						name="dislike" className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Down</span></li>
					<li className="hero-posts-log-item__body-special-item tooltip">{props.likes ? props.likes : 0}<span className="tooltiptext">Likes</span></li>
					<li className="hero-posts-log-item__body-special-item tooltip">{props.dislikes ? props.dislikes : 0}<span className="tooltiptext">Dislikes</span></li>
				</ul>
			</div>
			{
				props.replyAbility
					? <PostReplyTextarea
						data = {props}
						autoGrow={props.autoGrow}
						nikName={props.nikName}
						addNewReply={props.addNewReply}
					/>
					:null
			}
		</div>
	)
}
export default PostBody