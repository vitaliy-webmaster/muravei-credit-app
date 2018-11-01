import { CALCULATE_COMMISSION } from "../actionCreators/types";

export default (state = { commission: 45 }, action) => {
	switch (action.type) {
		case CALCULATE_COMMISSION:
			return {
				...state,
				commission: action.payload
			};
		default:
			return state;
	}
};
