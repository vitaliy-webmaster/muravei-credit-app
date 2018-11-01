import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dataReducer from "./dataReducer";

export default combineReducers({
	data: dataReducer,
	form: formReducer
});
