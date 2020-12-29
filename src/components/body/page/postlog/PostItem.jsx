import React, { useState } from 'react'
import ReplyPostItem from './ReplyPostItem';
import './postItem.scss';
import defaultAvatar from "./../../../../images/defaultUser.png"

let classNames = require('classnames');


function PostItem(props) {
	const [IsTextOpen, setIsTextOpen] = useState(false)
	const [IsVoted, setIsVoted] = useState(false)
	let postsBlock = props.childReply
	let user = props.userBase.filter(item => item.userId === props.userId)[0]
	let isLiked = user.voutedLike//to set color of icon
	let isDisliked = user.voutedDislike//to set color of icon
	let avatar = user.avatarUrl
	let name = user.name
	return (
		<div className="posts-log-item-wrapper">
			<div className="hero-posts-log-item">
				<img className="hero-posts-log-item_avatar" src={avatar || defaultAvatar} alt="avatar" />
				<div className="hero-posts-log-item__title">
					<div className="hero-posts-log-item__title-from">From: {!name ? " Anonymous" : name} </div>
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
						<li onClick={(event) => {
							props.isVotedCheck(event, props.userBase)
							setIsVoted(true)
						}
						}
							style={isLiked.includes(props.id) ? { backgroundColor: "green" } : { backgroundColor: "none" }}
							name="like" className="hero-posts-log-item__body-special-item tooltip">
							<span className="tooltiptext">Thumbs Up</span></li>
						<li onClick={(event) => {
							props.isVotedCheck(event, props.userBase)
							setIsVoted(true)
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
						isVotedCheck={props.isVotedCheck}
						panelColor={props.panelColor}
						autoGrow={props.autoGrow}
					/> : null))
				}
			</div>
		</div>
	);
}
export default PostItem;





// import React from 'react'
// import ReplyPostItem from './ReplyPostItem';
// import './postItem.scss';
// import PostBody from './PostBody';



// function PostItem(props) {

// 	let postsBlock = props.childReply
// 	let user = props.userBase.filter(item => item.userId === props.userId)[0]
// 	let isLiked = user.voutedLike//to set color of icon
// 	let isDisliked = user.voutedDislike//to set color of icon
// 	let avatar = user.avatarUrl
// 	let name = user.name
// 	let type = props.type
// 	return (
// 		<div className="posts-log-item-wrapper">
// 			<PostBody
// 				type={type}
// 				replyAbility={true}
// 				avatar={avatar}
// 				nikName={props.nikName}
// 				userId={props.userId}
// 				dataDate={props.dataDate}
// 				dataTime={props.dataTime}
// 				id={props.id}
// 				textBody={props.textBody}
// 				userBase={props.userBase}
// 				isLiked={isLiked}
// 				isDisliked={isDisliked}
// 				likes={props.likes}
// 				dislikes={props.dislikes}
// 				//functions
// 				isVotedCheck={props.isVotedCheck}
// 				panelColor={props.panelColor}
// 				autoGrow={props.autoGrow}
// 				addNewReply={props.addNewReply}
// 			/>
// 			<div className="hero-posts-log-reply-wrapper">
// 				{
// 					postsBlock.map((item, index) => (item
// 						? <PostItem
// 							//data
// 							key={Math.floor(Math.random() * 10000)}
// 							type={"reply"}
// 							userBase={props.userBase}
// 							id={postsBlock[index].id}
// 							likes={postsBlock[index].like}
// 							userId={postsBlock[index].userId}
// 							nikName={postsBlock[index].nikName}
// 							dataDate={postsBlock[index].dataDate}
// 							dataTime={postsBlock[index].dataTime}
// 							textBody={postsBlock[index].textBody}
// 							dislikes={postsBlock[index].dislike}
// 							childReply={postsBlock[index].reply}
// 							//functions
// 							panelColor={props.panelColor}
// 							autoGrow={props.autoGrow}
// 							updateTextarea={props.updateTextarea}
// 							addNewReply={props.addNewReply}
// 							addNewNestedPost={props.addNewNestedPost}
// 							isVotedCheck={props.isVotedCheck}
// 						/>
// 						: null))
// 				}
// 				{/* {
// 					postsBlock.map((item, index) => (item ? <ReplyPostItem
// 						//DATA
// 						key={Math.floor(Math.random() * 10000)}
// 						id={postsBlock[index].id}
// 						initialUser={props.userId}
// 						initialPost={props.id}
// 						userId={postsBlock[index].userId}
// 						userBase={props.userBase}
// 						nikName={postsBlock[index].nikName}
// 						dataDate={postsBlock[index].dataDate}
// 						dataTime={postsBlock[index].dataTime}
// 						textBody={postsBlock[index].textBody}
// 						likes={postsBlock[index].like}
// 						dislikes={postsBlock[index].dislike}
// 						childReply={postsBlock[index].nestedReply}
// 						//functions
// 						updateTextarea={props.updateTextarea}
// 						addNewNestedPost={props.addNewNestedPost}
// 						isVotedCheck={props.isVotedCheck}
// 						panelColor={props.panelColor}
// 						autoGrow={props.autoGrow}
// 					/> : null))
// 				} */}
// 			</div>
// 		</div>
// 	);
// }
// export default PostItem;
