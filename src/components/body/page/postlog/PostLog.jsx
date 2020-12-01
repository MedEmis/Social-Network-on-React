import React from 'react'
import './makeMessage.css';
import PostItem from './PostItem';
import { addNewPost, addNewReply, addNewNestedReply, auto_grow, likeIncrementState } from "./../../../../redux/state"



class PostLog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			postsBase: props.postsBase,
			postsBlock: props.postsBase[props.userId],
			postReplays: props.postsBase[props.userId].length !== 0 ? props.postsBase[props.userId].reply : null
		};
		this.child = React.createRef();
		//console.log("PostLog props", this.state.postsBlock)
	}

	render() {
		return (
			<div className="body-page__hero-posts-log">
				<div className="body-page__hero-posts">
					<div className="body-page__hero-posts-title">Add message</div>
					<div className="body-page__hero-posts-textarea">
						<textarea onInput={(event) => auto_grow(event)} className="body-page__hero-posts-textarea-input"
							type="text" placeholder="some news?..."
						/>
					</div>
					<div className="body-page__hero-posts-submit">
						<button onClick={(e) => {
							addNewPost(
								this.props.userId,
								this.props.userBase[this.props.userId].name
							)
							this.setState({ refresh: true })
						}} type="submit" className="blue-btn" id="neon-text">Publish</button>
					</div>
				</div>
				<div className="body-page__hero-posts-logs-wrapper">
					{
						this.state.postsBlock.map((item, index) => (item ? <PostItem
							ref={this.child}
							key={Math.floor(Math.random() * 10000)}
							id={this.state.postsBlock[index].id}
							userId={this.state.postsBlock[index].userId}
							userBase={this.props.userBase}
							nikName={this.state.postsBlock[index].nikName}
							dataDate={this.state.postsBlock[index].dataDate}
							dataTime={this.state.postsBlock[index].dataTime}
							textBody={this.state.postsBlock[index].textBody}
							childReply={this.state.postsBlock[index].reply}
							replyFunc={addNewReply}
							nestReplyFunc={addNewNestedReply}
							auto_growFunc={auto_grow}
							likeIncrementState = {likeIncrementState}
						/> : null))
					}
					<div className="body-page__end">no more messages here</div>
				</div>
			</div>
		);
	}
}
export default PostLog;

// className={classNames(" body-page__reply-textarea", { " visible": this.state.IsTextOpen })}