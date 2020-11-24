import React from 'react'
import './dialogs.scss';
import heroPicture from './../../../images/avatar.jpeg'



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
					<div className="dialogs-item__info">Name Name</div>





					<div className="dialogs-item__contact_status">Online</div>
					<div className="dialogs-item__contact_status-color"></div>
				</div>
				<div className="dialogs-item__conversations">
					<div className="dialogs-item__avatar">
						<img className="dialog-avatar" src={heroPicture} alt="heroPicture" />
					</div>
					<div className="dialogs-item__avatar">
						<img className="dialog-avatar" src={heroPicture} alt="heroPicture" />
					</div>

				</div>
			</div>
		);
	}
}
export default DialogsItem;