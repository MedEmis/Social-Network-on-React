import React from 'react'
import './postItem.scss';




class NestedReplyPostItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVouted: false,
			like: 0,
			dislike: 0,
		};

		// console.log('postItemNestedReply ', typeof (this.props.childReply))
	}
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
	toNestReply = () => {
		let textArea = document.querySelector(".body-page__hero-posts-textarea-input")
		let time = new Date().toLocaleTimeString().slice(0, -3)
		let date = new Date().toLocaleDateString()
		let userNik = this.props.name
		this.setState({
			nestedReplyLog: [...this.state.nestedReplyLog, {
				nikName: userNik,
				dataDate: `${date}`,
				dataTime: `${time}`,
				textBody: textArea.value
			}]
		});
	}
	render() {
		return (
			<>
				<div className="hero-posts-log-item nested-reply">
					<div className="hero-posts-log-item__title">
						<div className="hero-posts-log-item__title-from">From: {!this.props.nikName ? " Anonymous" : this.props.nikName}</div>
						<div className="hero-posts-log-item__title-date">Id: {this.props.id}&nbsp;&nbsp;&nbsp;Date: {!this.props.dataDate ? "--.--.--" : this.props.dataDate}  /   At: {!this.props.dataTime ? "--:--" : this.props.dataTime}</div>
					</div>
					<div className="hero-posts-log-item__body">
						<div className="hero-posts-log-item__body-text">{!this.props.textBody ? "...no text" : this.props.textBody}</div>
						<div className="hero-posts-log-item__body-special">
							<ul className="hero-posts-log-item__body-special-list" id="nestedReply">
								<li className="hero-posts-log-item__body-special-item tooltip">{this.state.like}<span className="tooltiptext">Likes</span></li>
								<li className="hero-posts-log-item__body-special-item tooltip">{this.state.dislike}<span className="tooltiptext">Dislikes</span></li>
								<li onClick={this.likeIncrement} className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Up</span></li>
								<li onClick={this.likeDecrement} className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Down</span></li>
								<li className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Feature 4</span></li>
							</ul>
						</div>
					</div>
					<button onClick={this.toNestReply} type="submit" className="hero-posts-log-item__button-reply">Reply</button>
				</div>
				<div className="body-page__hero-posts-log-nested-reply-wrapper">
					{/* {
						this.reply.map((item, index) => (item ? <NestedReplyPostItem
							key={Math.floor(Math.random() * 10000)}
							id={this.reply[index].id}
							nikName={this.reply[index].props.nikName}
							dataDate={this.reply[index].props.dataDate}
							dataTime={this.reply[index].props.dataTime}
							textBody={this.reply[index].props.textBody}
						/> : null))
					} */}
				</div>
			</>
		);
	}
}
export default NestedReplyPostItem;