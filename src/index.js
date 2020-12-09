import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from "./redux/store"
import store from "./redux/reduxStore"

let reRenderApp = (store) => {
	//console.log("index", store.getState())
	//debugger
	ReactDOM.render(
		<React.StrictMode>

			<App
				// appStore={store}
				appState={store.getState()}
				dispatch={store.dispatch.bind(store)}
			/>

		</React.StrictMode>,
		document.getElementById('root')
	);
}
reRenderApp(store)
store.subscribe(() => {//with redux
	reRenderApp(store)
})
//store.subscribe(reRenderApp(store)) ====>  without redux

// if (store._state.currentUserId !== null) {
// 	store.toSubscribe(reRenderApp)
// } else {
// 	reRenderApp(store)
// }
reportWebVitals();

