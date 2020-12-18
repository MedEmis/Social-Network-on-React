import React, { useState } from 'react'
import './postItem.scss';
import defaultAvatar from "./../../../../images/defaultUser.png"

//let classNames = require('classnames');




function NestedReplyPostItem(props) {
	//const [IsTextOpen, setIsTextOpen] = useState(false)
	//let postsBlock = props.childReply
	const [IsVoted, setIsVoted] = useState(false)
	let user = props.userBase.filter(item => item.userId === props.userId)[0]
	let isLiked = user.voutedLike//to set color of icon
	let isDisliked = user.voutedDislike//to set color of icon
	let avatar = user.avatarUrl
	let name = user.name
	return (
		<>
			<div className="hero-posts-log-item nested-reply">
				<img className="hero-posts-log-item_avatar" src={avatar || defaultAvatar} alt="avatar" />
				<div className="hero-posts-log-item__title">
					<div className="hero-posts-log-item__title-from">From: {!props.nikName ? " Anonymous" : props.nikName}</div>
					<div className="hero-posts-log-item__title-date">{props.userId}</div>
					<div className="hero-posts-log-item__title-date">Date: {!props.dataDate ? "--.--.--" : props.dataDate}  /   At: {!props.dataTime ? "--:--" : props.dataTime}</div>
					<div className="hero-posts-log-item__title-log-id">log id: {props.id}</div>
				</div>
				<div className="hero-posts-log-item__body">
					<div className="hero-posts-log-item__body-text">{!props.textBody ? "...no text" : props.textBody}</div>
					<ul style={props.panelColor(props)}
						className="hero-posts-log-item__body-special-list" id="nestedReply">
						<li onClick={(event) => {
							props.isVoutedCheck(event, props.userBase)
							setIsVoted(true)
						}}
							style={isLiked.includes(props.id) ? { backgroundColor: "green" } : { backgroundColor: "none" }}
							name="like" className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Up</span></li>
						<li onClick={(event) => {
							props.isVoutedCheck(event, props.userBase)
							setIsVoted(true)
						}}
							style={isDisliked.includes(props.id) ? { backgroundColor: "red" } : { backgroundColor: "none" }}
							name="dislike" className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Down</span></li>
						<li className="hero-posts-log-item__body-special-item tooltip">{props.likes ? props.likes : 0}<span className="tooltiptext">Likes</span></li>
						<li className="hero-posts-log-item__body-special-item tooltip">{props.dislikes ? props.dislikes : 0}<span className="tooltiptext">Dislikes</span></li>
					</ul>
				</div>

				{/* TEXTAREA */}
				{/* <button onClick={() =>  setIsTextOpen(true)} type="submit" className="hero-posts-log-item__button-reply">Reply</button>
					<div className={classNames(" body-page__reply-textarea", { " visible":    IsTextOpen })}>
						<textarea onInput={(event) => props.autoGrow(event)} className="body-page__reply-textarea-input" type="text" defaultValue={`Answer to ${ props.nikName}:`} />
						<div className="body-page__reply-textarea-buttons">
							<button onClick={() =>  setIsTextOpen(false)} type="submit" className="red-btn" id="neon-text">Close</button>
							<button onClick={(event) => {
							props.addNewNestedPost(event, props)
							setIsTextOpen(true)
							}
							} type="submit" className="blue-btn" id="neon-text">Publish</button>
						</div>
					</div> */}
			</div>
			{/* <div className="body-page__hero-posts-log-nested-reply-wrapper">
					{
						(   postsBlock !== undefined &&    postsBlock !== null)
							?    postsBlock.map((item, index) => (item ? <NestedReplyPostItem
								key={Math.floor(Math.random() * 10000)}
								id={   postsBlock[index].id}
								userId={   postsBlock[index].userId}
								userBase={ props.userBase}
								nikName={   postsBlock[index].nikName}
								dataDate={   postsBlock[index].dataDate}
								dataTime={   postsBlock[index].dataTime}
								textBody={   postsBlock[index].textBody}
								childReply={   postsBlock[index].nestedReply}
								nestReplyFunc={ props.nestReplyFunc}
								auto_growFunc={ props.auto_growFunc}
							/> : null))
							: null
					}

				</div> */}
		</>
	);
}
export default NestedReplyPostItem;