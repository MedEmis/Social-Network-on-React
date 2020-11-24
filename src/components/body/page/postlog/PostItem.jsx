import React from 'react'
import './postItem.scss';
import ReplyPostItem from './ReplyPostItem';





class PostItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVouted: false,
			like: 0,
			dislike: 0,
			replyLog: [],
			// replyLogStorage: []
		};


	}
	//replyLogStorage = []
	likeIncrement = (event) => {
		let elemPanel = event.target.parentNode
		this.setState({
			like: this.state.like + 1,
			isVouted: true
		})
		this.state.dislike > this.state.like ? elemPanel.style.background = 'rgb(163, 4, 4)' : elemPanel.style.background = 'rgb(47, 110, 10)'
	}
	likeDecrement = (event) => {
		let elemPanel = event.target.parentNode
		this.setState({
			dislike: this.state.dislike + 1,
			isVouted: true
		})
		this.state.dislike > this.state.like ? elemPanel.style.background = 'rgb(163, 4, 4)' : elemPanel.style.background = 'rgb(47, 110, 10)'
	}
	toReply = () => {
		let textArea = document.querySelector(".body-page__reply-textarea-input")
		let time = new Date().toLocaleTimeString().slice(0, -3)
		let date = new Date().toLocaleDateString()
		let userNik = this.props.name
		this.setState({
			replyLog: [...this.state.replyLog, {
				nikName: userNik,
				dataDate: `${date}`,
				dataTime: `${time}`,
				textBody: textArea.value
			}],
		});
		console.table(this.state)
		setTimeout(() => {
			//this.props.closeFunc()
			textArea.value = ''
		}, 1500);
	}

	render() {
		return (
			<div className="posts-log-item-wrapper">
				<div className="hero-posts-log-item">
					<div className="hero-posts-log-item__title">
						<div className="hero-posts-log-item__title-from">From: {!this.props.nikName ? " Anonymous" : this.props.nikName}</div>
						<div className="hero-posts-log-item__title-date">Date: {!this.props.dataDate ? "--.--.--" : this.props.dataDate}  /   At: {!this.props.dataTime ? "--:--" : this.props.dataTime}</div>
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
					<button onClick={() => this.props.replyFunc()} type="submit" className="hero-posts-log-item__button-reply">Reply</button>
				</div>
				<div className="hero-posts-log-reply-wrapper">
					{
						this.state.replyLog.map((item) => (item ? <ReplyPostItem key={Math.floor(Math.random() * 10000)} nikName={item.nikName} dataDate={item.dataDate} dataTime={item.dataTime} textBody={item.textBody} /> : null))
					}
					{/* Makes eny item of storage to component with props */}
				</div>
			</div>
		);
	}
}
export default PostItem;