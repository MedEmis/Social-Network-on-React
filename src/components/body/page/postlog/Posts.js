import React from 'react'
import './postLog.scss';
import PostLog from './PostLog';
import {
	UPDATE_POST_TEXTactionCreator,
	ADD_NEW_POSTactionCreator,
	ADD_NEW_REPLYactionCreator,
	ADD_NEW_NESTED_REPLYactionCreator
} from "../../../../redux/postBaseReducer.js"


function Posts(props) {

	// if (props.location.currentUserId) {
	// 	userId = props.location.currentUserId ||props.location.UserId
	// } else {
	// 	userId = currentUserId
	// }
	//console.log("Posts props", props)






	//РАБОТА С ДИСПАТЧЕМ
	const updateTextarea = (event) => {
		props.dispatch(UPDATE_POST_TEXTactionCreator(event))
	}
	const addNewPost = (userId, name) => {
		props.dispatch(ADD_NEW_POSTactionCreator(
			userId,
			name
		))
	}
	const addNewReply = (event, data) => {
		props.dispatch(ADD_NEW_REPLYactionCreator(
			data.userId,
			data.id,
			data.userBase[data.userId].name,
			event))
	}
	const addNewNestedPost = (event, data) => {
		props.dispatch(ADD_NEW_NESTED_REPLYactionCreator(
			data.userId,
			data.initialUser,
			data.initialPost,
			data.id,
			data.userBase[data.userId].name,
			event
		))
	}
	//РАБОТА С ДИСПАТЧЕМ








	//СЛУЖЕБНЫЕ ФУНКЦИИ
	const isVoutedCheck = (event, userBase) => {
		//debugger
		props.dispatch({
			type: "LIKE_INCREMENT",
			event: event,
			userBase: userBase,
		})
	}
	const panelColor = (props) => {
		let panColor = {}
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
		return panColor
	}
	const autoGrow = (event) => {
		event.target.style.height = "5px";
		event.target.style.height = (event.target.scrollHeight) + "px";
	}
	//СЛУЖЕБНЫЕ ФУНКЦИИ



	return (
		<>
			{
				props.currentUserId
					? <PostLog
						//data
						userId={props.currentUserId}
						userBase={props.userBase}
						postsBase={props.postsBase}
						currentPostText={props.currentPostText}
						//functions
						updateTextarea={updateTextarea}
						addNewPost={addNewPost}
						addNewReply={addNewReply}
						addNewNestedPost={addNewNestedPost}
						isVoutedCheck={isVoutedCheck}
						panelColor={panelColor}
						autoGrow={autoGrow}
					/>
					: <h1><b>You don't have any posts yet</b></h1>
			}
		</>
	);
}
export default Posts;