import {
	OPEN_MODAL_WITH_PHONE,
	CLOSE_MODAL_WITH_PHONE,
	OPEN_DATA_AGREEMENT,
	CLOSE_DATA_AGREEMENT,
	CLOSE_MODAL_WITH_ADDRESS, OPEN_MODAL_WITH_ADDRESS
} from "./types";

export const closeModalWithPhone = () => {
	return (dispatch, getState) => {

		dispatch({
			type: CLOSE_MODAL_WITH_PHONE
		});

		return Promise.resolve(getState());
	};
};

export const openModalWithPhone = () => {
	return (dispatch, getState) => {

		dispatch({
			type: OPEN_MODAL_WITH_PHONE
		});

		return Promise.resolve(getState());
	};
};

export const closeModalWithAddress = () => {
	return {
		type: CLOSE_MODAL_WITH_ADDRESS
	};
};

export const openModalWithAddress = () => {
	return {
		type: OPEN_MODAL_WITH_ADDRESS
	};
};

export const openDataAgreement = (modalName) => {
	return {
		type: OPEN_DATA_AGREEMENT,
		payload: modalName
	};
};

export const closeDataAgreement = (modalName) => {
	return {
		type: CLOSE_DATA_AGREEMENT,
		payload: modalName
	};
};

