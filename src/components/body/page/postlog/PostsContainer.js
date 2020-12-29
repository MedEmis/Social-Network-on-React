import { connect } from 'react-redux'
import {
	UpdateTextareaThunkCreator,
	AddNewReplyThunkCreator,
	IsVotedCheckThunkCreator,
	AddNewPostThunkCreator,
	AddNewNestedPostThunkCreator,
	AutoGrowThunkCreator
} from '../../../../redux/postBaseReducer';
import PostLog from './PostLog';



let mapStateToProps = (state) => {//data for connect in state
	//console.log(state)
	return {
		userId: state.authReducer.currentUserId,
		userBase: state.usersReducer.userBase,
		postsBase: state.postsReducer.postsBase,
		currentPostText: state.postsReducer.currentPostText
	}
}

const PostsContainer = connect(mapStateToProps, {
	updateTextarea: UpdateTextareaThunkCreator,
	addNewPost: AddNewPostThunkCreator,
	addNewReply: AddNewReplyThunkCreator,
	addNewNestedPost: AddNewNestedPostThunkCreator,
	isVotedCheck: IsVotedCheckThunkCreator,
	autoGrow: AutoGrowThunkCreator
},
)(PostLog)

export default PostsContainer;
