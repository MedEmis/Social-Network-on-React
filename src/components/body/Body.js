import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BodySidebar from './sidebar/BodySidebar';
import Profile from './page/profile/Profile';
import Posts from './page/postlog/Posts';
import Dialogs from './page/dialogs/Dialogs';
import './body.css';

//СТРАНИЦА, ГДЕ НУЖНО ДЕЛАТЬ РОУТИНГ ДЛЯ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ СТРАНИЦАМИ С ПОМОЩЬЮ NAV

class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<BrowserRouter>
				<div className="body-main">
					<BodySidebar />
					<>
						<Route exact path='/src/components/body/page/profile/Profile.jsx' component={Profile} />
						<Route exact path='/src/components/body/page/postlog/Posts.js' component={Posts} />
						<Route exact path='/src/components/body/page/dialogs/Dialogs.jsx' component={Dialogs} />
					</>
				</div>
			</BrowserRouter>
		);
	}
}
export default Body;