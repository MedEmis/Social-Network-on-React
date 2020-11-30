import React from 'react'
import './postItem.scss';
import ReplyPostItem from './ReplyPostItem';
let classNames = require('classnames');





class PostItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVoted: false,
			like: 0,
			dislike: 0,
			IsTextOpen: false

		};
		this.child = React.createRef();
		this.reply = this.props.childReply
		this.userId = this.props.userId
		this.userBase = this.props.userBase
		//console.log('postItem ', this.props)

	}
	likeIncrement = (event) => {
		let elemPanel = event.target.parentNode
		this.setState({
			like: this.state.like + 1,
			isVoted: true
		})
		this.state.dislike > this.state.like ? elemPanel.style.background = 'rgb(163, 4, 4)' : elemPanel.style.background = 'rgb(47, 110, 10)'
	}
	likeDecrement = (event) => {
		let elemPanel = event.target.parentNode
		this.setState({
			dislike: this.state.dislike + 1,
			isVoted: true
		})
		this.state.dislike > this.state.like ? elemPanel.style.background = 'rgb(163, 4, 4)' : elemPanel.style.background = 'rgb(47, 110, 10)'
	}
	toReply = (event) => {
		let textArea = document.querySelector(".body-page__reply-textarea-input")
		// let time = new Date().toLocaleTimeString().slice(0, -3)
		// let date = new Date().toLocaleDateString()
		// let userNik = this.props.name
		// this.setState({
		// 	replyLog: [...this.state.replyLog, {
		// 		nikName: userNik,
		// 		dataDate: `${date}`,
		// 		dataTime: `${time}`,
		// 		textBody: textArea.value
		// 	}],
		// });
		//console.table(this.event)
		setTimeout(() => {
			this.setState({ IsTextOpen: false })
			textArea.value = ''
		}, 500);
	}
	auto_grow = (event) => {
		event.target.style.height = "5px";
		event.target.style.height = (event.target.scrollHeight) + "px";
	}

	render() {
		return (
			<div className="posts-log-item-wrapper">
				<div className="hero-posts-log-item">
					<img className="hero-posts-log-item_avatar" src={this.userBase[this.userId].avatarUrl} alt="avatar" />
					<div className="hero-posts-log-item__title">
						<div className="hero-posts-log-item__title-from">From: {!this.props.nikName ? " Anonymous" : this.props.nikName}</div>
						<div className="hero-posts-log-item__title-date">{this.userId}&nbsp;&nbsp;&nbsp;Date: {!this.props.dataDate ? "--.--.--" : this.props.dataDate}  /   At: {!this.props.dataTime ? "--:--" : this.props.dataTime}</div>
					</div>
					<div className="hero-posts-log-item__body">
						<div className="hero-posts-log-item__body-text">{!this.props.textBody ? "...no text" : this.props.textBody}</div>
						<div className="hero-posts-log-item__body-special">
							<ul className="hero-posts-log-item__body-special-list" >
								<li className="hero-posts-log-item__body-special-item tooltip">{this.state.like}<span className="tooltiptext">Likes</span></li>
								<li className="hero-posts-log-item__body-special-item tooltip">{this.state.dislike}<span className="tooltiptext">Dislikes</span></li>
								<li onClick={this.likeIncrement} className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Up</span></li>
								<li onClick={this.likeDecrement} className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Down</span></li>
								<li className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Feature 4</span></li>
							</ul>
						</div>
					</div>
					<button onClick={() => this.setState({ IsTextOpen: true })} type="submit" className="hero-posts-log-item__button-reply">Reply</button>
					<div className={classNames(" body-page__reply-textarea", { " visible": this.state.IsTextOpen })}>
						<textarea onInput={this.auto_grow} className="body-page__reply-textarea-input" type="text" defaultValue={`Answer to ${this.props.nikName}:`} />
						<div className="body-page__reply-textarea-buttons">
							<button onClick={() => this.setState({ IsTextOpen: false })} type="submit" className="red-btn" id="neon-text">Close</button>
							<button onClick={this.toReply} type="submit" className="blue-btn" id="neon-text">Publish</button>
						</div>
					</div>
				</div>
				<div className="hero-posts-log-reply-wrapper">
					{
						this.reply.map((item, index) => (item ? <ReplyPostItem
							ref={this.child}
							key={Math.floor(Math.random() * 10000)}
							id={this.reply[index].id}
							userId={this.reply[index].userId}
							userBase={this.userBase}
							nikName={this.reply[index].nikName}
							dataDate={this.reply[index].dataDate}
							dataTime={this.reply[index].dataTime}
							textBody={this.reply[index].textBody}
							childReply={this.reply[index].nestedReply}
						/> : null))
					}
				</div>
			</div>
		);
	}
}
export default PostItem;