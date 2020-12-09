import React, { useState } from 'react'
import NestedReplyPostItem from './NestedReplyPostItem';
import { AUTO_GROWactionCreator, ADD_NEW_NESTED_REPLYactionCreator } from "../../../../redux/postBaseReducer.js"
import './postItem.scss';
let classNames = require('classnames');



function ReplyPostItem(props) {
	const [IsTextOpen, setIsTextOpen] = useState(false)
	let postsBlock = props.childReply
	let isLiked = props.userBase[props.userId].voutedLike//to set color of icon
	let isDisliked = props.userBase[props.userId].voutedDislike//to set color of icon
	let panColor = {}
	const panelColor = () => {
		if (props.likes > props.dislikes) {
			panColor = {
				background: ' rgb(72, 139, 72)'
			};
		} else if (props.likes < props.dislikes) {
			panColor = {
				background: 'rgb(155, 49, 49)'
			};
		} else {
			panColor = {
				background: 'rgb(105, 85, 17)'
			};
		}
	}
	const isVoutedCheck = (event, userBase) => {
		props.dispatch({
			type: "LIKE_INCREMENT",
			event: event,
			userBase: userBase,
		})
	}
	return (
		<>
			<div className="hero-posts-log-item reply">
				<img className="hero-posts-log-item_avatar" src={props.userBase[props.userId].avatarUrl} alt="avatar" />
				<div className="hero-posts-log-item__title">
					<div className="hero-posts-log-item__title-from">From: {!props.nikName ? " Anonymous" : props.nikName}</div>
					<div className="hero-posts-log-item__title-date">{props.userId}</div>
					<div className="hero-posts-log-item__title-date">Date: {!props.dataDate ? "--.--.--" : props.dataDate}  /   At: {!props.dataTime ? "--:--" : props.dataTime}</div>
					<div className="hero-posts-log-item__title-log-id">log id: {props.id}</div>
				</div>
				<div className="hero-posts-log-item__body">
					<div className="hero-posts-log-item__body-text">{!props.textBody ? "...no text" : props.textBody}</div>
					<ul onLoad={panelColor()} style={panColor} className="hero-posts-log-item__body-special-list" >
						<li onClick={(event) => {
							isVoutedCheck(
								event,
								props.userBase)
						}}
							style={isLiked.includes(props.id) ? { backgroundColor: "green" } : { backgroundColor: "none" }}
							name="like" className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Up</span></li>
						<li onClick={(event) => {
							isVoutedCheck(
								event,
								props.userBase)
						}}
							style={isDisliked.includes(props.id) ? { backgroundColor: "red" } : { backgroundColor: "none" }}
							name="dislike" className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Down</span></li>
						<li className="hero-posts-log-item__body-special-item tooltip">{props.likes ? props.likes : 0}<span className="tooltiptext">Likes</span></li>
						<li className="hero-posts-log-item__body-special-item tooltip">{props.dislikes ? props.dislikes : 0}<span className="tooltiptext">Dislikes</span></li>
					</ul>
				</div>
				<div onClick={() => setIsTextOpen(true)} type="submit" className="hero-posts-log-item__button-reply">Reply</div>
				<div className={classNames(" body-page__reply-textarea", { " visible": IsTextOpen })}>
					<textarea
						// onInput={(event) =>  props.dispatch(AUTO_GROWactionCreator(event))}
						className="body-page__reply-textarea-input" type="text"
						defaultValue={`Answer to ${props.nikName === null || props.nikName === undefined ? "anonymous" : props.nikName}:---`} />
					<div className="body-page__reply-textarea-buttons">
						<button onClick={() => setIsTextOpen(false)} type="submit" className="red-btn" id="neon-text">Close</button>
						<button onClick={(event) => {
							props.dispatch(ADD_NEW_NESTED_REPLYactionCreator(
								props.userId,
								props.initialUser,
								props.initialPost,
								props.id,
								props.userBase[props.userId].name,
								event))
							setIsTextOpen(true)
						}
						} type="submit" className="blue-btn" id="neon-text">Publish</button>
					</div>
				</div>
			</div>
			<div className="body-page__hero-posts-log-nested-reply-wrapper">
				{
					(postsBlock !== undefined && postsBlock !== null)
						? postsBlock.map((item, index) => (item ? <NestedReplyPostItem
							key={Math.floor(Math.random() * 10000)}
							id={postsBlock[index].id}
							userId={postsBlock[index].userId}
							userBase={props.userBase}
							nikName={postsBlock[index].nikName}
							dataDate={postsBlock[index].dataDate}
							dataTime={postsBlock[index].dataTime}
							textBody={postsBlock[index].textBody}
							likes={postsBlock[index].like}
							dislikes={postsBlock[index].dislike}
							childReply={postsBlock[index].nestedReply}
							props={props}
							dispatch={props.dispatch}//all functions
						/> : null))
						: null
				}
			</div>
		</>
	);
}
export default ReplyPostItem;