import { connect } from 'react-redux'
import PostLog from './PostLog';
import {
	UPDATE_POST_TEXT_actionCreator,
	ADD_NEW_POST_actionCreator,
	ADD_NEW_REPLY_actionCreator,
	ADD_NEW_NESTED_REPLY_actionCreator
} from "../../../../redux/postBaseReducer.js"



let mapStateToProps = (state) => {//data for connect in state
	//console.log(state)
	return {
		userId: state.usersReducer.currentUserId,
		userBase: state.usersReducer.userBase,
		postsBase: state.postsReducer.postsBase,
		currentPostText: state.postsReducer.currentPostText
	}
}
let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
	return {
		updateTextarea: (event) => {
			dispatch(UPDATE_POST_TEXT_actionCreator(event))
		},
		addNewPost: (userId, name) => {
			dispatch(ADD_NEW_POST_actionCreator(
				userId,
				name
			))
		},
		addNewReply: (event, data) => {
			dispatch(ADD_NEW_REPLY_actionCreator(
				data.userId,
				data.id,
				data.userBase.filter(item => item.userId == data.userId)[0].name,
				event
			))
		},
		addNewNestedPost: (event, data) => {
			dispatch(ADD_NEW_NESTED_REPLY_actionCreator(
				data.userId,
				data.initialUser,
				data.initialPost,
				data.id,
				data.userBase.filter(item => item.userId == data.userId)[0].name,
				event
			))
		},
		isVoutedCheck: (event, userBase) => {
			dispatch({
				type: "LIKE_INCREMENT",
				event: event,
				userBase: userBase,
			})
		},
		//just try if no need dispatch ===============---->>>NO NEED TO DISPATCH SERVISE FUNCTIONS!!!!!   JUST PUT TOGETHER WITH DISPATCH FUNCTIONS AND COMPONENT WILL USE IT FROM PROPS
		panelColor: (data) => {
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
		},
		autoGrow: (event) => {
			event.target.style.height = "5px";
			event.target.style.height = (event.target.scrollHeight) + "px";
		}
		//just try end
	}
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostLog)




export default PostsContainer;