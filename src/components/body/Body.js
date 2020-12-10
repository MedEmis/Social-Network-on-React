import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SidebarContainer from './sidebar/SidebarContainer';
import PostsContainer from './page/postlog/PostsContainer';
import DialogsContainer from './page/dialogs/DialogsContainer';
import NewsContainer from './page/news/NewsContainer';
import MusicContainer from './page/music/MusicContainer';
import './body.scss';
import ProfileContainer from './page/profile/ProfileContainer';

//СТРАНИЦА, ГДЕ НУЖНО ДЕЛАТЬ РОУТИНГ ДЛЯ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ СТРАНИЦАМИ С ПОМОЩЬЮ NAV






function Body(props) {
	//console.log("Body props",     props)
	return (
		<div className="body-main">
			<SidebarContainer />
			<div className="body-page">
				<span className="body-page_cover"></span>
				<Switch>
					<Route exact path='/src/components/body/page/profile/Profile' component={ProfileContainer} />
					<Route exact path='/src/components/body/page/postlog/Posts' component={PostsContainer} />
					<Route exact path='/src/components/body/page/dialogs/Dialogs' component={DialogsContainer} />
					<Route exact path='/src/components/body/page/news/News' component={NewsContainer} />
					<Route exact path='/src/components/body/page/music/Music' component={MusicContainer} />
				</Switch>
				{/* way 1 <Route exact path='/src/components/body/page/profile/Profile' component={Profile} /> */}
				{/* way 2 <Route exact path='/src/components/body/page/news/News'> <Componet someProps={...} /> </Route> */}
				{/* way 3 <Route exact path='/src/components/body/page/postlog/Posts' render={()=> <Posts someProps={...} />} /> */}
			</div>
		</div>
	);
}
export default Body;