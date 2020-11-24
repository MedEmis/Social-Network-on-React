import React from 'react'
import './dialogs.scss';
import DialogsItem from './DialogsItem';



class Dialogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="dialogs__wrapper">
				<div className="dialogs__title"></div>
				<DialogsItem/>
				<DialogsItem/>
				<DialogsItem/>
				<DialogsItem/>

			</div>
		);
	}
}
export default Dialogs;