import React from 'react'
import './makeMessage.css';
import PostItem from './PostItem';
let classNames = require('classnames');
//import testBase from "./../../../../testsss.json"



class PostLog extends React.Component {
	constructor(props) {
		super(props);
		this.child = React.createRef();
		this.state = {
			IsTextOpen: false
		};
		this.userBase = this.props.userBase
		this.userId = this.props.userId
		this.postsBase = this.props.postsBase
		this.postsBlock = this.postsBase[this.userId]//getting block of  Posts
		this.postReplays = this.postsBlock[0].reply//getting post replays
		console.log("PostLog props", this.postReplays)


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
		 //let dataBase = JSON.parse(this.postsBase)
		// let post = {
		// 	"id": "00001",
		// 	"userId": `${this.userId}`,
		// 	"nikName": userNik,
		// 	"dataDate": `${date}`,
		// 	"dataTime": `${time}`,
		// 	"textBody": textArea.value,
		// 	"reply": []
		// }
		// dataBase[this.userId].push(post)
		// let newPost = JSON.stringify(dataBase)
		// // console.log(dataBase[this.userId])

	}
	showTextarea = (event) => {
		this.setState({
			IsTextOpen: true
		})
		let textArea = document.querySelector(".body-page__reply-textarea-input")
		textArea.defaultValue = `Answer to ${this.child.current.props.nikName}:`//assigning name of person who we answer to
	}
	hideTextarea = () => {
		this.setState({
			IsTextOpen: false
		})
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
					<div className={classNames(" body-page__reply-textarea", { " visible": this.state.IsTextOpen })}>
						<textarea onInput={this.auto_grow} className="body-page__reply-textarea-input" type="text" />
						<div className="body-page__reply-textarea-buttons">
							<button onClick={this.hideTextarea} type="submit" className="red-btn" id="neon-text">Close</button>
							<button onClick={() => this.child.current.toReply()} type="submit" className="blue-btn" id="neon-text">Publish</button>
						</div>
					</div>
					{
						this.postsBlock.map((item, index) => (item ? <PostItem
							replyFunc={() => this.showTextarea()}
							closeFunc={() => this.hideTextarea()}
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