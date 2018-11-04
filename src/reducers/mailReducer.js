import {
	SEND_FORMDATA_EMAIL_START,
	SEND_FORMDATA_EMAIL_SUCCESS,
	SEND_FORMDATA_EMAIL_FAIL
} from "../actionCreators/types";

const initialState = { sendFormDataStatus: "" };

export default (state = initialState, action) => {
	switch (action.type) {
		case SEND_FORMDATA_EMAIL_START:
			return {
				...state,
				sendFormDataStatus: "PENDING"
			};
		case SEND_FORMDATA_EMAIL_SUCCESS:
			return {
				...state,
				sendFormDataStatus: "SUCCESS"
			};
		case SEND_FORMDATA_EMAIL_FAIL:
			return {
				...state,
				sendFormDataStatus: "FAIL"
			};
		default:
			return state;
	}
};
