import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactSocialNetwork from './AppContainer'

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

