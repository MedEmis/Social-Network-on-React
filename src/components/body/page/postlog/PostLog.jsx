import React, { useContext } from 'react'
import PostItem from './PostItem';
import './makeMessage.css';
import './postLog.scss';
import { ThemeContext } from '../../../../redux/ThemeContext';


// className={classNames(" body-page__reply-textarea", { " visible":    IsTextOpen })}


function PostLog(props) {
	let name = props.userBase.filter(item => item.userId === props.userId)[0] ? props.userBase.filter(item => item.userId === props.userId)[0].name : "AnoNymus"
	let postsBlock = props.postsBase ? props.postsBase[props.userId] : null
	let usertype = localStorage.getItem("userType")
	const lightTheme = useContext(ThemeContext)
	const postInput = React.createRef();
	const panelColor = (data) => {
		let panColor = {}
		if (data.likes > data.dislikes) {
			panColor = {
				background: ' rgb(72, 139, 72)'
			};
		} else if (data.likes < data.dislikes) {
			panColor = {
				background: 'rgb(155, 49, 49)'
			};
		} else {
			panColor = {
				background: 'rgb(105, 85, 17)'
			};
		}
		return panColor
	}
	//console.log("PostLog", postsBlock)
	return (
		<div className="body-page__hero-posts-log" style={{ background: lightTheme ? " rgb(228, 217, 217)" : "rgb(95, 95, 95)" }} >
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
							type={" "}
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
							panelColor={panelColor}
							autoGrow={props.autoGrow}
							updateTextarea={props.updateTextarea}
							addNewReply={props.addNewReply}
							addNewNestedPost={props.addNewNestedPost}
							isVotedCheck={props.isVotedCheck}
						/> : null))
						: null
				}
				{/* {
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
							panelColor={panelColor}
							autoGrow={props.autoGrow}
							updateTextarea={props.updateTextarea}
							addNewReply={props.addNewReply}
							addNewNestedPost={props.addNewNestedPost}
							isVotedCheck={props.isVotedCheck}
						/> : null))
						: null
				} */}
				{
					usertype === "hardcodedUser"
						? <div className="body-page__end">{"no more messages here"}</div>
						: <div className="body-page__end">{"Sorry, for real users this page will not work properly..."}</div>
				}
			</div>
		</div >
	);
}
export default PostLog;