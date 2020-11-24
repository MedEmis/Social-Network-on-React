import React from 'react'
import './body.css';
import BodySidebar from './sidebar/BodySidebar';
import Posts from './page/postlog/Posts';
import Profile from './page/profile/Profile';
import Dialogs from './page/dialogs/Dialogs';

//СТРАНИЦА, ГДЕ НУЖНО ДЕЛАТЬ РОУТИНГ ДЛЯ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ СТРАНИЦАМИ С ПОМОЩЬЮ NAV

class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="body-main">
				<BodySidebar/>
				{/* <Posts/> */}
				<Dialogs/>
				{/* <Profile/> */}
			</div>
		);
	}
}
export default Body;