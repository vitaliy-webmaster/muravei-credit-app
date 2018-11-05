import { SEND_FORMDATA_EMAIL_START, SEND_FORMDATA_EMAIL_SUCCESS, SEND_FORMDATA_EMAIL_FAIL } from "./types";
import axios from "axios";

export const sendFormDataEmail = () => {
	return (dispatch, getState) => {
		const state = getState();
		const commission = state.data.commission;
		const quizValues = state.form.quiz.values;
		const modalWithPhoneValues = state.form.modalWithPhone && state.form.modalWithPhone.values;
		const modalWithAddressValues = state.form.modalWithAddress && state.form.modalWithAddress.values;
		const plainWithPhoneValues = state.form.plainWithPhone && state.form.plainWithPhone.values;
		let queryObj = "";

		if (commission) {
			queryObj = queryObj + `commission=${commission}&`;
		}

		let q1 = "";
		let q2 = "";
		let q3 = "";
		let q4 = "";
		let q5 = "";

		if (quizValues) {
			q1 = quizValues["question-1"] === "answer-2" ? "ДА" : "НЕТ";
			q2 = quizValues["question-2"] === "answer-1" ? "ДА" : "НЕТ";
			q3 = quizValues["question-3"] === "answer-1" ? "ДА" : "НЕТ";
			q4 = quizValues["question-4"] === "answer-1" ? "ДА" : "НЕТ";
			q5 = quizValues["question-5"] === "answer-1" ? "ДА" : "НЕТ";

			queryObj = queryObj + `q1=${q1}&q2=${q2}&q3=${q3}&q4=${q4}&q5=${q5}&`;
		}

		let name = "";
		let phone = "";
		let years = "";
		let homefound = "";
		let location = "";


		if (modalWithPhoneValues) {
			name = modalWithPhoneValues.name || "NOTFOUND";
			phone = modalWithPhoneValues.phone || "NOTFOUND";
			queryObj = queryObj + `name=${name}&phone=${phone}&`;
		} else if (modalWithAddressValues) {
			name = modalWithAddressValues.name || "NOTFOUND";
			phone = modalWithAddressValues.phone || "NOTFOUND";
			years = modalWithAddressValues.years || "NOTFOUND";
			homefound = modalWithAddressValues.homefound || "NOTFOUND";
			location = modalWithAddressValues.location || "NOTFOUND";
			queryObj = queryObj + `name=${name}&phone=${phone}&years=${years}&homefound=${homefound}&location=${location}&`;
		} else if (plainWithPhoneValues) {
			phone = plainWithPhoneValues.phone || "NOTFOUND";
			queryObj = queryObj + `phone=${phone}&`;
		}

		dispatch({
			type: SEND_FORMDATA_EMAIL_START
		});

		axios.post("/sendUserDataEmail.php", queryObj)
			.then(({ data }) => {
				dispatch({
					type: SEND_FORMDATA_EMAIL_SUCCESS
				});
			});
	};
};