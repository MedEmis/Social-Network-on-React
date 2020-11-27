import React from 'react'
import { Link, Route } from 'react-router-dom';
import { pageMove } from "./../../../../App.js"
import heroPicture from './../../../../images/avatar.jpeg'
import './dialogs.scss';



class DialogsItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.userProfilePath = {
			pathname: "/src/components/body/page/profile/Profile",
			currentUserId: this.props.currentUserId,
			userBase: this.props.userBase,
			postsBase: this.props.postsBase,
			dialogBase: this.props.dialogBase
		}
		this.userPostsPath = {
			pathname: "/src/components/body/page/postlog/Posts",
			currentUserId: this.props.currentUserId,
			userBase: this.props.userBase,
			postsBase: this.props.postsBase,
			dialogBase: this.props.dialogBase
		}

		//console.log("DialogItem props", this.props)
	}
	deleteItem = (event) => {
		let dialogItem = event.target.parentNode.parentNode
		dialogItem.style.right = "150%"
		setTimeout(() => dialogItem.style.display = "none", 800);
	}

	render() {
		return (
			<div className="dialogs-item">
				<div className="dialogs-item__contact">
					<div className="dialogs-item__avatar">
						<img className="dialog-avatar" src={this.props.opponentPic} alt="heroPicture" />
					</div>
					<div className="dialogs-item__info">
						<div className="dialogs-item__info_name">{this.props.nikName}</div>
						<div className="dialogs-item__info_date">Last time was here: {this.props.lastDate}</div>
						<div className="dialogs-item__info_id"> user id: {this.props.userId}&nbsp;&nbsp;&nbsp;log id: {this.props.dialogItemId}</div>
					</div>
					<div className="dialogs-item__contact_status">{this.props.statusText}</div>
					<div className="dialogs-item__contact_status-color" style={{ background: this.props.status }}></div>
					<div onClick={this.deleteItem} className="dialogs-item__contact_delete-tab"></div>
					<Link
						to={this.userProfilePath}
						onClick={pageMove}
						className="dialogs-item__contact_watch-info "
					></Link>
				</div>
				<div className="dialogs-item__conversations">
					<div className="dialogs-item__avatar">
						<img className="dialog-avatar" src={heroPicture} alt="heroPicture" />
					</div>
					<div className="dialogs-item__avatar">
						<img className="dialog-avatar" src={this.props.opponentPic} alt="heroPicture" />
					</div>
					<div className="dialogs-item__recent-messages">
						<Link
							onClick={pageMove}
							to={this.userPostsPath}
							className="dialogs-item__recent-messages_title"
						>Total messages: &nbsp; <b>{this.props.totalMessages}</b> <span>Open log</span> </Link>
						{this.props.lastMessage}
					</div>
				</div>
			</div >
		);
	}
}
export default DialogsItem;