import React from 'react'
import { Switch, Route,BrowserRouter } from 'react-router-dom'
import BodySidebar from './sidebar/BodySidebar';
import Profile from './page/profile/Profile';
import Posts from './page/postlog/Posts';
import Dialogs from './page/dialogs/Dialogs';
import News from './page/news/News';
import Music from './page/music/Music';
import './body.scss';
import Authorization from './page/profile/Autorization';
import Registration from './page/profile/Registration';

//СТРАНИЦА, ГДЕ НУЖНО ДЕЛАТЬ РОУТИНГ ДЛЯ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ СТРАНИЦАМИ С ПОМОЩЬЮ NAV






class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		//console.log("Body props", this.props)
	}

	render() {
		if (this.props.bodyState.currentUserId) {
			return (
				<BrowserRouter>
					<div className="body-main">
						<BodySidebar
							sidebarState={this.props.bodyState}
						/>
						<div className="body-page">
							<span className="body-page_cover"></span>
							<Route exact path='/src/components/body/page/profile/Profile' render={() =>
								<Profile
									currentUserId={this.props.bodyState.currentUserId}
									userBase={this.props.bodyState.userBase}
									postsBase={this.props.bodyState.postsBase}
								/>
							} />
							{/* <Route exact path='/src/components/body/page/profile/Profile' component={Profile} /> */}
							<Route exact path='/src/components/body/page/postlog/Posts' render={() =>
								<Posts
									currentUserId={this.props.bodyState.currentUserId}
									userBase={this.props.bodyState.userBase}
									postsBase={this.props.bodyState.postsBase}
									currentPostText={this.props.bodyState.currentPostText}
									dispatch={this.props.dispatch}
								/>
							} />
							{/* <Route exact path='/src/components/body/page/profile/Posts' component={Posts} /> */}
							<Route exact path='/src/components/body/page/dialogs/Dialogs' render={() =>
								<Dialogs
									currentUserId={this.props.bodyState.currentUserId}
									userBase={this.props.bodyState.userBase}
									dialogBase={this.props.bodyState.dialogBase}
								/>
							} />
							{/* <Route exact path='/src/components/body/page/profile/Dialogs' component={Dialogs} /> */}
							<Route exact path='/src/components/body/page/news/News' render={() =>
								<News
									currentUserId={this.props.bodyState.currentUserId}
								/>
							} />
							<Route exact path='/src/components/body/page/music/Music' render={() =>
								<Music
									currentUserId={this.props.bodyState.currentUserId}
								/>
							} />
							{/* way 1 <Route exact path='/src/components/body/page/profile/Profile' component={Profile} /> */}
							{/* way 2 <Route exact path='/src/components/body/page/news/News'> <Componet someProps={...} /> </Route> */}
							{/* way 3 <Route exact path='/src/components/body/page/postlog/Posts' render={()=> <Posts someProps={...} />} /> */}
						</div>
					</div>
				</BrowserRouter>
			);
		} else {
			return (
				<BrowserRouter>
					<div className="body-main">
						<Switch>
							<Route exact path='/' render={() =>
								<div className="body-page">
									<span className="body-page_cover"></span>
									<Authorization dispatch={this.props.dispatch} />
								</div>
							} />
							<Route exact path='/registration' render={() =>
								<div className="body-page">
									<span className="body-page_cover"></span>
									<Registration dispatch={this.props.dispatch} />
								</div>
							} />
						</Switch>
					</div>
				</BrowserRouter>
			)
		}
	}
}
export default Body;