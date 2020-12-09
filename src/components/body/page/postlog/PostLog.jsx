import React from 'react'
import './makeMessage.css';
import PostItem from './PostItem';
import { AUTO_GROWactionCreator, UPDATE_POST_TEXTactionCreator, ADD_NEW_POSTactionCreator } from "../../../../redux/postBaseReducer.js"


// className={classNames(" body-page__reply-textarea", { " visible":    IsTextOpen })}


function PostLog(props) {
	let name = props.userBase[props.userId].name ? props.userBase[props.userId].name : "AnoNymus"
	let postsBlock = props.postsBase ? props.postsBase[props.userId] : null
	const child = React.createRef();
	const postInput = React.createRef();
	return (
		<div className="body-page__hero-posts-log">
			<div className="body-page__hero-posts">
				<div className="body-page__hero-posts-title">Add message</div>
				<div className="body-page__hero-posts-textarea">
					<textarea
						onInput={(event) => props.dispatch(AUTO_GROWactionCreator(event))}
						ref={postInput}
						value={props.currentPostText}
						onChange={(event) => props.dispatch(UPDATE_POST_TEXTactionCreator(event))}
						className="body-page__hero-posts-textarea-input"
					/>
				</div>
				<div className="body-page__hero-posts-submit">
					<button onClick={() => {
						props.dispatch(ADD_NEW_POSTactionCreator(
							props.userId,
							name
						))
					}} type="submit" className="blue-btn" id="neon-text">Publish</button>
				</div>
			</div>
			<div className="body-page__hero-posts-logs-wrapper">
				{
					postsBlock//if we have postBlock we will render it
						?
						postsBlock.map((item, index) => (item ? <PostItem
							ref={child}
							key={Math.floor(Math.random() * 10000)}
							userBase={props.userBase}
							id={postsBlock[index].id}
							likes={postsBlock[index].like}
							userId={postsBlock[index].userId}
							nikName={postsBlock[index].nikName}
							dataDate={postsBlock[index].dataDate}
							dataTime={postsBlock[index].dataTime}
							textBody={postsBlock[index].textBody}
							dislikes={postsBlock[index].dislike}
							childReply={postsBlock[index].reply}
							dispatch={props.dispatch}//all functions
						/> : null))
						: null
				}
				<div className="body-page__end">no more messages here</div>
			</div>
		</div>
	);
}
export default PostLog;