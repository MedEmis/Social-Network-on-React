import React from 'react'
import './dialogs.scss';
import heroPicture from './../../../../images/avatar.jpeg'
import { NavLink } from 'react-router-dom';



class DialogsItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="dialogs-item">
				<div className="dialogs-item__contact">
					<div className="dialogs-item__avatar">
						<img className="dialog-avatar" src={heroPicture} alt="heroPicture" />
					</div>
					<div className="dialogs-item__info">
						<div className="dialogs-item__info">Name Name</div>
						<div className="dialogs-item__info">Last time was here: 00.00.00</div>
					</div>
					<div className="dialogs-item__contact_status">{'Offline'}</div>
					<div className="dialogs-item__contact_status-color"></div>
					<div className="dialogs-item__contact_delete-tab"></div>
					<NavLink to="/src/components/body/page/profile/Profile.jsx/1" className="dialogs-item__contact_watch-info "></NavLink>
				</div>
				<div className="dialogs-item__conversations">
					<div className="dialogs-item__avatar">
						<img className="dialog-avatar" src={heroPicture} alt="heroPicture" />
					</div>
					<div className="dialogs-item__avatar">
						<img className="dialog-avatar" src={heroPicture} alt="heroPicture" />
					</div>
					<div className="dialogs-item__recent-messages">
						<NavLink to="/src/components/body/page/postlog/Posts.js" className="dialogs-item__recent-messages_title">Recent messages: &nbsp; <b>{45}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check</NavLink>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi aperiam, alias temporibus optio molestias tempora odio? Consectetur voluptatum, quisquam harum, quae aperiam quidem ad, molestias officia beatae sequi nesciunt!
Iste dolore quasi iure eius incidunt expedita sus
					</div>
				</div>
			</div>
		);
	}
}
export default DialogsItem;