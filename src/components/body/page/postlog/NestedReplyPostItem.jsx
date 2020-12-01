import React from 'react'
import './postItem.scss';
let classNames = require('classnames');




class NestedReplyPostItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVoted: false,
			like: 0,
			dislike: 0,
			IsTextOpen: false,
			postsBlock: props.childReply
		};

		//console.log('postItemNestedReply ', typeof (this.props.childReply))
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
	auto_grow = (event) => {
		event.target.style.height = "5px";
		event.target.style.height = (event.target.scrollHeight) + "px";
	}
	render() {
		return (
			<>
				<div className="hero-posts-log-item nested-reply">
					<img className="hero-posts-log-item_avatar" src={this.props.userBase[this.props.userId].avatarUrl} alt="avatar" />
					<div className="hero-posts-log-item__title">
						<div className="hero-posts-log-item__title-from">From: {!this.props.nikName ? " Anonymous" : this.props.nikName}</div>
						<div className="hero-posts-log-item__title-date">{this.props.userId}&nbsp;&nbsp;&nbsp;Date: {!this.props.dataDate ? "--.--.--" : this.props.dataDate}  /   At: {!this.props.dataTime ? "--:--" : this.props.dataTime}</div>
						<div className="hero-posts-log-item__title-log-id">log id: {this.props.id}</div>
					</div>
					<div className="hero-posts-log-item__body">
						<div className="hero-posts-log-item__body-text">{!this.props.textBody ? "...no text" : this.props.textBody}</div>
						<div className="hero-posts-log-item__body-special">
							<ul className="hero-posts-log-item__body-special-list" id="nestedReply">
								<li className="hero-posts-log-item__body-special-item tooltip">{this.state.like}<span className="tooltiptext">Likes</span></li>
								<li className="hero-posts-log-item__body-special-item tooltip">{this.state.dislike}<span className="tooltiptext">Dislikes</span></li>
								<li onClick={(event) => {
									this.props.likeIncrementState(event)
								}} className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Up</span></li>
								<li onClick={this.likeDecrement} className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Thumbs Down</span></li>
								<li className="hero-posts-log-item__body-special-item tooltip"><span className="tooltiptext">Feature 4</span></li>
							</ul>
						</div>
					</div>
					{/* <button onClick={() => this.setState({ IsTextOpen: true })} type="submit" className="hero-posts-log-item__button-reply">Reply</button> */}
					<div className={classNames(" body-page__reply-textarea", { " visible": this.state.IsTextOpen })}>
						{/* <textarea onInput={this.auto_grow} className="body-page__reply-textarea-input" type="text" defaultValue={`Answer to ${this.props.nikName}:`} />
						<div className="body-page__reply-textarea-buttons">
							<button onClick={() => this.setState({ IsTextOpen: false })} type="submit" className="red-btn" id="neon-text">Close</button>
							<button onClick={(event) => {
								this.props.nestReplyFunc(
									this.props.userId,
									this.props.initialUser,
									this.props.initialPost,
									this.props.id,
									this.props.userBase[this.props.userId].name,
									event
								)
								this.setState({ IsTextOpen: false })
								this.setState({ refresh: true })
							}
							} type="submit" className="blue-btn" id="neon-text">Publish</button>
						</div> */}
					</div>
				</div>
				{/* <div className="body-page__hero-posts-log-nested-reply-wrapper">
					{
						(this.state.postsBlock !== undefined && this.state.postsBlock !== null)
							? this.state.postsBlock.map((item, index) => (item ? <NestedReplyPostItem
								ref={this.child}
								key={Math.floor(Math.random() * 10000)}
								id={this.state.postsBlock[index].id}
								userId={this.state.postsBlock[index].userId}
								userBase={this.props.userBase}
								nikName={this.state.postsBlock[index].nikName}
								dataDate={this.state.postsBlock[index].dataDate}
								dataTime={this.state.postsBlock[index].dataTime}
								textBody={this.state.postsBlock[index].textBody}
								childReply={this.state.postsBlock[index].nestedReply}
								nestReplyFunc={this.props.nestReplyFunc}
								auto_growFunc={this.props.auto_growFunc}
							/> : null))
							: null
					}

				</div> */}
			</>
		);
	}
}
export default NestedReplyPostItem;