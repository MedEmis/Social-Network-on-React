import React, { useContext } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import SidebarContainer from './sidebar/SidebarContainer';
import PostsContainer from './page/postlog/PostsContainer';
import DialogsContainer from './page/dialogs/DialogsContainer';
import MusicContainer from './page/music/MusicContainer';
import './body.scss';
//import ProfileContainer from './page/profile/ProfileContainer';
import Loader from './Loader';
import { ThemeContext } from '../../redux/ThemeContext';
const ProfileContainer = React.lazy(() => import('./page/profile/ProfileContainer'));
const PublicUserPageContainer = React.lazy(() => import('./page/UserPage/PublicUserPageContainer'));


function Body(props) {
	const location = useLocation();
	const lightTheme = useContext(ThemeContext)
	//console.log(location.pathname === "/");
	return (
		<div className="body-main" >
			<SidebarContainer themeChange={props.themeChange} />
			<div className="body-page" style={{ background: lightTheme ? " rgb(200, 200, 200)" : "rgb(56, 56, 56)" }}>
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
			<p> This is my first "big" project wrote on React with Redux. </p>
			<p> This project is NOT production-ready and was created to show my skills in front-end development. </p>
			<p> Not all functions are working here (as "music", "news" , "dialogs") </p>
			<p> To check how MY POSTS and DIALOGS working, you need to log in with one of the "hardcoded users" from Authorization page.
			Because API endpoint, which I was using, doesn't provide method to save user posts, especially with double nested objects (like my post system has).
			That's why ONLY - PROFILE, USER BASE and AUTHORIZATION pages are working properly with server (but not all small features). But if you will be authorized
			 with "hardcoded user", PROFILE will not have same functionality as real user.</p>
			<p>Also features of posts will work only for new created posts, but not for hardcoded one, due to only new created messages will have all necessary elements to make it work properly.  </p>
			<p>New created user wil have same functionality as hardcoded user, because API, I was using does not allow to create use from my side. But I've made it myself, just for practice. And new created user will not be saved and after reload will disappear from state</p>
			<p>In case you have any question, you can find my contacts below in the footer. </p>
		</div>
	)
}