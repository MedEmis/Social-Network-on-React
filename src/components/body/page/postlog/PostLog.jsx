import React from 'react'
import './postLog.scss';
import './makeMessage.css';
import PostItem from './PostItem';
let classNames = require('classnames');




class PostLog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			IsTextOpen: false
		};
		console.table(this.state.posts)
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
	showTextarea = () => {
		this.setState({
			IsTextOpen: true
		})
		
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
						<textarea onInput={this.auto_grow} className="body-page__reply-textarea-input" type="text" defaultValue={`Answer to ${this.state.posts.userNik}:`} />
						<div className="body-page__reply-textarea-buttons">
							<button onClick={this.hideTextarea} type="submit" className="red-btn" id="neon-text">Close</button>
							<button onClick={() => this.refs.child.toReply()} type="submit" className="blue-btn" id="neon-text">Publish</button>
						</div>
					</div>
					{
						this.state.posts.map((item) => (item ? <PostItem ref="child" key={Math.floor(Math.random() * 10000)}
							replyFunc={() => this.showTextarea()} closeFunc={() => this.hideTextarea()}
							nikName={item.nikName} dataDate={item.dataDate} dataTime={item.dataTime} textBody={item.textBody} /> : null))
					}
				</div>
			</div>
		);
	}
}
export default PostLog;

// className={classNames(" body-page__reply-textarea", { " visible": this.state.IsTextOpen })}