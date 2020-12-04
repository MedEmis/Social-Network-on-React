import React from 'react'
import './profile.scss';

class HeroContacts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.contactPicture = this.props.contactPicture
		this.contactName = this.props.contactName
		this.userBase = this.props.userBase
		this.userId = this.props.userId
		// this.imageBase =
		//console.log(picBase)

	}

	render() {
		return (
			<div className="body-page__hero-contacts">
				<div className="body-page__hero-contacts_title">MY FRENDS</div>
				<div className="body-page__hero-contacts_wrapper">{
					this.userBase[this.userId].contacts.map((item) => (item
						? <div className="body-page__hero-contacts_item" key={Math.floor(Math.random() * 10000)}>
							<img src={this.userBase[item].avatarUrl}
								alt="contactPicture" className="body-page__hero-contacts_picture"></img>
							<div className="body-page__hero-contacts_status"
								style={{ background: this.userBase[item].isOnline ? "green" : "red" }}></div>
							<div className="body-page__hero-contacts_name">{this.userBase[item].name}</div>
							{/* {console.log(`./images/avatars/${this.userBase[item].avatarUrl}`)} */}
							{/* <img src={require('/images/image-name.png')}/> */}
						</div> : null))
				}</div>

			</div>
		);
	}
}
export default HeroContacts;