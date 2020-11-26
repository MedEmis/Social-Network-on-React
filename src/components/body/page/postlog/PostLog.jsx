import React from 'react'
import './postLog.scss';
import './makeMessage.css';
import PostItem from './PostItem';
import postsBase from './../../../../posts.json'

let classNames = require('classnames');




class PostLog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			IsTextOpen: false
		};
		this.postsBase = postsBase.posts
		this.child = React.createRef();
		console.log('postLog ', postsBase)

	}
	auto_grow = (event) => {
		event.target.style.height = "5px";
		event.target.style.height = (event.target.scrollHeight) + "px";
	}
	addNewPost = () => {
		let textArea = document.querySelector(".body-page__hero-posts-textarea-input")
		let time = new Date().toLocaleTimeString().slice(0, -3)
		let date = new Date().toLocaleDateString()
		let userNik = this.props.name
		this.setState({
			posts: [...this.state.posts, {
				nikName: userNik,
				dataDate: `${date}`,
				dataTime: `${time}`,
				textBody: textArea.value
			}],
		});

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
						this.postsBase.map((item, index) => (item ? <PostItem
							replyFunc={() => this.showTextarea()}
							closeFunc={() => this.hideTextarea()}
							ref={this.child}
							key={Math.floor(Math.random() * 10000)}
							id={this.postsBase[index].id}
							nikName={this.postsBase[index].props.nikName}
							dataDate={this.postsBase[index].props.dataDate}
							dataTime={this.postsBase[index].props.dataTime}
							textBody={this.postsBase[index].props.textBody}
							childReply = {this.postsBase[index].props.reply}
						/> : null))
					}
				</div>
			</div>
		);
	}
}
export default PostLog;

// className={classNames(" body-page__reply-textarea", { " visible": this.state.IsTextOpen })}