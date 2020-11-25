import React from 'react'
import './dialogs.scss';
import DialogsItem from './DialogsItem';
import opponentPicture from './../../../../images/opponent.jpeg'




class Dialogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nikName: "Nameaname",
			lastDate: new Date().toLocaleDateString(),
			isOnline: false,
			totalMessages: 30,
			lastMessage: 'Lorem ipsum dolor sit amet consecte tIste dolore quasi iure eius incidunt expedita sus',
			opponentPic: opponentPicture,
			dialogItemId: Math.floor(Math.random() * 1000000)
		};
	}
	render() {
		return (
			<>
				<div className="dialogs__wrapper">
					<div className="dialogs__title">Your contacts and recent conversations</div>
					<DialogsItem nikName={this.state.nikName} lastDate={this.state.lastDate} statusText={this.state.isOnline ? "Online" : "Offline"} status={this.state.isOnline ? "green" : "red"}
						totalMessages={this.state.totalMessages} lastMessage={this.state.lastMessage} opponentPic={this.state.opponentPic} dialogItemId={this.state.dialogItemId} />
					<DialogsItem nikName={this.state.nikName} lastDate={this.state.lastDate} statusText={this.state.isOnline ? "Online" : "Offline"} status={this.state.isOnline ? "green" : "red"}
						totalMessages={this.state.totalMessages} lastMessage={this.state.lastMessage} opponentPic={this.state.opponentPic} dialogItemId={this.state.dialogItemId} />
					<DialogsItem nikName={this.state.nikName} lastDate={this.state.lastDate} statusText={this.state.isOnline ? "Online" : "Offline"} status={this.state.isOnline ? "green" : "red"}
						totalMessages={this.state.totalMessages} lastMessage={this.state.lastMessage} opponentPic={this.state.opponentPic} dialogItemId={this.state.dialogItemId} />
					<DialogsItem nikName={this.state.nikName} lastDate={this.state.lastDate} statusText={this.state.isOnline ? "Online" : "Offline"} status={this.state.isOnline ? "green" : "red"}
						totalMessages={this.state.totalMessages} lastMessage={this.state.lastMessage} opponentPic={this.state.opponentPic} dialogItemId={this.state.dialogItemId} />
				</div>
			</>
		);
	}
}
export default Dialogs;