import { CALCULATE_COMMISSION } from "./types";

export const calculateCommission = () => {
	return (dispatch, getState) => {
		let startComission = 45;
		const state = getState();

		if (state.form.quiz && state.form.quiz.values) {

			if (state.form.quiz.values["question-1"]) {
				switch (state.form.quiz.values["question-1"]) {
					case "answer-1":
						startComission = startComission + 0;
						break;
					case "answer-2":
						startComission = startComission - 9;
						break;
					case "answer-3":
						startComission = startComission - 5;
						break;
					default:
						throw new Error("Error occured.. Please check actions logic.");
				}
			}

			if (state.form.quiz.values["question-2"]) {
				switch (state.form.quiz.values["question-2"]) {
					case "answer-1":
						startComission = startComission - 2;
						break;
					case "answer-2":
						startComission = startComission + 0;
						break;
					default:
						throw new Error("Error occured.. Please check actions logic.");
				}
			}

			if (state.form.quiz.values["question-3"]) {
				switch (state.form.quiz.values["question-3"]) {
					case "answer-1":
						startComission = startComission - 2;
						break;
					case "answer-2":
						startComission = startComission + 3;
						break;
					default:
						throw new Error("Error occured.. Please check actions logic.");
				}
			}

			if (state.form.quiz.values["question-4"]) {
				switch (state.form.quiz.values["question-4"]) {
					case "answer-1":
						startComission = startComission - 2;
						break;
					case "answer-2":
						startComission = startComission + 0;
						break;
					default:
						throw new Error("Error occured.. Please check actions logic.");
				}
			}


			if (state.form.quiz.values["question-5"]) {
				switch (state.form.quiz.values["question-5"]) {
					case "answer-1":
						startComission = +(startComission + 4.5).toFixed(1);
						break;
					case "answer-2":
						startComission = startComission + 0;
						break;
					default:
						throw new Error("Error occured.. Please check actions logic.");
				}
			}

		}

		dispatch({
			type: CALCULATE_COMMISSION,
			payload: startComission > 45 ? 45 : startComission
		});
	};
};