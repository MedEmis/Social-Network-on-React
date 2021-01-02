import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactSocialNetwork from './AppContainer'
import "react-rpm"

document.addEventListener('DOMContentLoaded', function () {
	let elems = document.querySelectorAll('.tooltipped');
	let instances = window.M.Tooltip.init(elems);
});//FOR TOOLTIPS




//========== with react-redux. Via connect it will make its own subscribe without rerendering of entire DOM tree, but only some components
ReactDOM.render(
	<ReactSocialNetwork />,
	document.getElementById('root')
);

// ReactDOM.render(
// 	<React.StrictMode>
// 		<Provider store={store}>
// 			<AppContainer />
// 		</Provider>
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );
//==========================================================================================================

reportWebVitals();

