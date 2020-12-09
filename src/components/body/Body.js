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






class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		//console.log("Body props", this.props)
	}
	render() {
		return (
			<div className="body-main">
				<BodySidebar
					sidebarState={this.props.bodyState}
				/>
				<div className="body-page">
					<span className="body-page_cover"></span>
					<Switch>
						<Route exact path='/src/components/body/page/profile/Profile' render={() =>
							<Profile
								currentUserId={this.props.bodyState.usersReducer.currentUserId}
								userBase={this.props.bodyState.usersReducer.userBase}
							/>
						} />
						{/* <Route exact path='/src/components/body/page/profile/Profile' component={Profile} /> */}
						<Route exact path='/src/components/body/page/postlog/Posts' render={() =>
							<Posts
								currentUserId={this.props.bodyState.usersReducer.currentUserId}
								userBase={this.props.bodyState.usersReducer.userBase}
								postsBase={this.props.bodyState.postsReducer.postsBase}
								currentPostText={this.props.bodyState.postsReducer.currentPostText}
								dispatch={this.props.dispatch}
							/>
						} />
						{/* <Route exact path='/src/components/body/page/profile/Posts' component={Posts} /> */}
						<Route exact path='/src/components/body/page/dialogs/Dialogs' render={() =>
							<Dialogs
								currentUserId={this.props.bodyState.usersReducer.currentUserId}
								userBase={this.props.bodyState.usersReducer.userBase}
								dialogBase={this.props.bodyState.dialogsReducer.dialogBase}
							/>
						} />
						{/* <Route exact path='/src/components/body/page/profile/Dialogs' component={Dialogs} /> */}
						<Route exact path='/src/components/body/page/news/News' render={() =>
							<News
								currentUserId={this.props.bodyState.usersReducer.currentUserId}
							/>
						} />
						<Route exact path='/src/components/body/page/music/Music' render={() =>
							<Music
								currentUserId={this.props.bodyState.usersReducer.currentUserId}
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
}
export default Body;