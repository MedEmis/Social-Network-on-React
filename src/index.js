import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from "./redux/store"
import store from "./redux/reduxStore"
import { Provider } from 'react-redux';

let reRenderApp = (store) => {
	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App
					dispatch={store.dispatch.bind(store)}
					currentUserId={store.getState().usersReducer.currentUserId}
					isUserExist={store.getState().usersReducer.isUserExist}
				/>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
reRenderApp(store)
store.subscribe(() => {//with redux
	reRenderApp(store)
})
//store.subscribe(reRenderApp(store)) ====>  without redux

reportWebVitals();

