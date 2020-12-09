import React, { useState } from 'react'
import ReplyPostItem from './ReplyPostItem';
import './postItem.scss';
let classNames = require('classnames');


function PostItem(props) {
	const [IsTextOpen, setIsTextOpen] = useState(false)
	let postsBlock = props.childReply
	let isLiked = props.userBase[props.userId].voutedLike//to set color of icon
	let isDisliked = props.userBase[props.userId].voutedDislike//to set color of icon

	return (
		<div className="posts-log-item-wrapper">
			<div className="hero-posts-log-item">
				<img className="hero-posts-log-item_avatar" src={props.userBase[props.userId].avatarUrl} alt="avatar" />
				<div className="hero-posts-log-item__title">
					<div className="hero-posts-log-item__title-from">From: {!props.userBase[props.userId].name ? " Anonymous" : props.userBase[props.userId].name}</div>
					<div className="hero-posts-log-item__title-date">{props.userId}</div>
					<div className="hero-posts-log-item__title-date">
						Date: {!props.dataDate ? "--.--.--" : props.dataDate}  /   At: {!props.dataTime ? "--:--" : props.dataTime}
					</div>
					<div className="hero-posts-log-item__title-log-id">log id: {props.id}</div>
				</div>
				<div className="hero-posts-log-item__body">
					<div className="hero-posts-log-item__body-text">{!props.textBody ? "...no text" : props.textBody}</div>
					<ul style={props.panelColor(props)}
						className="hero-posts-log-item__body-special-list"  >
						<li onClick={(event) => props.isVoutedCheck(event, props.userBase)}
							style={isLiked.includes(props.id) ? { backgroundColor: "green" } : { backgroundColor: "none" }}
							name="like" className="hero-posts-log-item__body-special-item tooltip">
							<span className="tooltiptext">Thumbs Up</span></li>
						<li onClick={(event) => props.isVoutedCheck(event, props.userBase)}
							style={isDisliked.includes(props.id) ? { backgroundColor: "red" } : { backgroundColor: "none" }}
							name="dislike" className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Down</span></li>
						<li className="hero-posts-log-item__body-special-item tooltip">{props.likes ? props.likes : 0}<span className="tooltiptext">Likes</span></li>
						<li className="hero-posts-log-item__body-special-item tooltip">{props.dislikes ? props.dislikes : 0}<span className="tooltiptext">Dislikes</span></li>
					</ul>
				</div>
				<div onClick={() => setIsTextOpen(true)} type="submit" className="hero-posts-log-item__button-reply">Reply</div>
				<div className={classNames(" body-page__reply-textarea", { " visible": IsTextOpen })}>
					<textarea
						onInput={(event) => props.autoGrow(event)}
						className="body-page__reply-textarea-input" type="text"
						defaultValue={`Answer to ${props.nikName === null || props.nikName === undefined ? "anonymous" : props.nikName}:---`}
					/>
					<div className="body-page__reply-textarea-buttons">
						<button onClick={() => setIsTextOpen(false)} type="submit" className="red-btn" id="neon-text">Close</button>
						<button onClick={(event) => {
							props.addNewReply(event, props)
							setIsTextOpen(true)
						}
						} type="submit" className="blue-btn" id="neon-text">Publish</button>
					</div>
				</div>
			</div>
			<div className="hero-posts-log-reply-wrapper">
				{
					postsBlock.map((item, index) => (item ? <ReplyPostItem
						//DATA
						key={Math.floor(Math.random() * 10000)}
						id={postsBlock[index].id}
						initialUser={props.userId}
						initialPost={props.id}
						userId={postsBlock[index].userId}
						userBase={props.userBase}
						nikName={postsBlock[index].nikName}
						dataDate={postsBlock[index].dataDate}
						dataTime={postsBlock[index].dataTime}
						textBody={postsBlock[index].textBody}
						likes={postsBlock[index].like}
						dislikes={postsBlock[index].dislike}
						childReply={postsBlock[index].nestedReply}
						//functions
						updateTextarea={props.updateTextarea}
						addNewNestedPost={props.addNewNestedPost}
						isVoutedCheck={props.isVoutedCheck}
						panelColor={props.panelColor}
						autoGrow={props.autoGrow}
					/> : null))
				}
			</div>
		</div>
	);
}
export default PostItem;