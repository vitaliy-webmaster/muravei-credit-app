import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dataReducer from "./dataReducer";
import modalsReducer from "./modalsReducer";
import mailReducer from "./mailReducer";

export default combineReducers({
	data: dataReducer,
	form: formReducer,
	modals: modalsReducer,
	mail: mailReducer
});
