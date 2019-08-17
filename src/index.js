import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

// import "./index.scss";
import App from "./App";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
	rootReducer,
	{},
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store={store}>
		<React.Fragment>
			<App />
		</React.Fragment>
	</Provider>,
	document.getElementById("root"));
