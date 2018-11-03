import {
	CLOSE_DATA_AGREEMENT, CLOSE_MODAL_WITH_ADDRESS,
	CLOSE_MODAL_WITH_PHONE,
	OPEN_DATA_AGREEMENT, OPEN_MODAL_WITH_ADDRESS,
	OPEN_MODAL_WITH_PHONE
} from "../actionCreators/types";

const initialState = {
	modalWithPhone: {
		isEnabled: false,
		dataAgreementIsEnabled: false
	},
	modalWithAddress: {
		isEnabled: false,
		dataAgreementIsEnabled: false
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case OPEN_MODAL_WITH_PHONE:
			return {
				...state,
				modalWithPhone: {
					isEnabled: true
				}
			};
		case CLOSE_MODAL_WITH_PHONE:
			return {
				...state,
				modalWithPhone: {
					isEnabled: false
				}
			};
		case OPEN_MODAL_WITH_ADDRESS:
			return {
				...state,
				modalWithAddress: {
					isEnabled: true
				}
			};
		case CLOSE_MODAL_WITH_ADDRESS:
			return {
				...state,
				modalWithAddress: {
					isEnabled: false
				}
			};
		case OPEN_DATA_AGREEMENT:
			return {
				...state,
				[action.payload]: {
					...state[action.payload],
					dataAgreementIsEnabled: true
				}
			};
		case CLOSE_DATA_AGREEMENT:
			return {
				...state,
				[action.payload]: {
					...state[action.payload],
					dataAgreementIsEnabled: false
				}
			};
		default:
			return state;
	}
};
