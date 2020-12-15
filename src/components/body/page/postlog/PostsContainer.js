import { connect } from 'react-redux'
import PostLog from './PostLog';
import {
	UPDATE_POST_TEXTactionCreator,
	ADD_NEW_POSTactionCreator,
	ADD_NEW_REPLYactionCreator,
	ADD_NEW_NESTED_REPLYactionCreator
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
			dispatch(UPDATE_POST_TEXTactionCreator(event))
		},
		addNewPost: (userId, name) => {
			dispatch(ADD_NEW_POSTactionCreator(
				userId,
				name
			))
		},
		addNewReply: (event, data) => {
			dispatch(ADD_NEW_REPLYactionCreator(
				data.userId,
				data.id,
				data.userBase.filter(item => item.userId == data.userId)[0].name,
				event
			))
		},
		addNewNestedPost: (event, data) => {
			dispatch(ADD_NEW_NESTED_REPLYactionCreator(
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