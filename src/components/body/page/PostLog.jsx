import React from 'react'
import './postLog.css';
import './makeMessage.css';
import PostItem from './PostItem';




class PostLog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
		console.log(this.state.posts)
	}
	auto_grow = (event) => {
		event.target.style.height = "5px";
		event.target.style.height = (event.target.scrollHeight) + "px";
	}
	addNewPost = () => {
		let textArea = document.querySelector(".body-page__hero-posts-textarea-input")
		let today = new Date()
		let hours = today.getHours()
		let minutes = today.getMinutes()
		let day = today.getDate()
		let month = today.getMonth() + 1
		let year = today.getUTCFullYear()
		let userNik = 'User  000'
		this.setState(function () {
			return this.state.posts.push(
				{
					nikName: userNik,
					dataDate: `${day}.${month}.${year}`,
					dataTime: `${hours}:${minutes}`,
					textBody: textArea.value
				}
			)
		});
		console.log(this.state.posts)
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
						this.state.posts.map((item) => (item ? <PostItem key={Math.floor(Math.random() * 10000)} nikName={item.nikName} dataDate={item.dataDate} dataTime={item.dataTime} textBody={item.textBody} /> : null))
					}
				</div>
			</div>
		);
	}
}
export default PostLog;