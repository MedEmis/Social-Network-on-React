import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import SidebarContainer from './sidebar/SidebarContainer';
import PostsContainer from './page/postlog/PostsContainer';
import DialogsContainer from './page/dialogs/DialogsContainer';
import MusicContainer from './page/music/MusicContainer';
import './body.scss';
import ProfileContainer from './page/profile/ProfileContainer';
import Loader from './Loader';
const PublicUserPageContainer = React.lazy(() => import('./page/UserPage/PublicUserPageContainer'));

function Body(props) {
	const location = useLocation();
	//console.log(location.pathname === "/");
	return (
		<div className="body-main">
			<SidebarContainer />
			<div className="body-page">
				{
					location.pathname === "/" && <Description />
				}
				<span className="body-page_cover"></span>
				<React.Suspense fallback={<Loader />}>
					<Switch>
						<Route exact path="/Profile/:temporaryID" component={ProfileContainer} />
						<Route exact path='/Posts' component={PostsContainer} />
						<Route exact path='/Dialogs' component={DialogsContainer} />
						<Route exact path='/UserPage' component={PublicUserPageContainer} />
						<Route exact path='/Music' component={MusicContainer} />
					</Switch>
				</React.Suspense>
				{/* way 1 <Route exact path='/src/components/body/page/profile/Profile' component={Profile} /> */}
				{/* way 2 <Route exact path='/src/components/body/page/news/News'> <Componet someProps={...} /> </Route> */}
				{/* way 3 <Route exact path='/src/components/body/page/postlog/Posts' render={()=> <Posts someProps={...} />} /> */}
			</div>
		</div>
	);
}
export default Body;

function Description() {
	return (
		<div className="Description">
			<h3>SHORT DESCRIPTION OF PROJECT</h3>
			<p> This is my first "big" project wrote on React. </p>
			<p> This project is NOT production-ready and was created to show my skills in front-end development. </p>
			<p> Not all functions are working here (as "music", "news" , "dialogs") </p>
			<p> To check how MY POSTS and DIALOGS working, you need to log in with one of the "hardcoded users" from Authorization page.
			Because API endpoint, which I was using, doesn't provide method to save user posts, especially with double nested objects (like my post system has).
			That's why ONLY - PROFILE, USER BASE and AUTHORIZATION pages are working properly with server (but not all small features). But if you will be authorized
			 with "hardcoded user", PROFILE might be not working as well, because I was concentrating on setting up work with server.</p>
			<p>In case you have any question, you can find my contacts below in the footer. </p>
		</div>
	)
}