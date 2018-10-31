import { SET_ANSWER } from "../actionCreators/types";

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_ANSWER:
			return {
				...state,
				data: action.payload
			};
		default:
			return state;
	}
};
