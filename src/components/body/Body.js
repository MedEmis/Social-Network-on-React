import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BodySidebar from './sidebar/BodySidebar';
import Profile from './page/profile/Profile';
import Posts from './page/postlog/Posts';
import Dialogs from './page/dialogs/Dialogs';
import News from './page/news/News';
import Music from './page/music/Music';
import './body.scss';

//СТРАНИЦА, ГДЕ НУЖНО ДЕЛАТЬ РОУТИНГ ДЛЯ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ СТРАНИЦАМИ С ПОМОЩЬЮ NAV






class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<BrowserRouter >
				<div className="body-main">
					<BodySidebar />
					<div className="body-page">
						<span className="body-page_cover"></span>
						<Route exact path='/src/components/body/page/profile/Profile' component={Profile} />
						<Route exact path='/src/components/body/page/postlog/Posts' component={Posts} />
						<Route exact path='/src/components/body/page/dialogs/Dialogs' component={Dialogs} />
						<Route exact path='/src/components/body/page/news/News' component={News} />
						<Route exact path='/src/components/body/page/music/Music' component={Music} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}
export default Body;