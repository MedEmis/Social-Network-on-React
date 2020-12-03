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
		// this.currentUserId = this.props.bodyState.currentUserId
		// this.state = this.props.bodyState
		//console.log("Body props", this.props)
	}

	render() {
		return (
			<BrowserRouter >
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
								updatePostText={this.props.updatePostText}
								addNewPost={this.props.addNewPost}
								addNewReply={this.props.addNewReply}
								addNewNestedReply={this.props.addNewNestedReply}
								likeIncrementState={this.props.likeIncrementState}
								auto_grow={this.props.auto_grow}
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
	}
}
export default Body;