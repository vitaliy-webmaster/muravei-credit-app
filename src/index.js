import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import "./index.scss";
import App from "./App";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	{},
	composeEnhancers(
		applyMiddleware(reduxThunk)
	));

ReactDOM.render(
	<Provider store={store}>
		<React.Fragment>
			<App />
		</React.Fragment>
	</Provider>,
	document.getElementById("root"));
