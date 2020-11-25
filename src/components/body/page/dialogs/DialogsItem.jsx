import React from 'react'
import './dialogs.scss';
import heroPicture from './../../../../images/avatar.jpeg'
import { NavLink } from 'react-router-dom';



class DialogsItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
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
						<div className="dialogs-item__info_id">log id: { this.props.dialogItemId}</div>
					</div>
					<div className="dialogs-item__contact_status">{this.props.statusText}</div>
					<div className="dialogs-item__contact_status-color" style={{ background: this.props.status }}></div>
					<div onClick={this.deleteItem} className="dialogs-item__contact_delete-tab"></div>
					<NavLink to="/src/components/body/page/profile/Profile.jsx/1" className="dialogs-item__contact_watch-info "></NavLink>
					
				</div>
				<div className="dialogs-item__conversations">
					<div className="dialogs-item__avatar">
						<img className="dialog-avatar" src={heroPicture} alt="heroPicture" />
					</div>
					<div className="dialogs-item__avatar">
						<img className="dialog-avatar" src={this.props.opponentPic} alt="heroPicture" />
					</div>
					<div className="dialogs-item__recent-messages">
						<NavLink to="/src/components/body/page/postlog/Posts.js" className="dialogs-item__recent-messages_title">Recent messages: &nbsp; <b>{this.props.totalMessages}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check</NavLink>
						{this.props.lastMessage}
					</div>
				</div>
			</div>
		);
	}
}
export default DialogsItem;