import React from 'react'
import './postLog.scss';
import PostLog from './PostLog';


function Posts(props) {

	// if (props.location.currentUserId) {
	// 	userId = props.location.currentUserId ||props.location.UserId
	// } else {
	// 	userId = currentUserId
	// }
	//console.log("Posts props", props)




	return (
		<>
			{
				props.currentUserId
					? <PostLog
						userId={props.currentUserId}
						userBase={props.userBase}
						postsBase={props.postsBase}
						currentPostText={props.currentPostText}
						dispatch={props.dispatch}
					/>
					: <h1><b>You don't have any posts yet</b></h1>
			}
		</>
	);

}
export default Posts;