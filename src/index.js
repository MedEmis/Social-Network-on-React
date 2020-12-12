import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from "./redux/store"
import store from "./redux/reduxStore"
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';

//========== with react-redux. Via connect it will make its own subscribe without rerendering of entire DOM tree, but only some components
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppContainer/>
			{/* <App
				currentUserId={store.getState().usersReducer.currentUserId}
				isUserExist={store.getState().usersReducer.isUserExist}
			/> */}
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
//==========================================================================================================

//----------------------------------------------------------------------------------------------------------

//===================================== without react-redux but just redux==================================
// let reRenderApp = (store) => {
// 	ReactDOM.render(
// 		<React.StrictMode>
// 			<Provider store={store}>
// 				<App
// 					dispatch={store.dispatch.bind(store)}
// 					currentUserId={store.getState().usersReducer.currentUserId}
// 					isUserExist={store.getState().usersReducer.isUserExist}
// 				/>
// 			</Provider>
// 		</React.StrictMode>,
// 		document.getElementById('root')
// 	);
// }
// reRenderApp(store)
// store.subscribe(() => {//with redux
// 	reRenderApp(store)
// })
//======================================we rerendering entire DOM tree by store change=======================

//-----------------------------------------------------------------------------------------------------------

//============================================================================================================
// reRenderApp(store)
// store.subscribe(() => {//with redux
// 	reRenderApp(store)
// })
//============================================================================================================

//store.subscribe(reRenderApp(store)) ====>  without redux

reportWebVitals();

