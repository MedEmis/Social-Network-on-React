import React from 'react'
import './makeMessage.css';
import PostItem from './PostItem';
import { AUTO_GROWactionCreator, UPDATE_POST_TEXTactionCreator, ADD_NEW_POSTactionCreator } from "../../../../redux/postBaseReducer.js"


class PostLog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//name: props.userBase[this.props.userId].name ? props.userBase[this.props.userId].name : "AnoNymus",
			postsBase: props.postsBase,
			postsBlock: props.postsBase ? props.postsBase[props.userId] : null,
			postReplays: props.postsBase[props.userId] ? props.postsBase[props.userId].reply : null
		};
		this.child = React.createRef();
		this.postInput = React.createRef();
		//console.log("PostLog props", this.props.userBase[this.props.userId])
	}
	render() {
		return (
			<div className="body-page__hero-posts-log">
				<div className="body-page__hero-posts">
					<div className="body-page__hero-posts-title">Add message</div>
					<div className="body-page__hero-posts-textarea">
						<textarea
							onInput={(event) => this.props.dispatch(AUTO_GROWactionCreator(event))}
							ref={this.postInput}
							value={this.props.currentPostText}
							onChange={(event) => this.props.dispatch(UPDATE_POST_TEXTactionCreator(event))}
							className="body-page__hero-posts-textarea-input"
						/>
					</div>
					<div className="body-page__hero-posts-submit">
						<button onClick={() => {
							this.props.dispatch(ADD_NEW_POSTactionCreator(
								this.props.userId,
								this.state.name
							))
						}} type="submit" className="blue-btn" id="neon-text">Publish</button>
					</div>
				</div>
				<div className="body-page__hero-posts-logs-wrapper">
					{
						this.state.postsBlock
							?
							this.state.postsBlock.map((item, index) => (item ? <PostItem
								ref={this.child}
								key={Math.floor(Math.random() * 10000)}
								userBase={this.props.userBase}
								id={this.state.postsBlock[index].id}
								likes={this.state.postsBlock[index].like}
								userId={this.state.postsBlock[index].userId}
								nikName={this.state.postsBlock[index].nikName}
								dataDate={this.state.postsBlock[index].dataDate}
								dataTime={this.state.postsBlock[index].dataTime}
								textBody={this.state.postsBlock[index].textBody}
								dislikes={this.state.postsBlock[index].dislike}
								childReply={this.state.postsBlock[index].reply}
								dispatch={this.props.dispatch}//all functions
							/> : null))
							: null
					}
					<div className="body-page__end">no more messages here</div>
				</div>
			</div>
		);
	}
}
export default PostLog;

// className={classNames(" body-page__reply-textarea", { " visible": this.state.IsTextOpen })}