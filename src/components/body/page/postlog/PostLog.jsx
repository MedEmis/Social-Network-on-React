import React from 'react'
import PostItem from './PostItem';
import './makeMessage.css';
import './postLog.scss';


// className={classNames(" body-page__reply-textarea", { " visible":    IsTextOpen })}


function PostLog(props) {
	let name = props.userBase.filter(item => item.userId == props.userId)[0].name ? props.userBase.filter(item => item.userId == props.userId)[0].name : "AnoNymus"
	let postsBlock = props.postsBase ? props.postsBase[props.userId] : null
	const postInput = React.createRef();
	//console.log("PostLog", postsBlock)
	return (
		<div className="body-page__hero-posts-log">
			<div className="body-page__hero-posts">
				<div className="body-page__hero-posts-title">Add message</div>
				<div className="body-page__hero-posts-textarea">
					<textarea
						onInput={(event) => props.autoGrow(event)}
						ref={postInput}
						value={props.currentPostText}
						onChange={(event) => {
							props.updateTextarea(event)
						}
						}
						className="body-page__hero-posts-textarea-input"
					/>
				</div>
				<div className="body-page__hero-posts-submit">
					<button onClick={() => {
						props.addNewPost(props.userId, name)
					}} type="submit" className="blue-btn" id="neon-text">Publish</button>
				</div>
			</div>
			<div className="body-page__hero-posts-logs-wrapper">
				{
					postsBlock//if we have postBlock we will render it
						?
						postsBlock.map((item, index) => (item ? <PostItem
							//data
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
							//functions
							autoGrow={props.autoGrow}
							updateTextarea={props.updateTextarea}
							addNewReply={props.addNewReply}
							addNewNestedPost={props.addNewNestedPost}
							isVoutedCheck={props.isVoutedCheck}
							panelColor={props.panelColor}
						/> : null))
						: null
				}
				<div className="body-page__end">no more messages here</div>
			</div>
		</div>
	);
}
export default PostLog;