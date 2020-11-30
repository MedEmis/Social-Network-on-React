import React from 'react'
import './makeMessage.css';
import PostItem from './PostItem';



class PostLog extends React.Component {
	constructor(props) {
		super(props);
		this.child = React.createRef();
		this.state = {
			//IsTextOpen: false
		};
		this.userBase = this.props.userBase
		this.userId = this.props.userId
		this.postsBase = this.props.postsBase
		this.postsBlock = this.postsBase[this.userId]//getting block of  Posts
		this.postReplays = this.postsBlock.reply?this.postsBlock.reply:null//getting post replays
		//console.log("PostLog props", this.postReplays)


	}
	auto_grow = (event) => {
		event.target.style.height = "5px";
		event.target.style.height = (event.target.scrollHeight) + "px";
	}
	addNewPost = () => {
		let textArea = document.querySelector(".body-page__hero-posts-textarea-input")
		let time = new Date().toLocaleTimeString().slice(0, -3)
		let date = new Date().toLocaleDateString()
		let userNik = this.userBase[this.userId].name
		//let dataBase = JSON.parse(testBase)
		let post = {
			"id": "00001",
			"userId": `${this.userId}`,
			"nikName": userNik,
			"dataDate": `${date}`,
			"dataTime": `${time}`,
			"textBody": textArea.value,
			"reply": []
		}
		this.postsBase[this.userId].push(post)
		//dataBase[this.userId].push(post)
		//let newPost = JSON.stringify(dataBase)
		console.log(this.postsBase[this.userId])
	}
	
	render() {
		return (
			<div className="body-page__hero-posts-log">
				<div className="body-page__hero-posts">
					<div className="body-page__hero-posts-title">Add message</div>
					<div className="body-page__hero-posts-textarea">
						<textarea onInput={this.auto_grow} className="body-page__hero-posts-textarea-input" type="text" placeholder="some news?.." />
					</div>
					<div className="body-page__hero-posts-submit">
						<button onClick={this.addNewPost} type="submit" className="blue-btn" id="neon-text">Publish</button>
					</div>
				</div>
				<div className="body-page__hero-posts-logs-wrapper">
					
					{
						this.postsBlock.map((item, index) => (item ? <PostItem
							
							ref={this.child}
							key={Math.floor(Math.random() * 10000)}
							id={this.postsBlock[index].id}
							userId={this.postsBlock[index].userId}
							userBase={this.userBase}
							nikName={this.postsBlock[index].nikName}
							dataDate={this.postsBlock[index].dataDate}
							dataTime={this.postsBlock[index].dataTime}
							textBody={this.postsBlock[index].textBody}
							childReply={this.postsBlock[index].reply}
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