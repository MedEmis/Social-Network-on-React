import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BodySidebar from './sidebar/BodySidebar';
import Profile from './page/profile/Profile';
import Posts from './page/postlog/Posts';
import Dialogs from './page/dialogs/Dialogs';
import News from './page/news/News';
import Music from './page/music/Music';
import './body.scss';

//СТРАНИЦА, ГДЕ НУЖНО ДЕЛАТЬ РОУТИНГ ДЛЯ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ СТРАНИЦАМИ С ПОМОЩЬЮ NAV






function Body(props) {
	//console.log("Body props",     props)
	return (
		<div className="body-main">
			<BodySidebar
				sidebarState={props.bodyState}
			/>
			<div className="body-page">
				<span className="body-page_cover"></span>
				<Switch>
					<Route exact path='/src/components/body/page/profile/Profile' render={() =>
						<Profile
							currentUserId={props.bodyState.usersReducer.currentUserId}
							userBase={props.bodyState.usersReducer.userBase}
						/>
					} />
					{/* <Route exact path='/src/components/body/page/profile/Profile' component={Profile} /> */}
					<Route exact path='/src/components/body/page/postlog/Posts' render={() =>
						<Posts
							currentUserId={props.bodyState.usersReducer.currentUserId}
							userBase={props.bodyState.usersReducer.userBase}
							postsBase={props.bodyState.postsReducer.postsBase}
							currentPostText={props.bodyState.postsReducer.currentPostText}
							dispatch={props.dispatch}
						/>
					} />
					{/* <Route exact path='/src/components/body/page/profile/Posts' component={Posts} /> */}
					<Route exact path='/src/components/body/page/dialogs/Dialogs' render={() =>
						<Dialogs
							currentUserId={props.bodyState.usersReducer.currentUserId}
							userBase={props.bodyState.usersReducer.userBase}
							dialogBase={props.bodyState.dialogsReducer.dialogBase}
						/>
					} />
					{/* <Route exact path='/src/components/body/page/profile/Dialogs' component={Dialogs} /> */}
					<Route exact path='/src/components/body/page/news/News' render={() =>
						<News
							currentUserId={props.bodyState.usersReducer.currentUserId}
						/>
					} />
					<Route exact path='/src/components/body/page/music/Music' render={() =>
						<Music
							currentUserId={props.bodyState.usersReducer.currentUserId}
						/>
					} />
				</Switch>
				{/* way 1 <Route exact path='/src/components/body/page/profile/Profile' component={Profile} /> */}
				{/* way 2 <Route exact path='/src/components/body/page/news/News'> <Componet someProps={...} /> </Route> */}
				{/* way 3 <Route exact path='/src/components/body/page/postlog/Posts' render={()=> <Posts someProps={...} />} /> */}
			</div>
		</div>
	);
}
export default Body;