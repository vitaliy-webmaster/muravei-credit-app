import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import MyButton from "./utils/MyButton";
import connect from "react-redux/es/connect/connect";
import { calculateCommission } from "../actionCreators/dataActions";
import StepIndicatorsGroup from "./utils/StepIndicatorsGroup";
import StepCommissionCounter from "./utils/StepCommissionCounter";

class StepTwo extends Component {

	handleChange = () => {
		this.props.calculateCommission();
	};

	render() {
		return (
			<div className='steps-screen step-2-screen'>

				{this.props.form.quiz ? (
					<StepIndicatorsGroup activeQuestions={Object.keys(this.props.form.quiz.registeredFields)} />
				) : null}

				<div className='step-2-screen__header question-header'>
					Проценты по займу внесу авансом, до регистрации сделки.
				</div>

				<div className="steps-screen__left">
					<form noValidate onChange={() => {
						this.handleChange();
					}}>
						<label>
							<div className='question-text'>Да, готов</div>
							<Field name='question-2' component='input' type='radio' value='answer-1' />
							<span className="checkmark" />
						</label>
						<label>
							<div className='question-text'>Без собственных средств</div>
							<Field name='question-2' component='input' type='radio' value='answer-2' />
							<span className="checkmark" />
						</label>
					</form>
				</div>

				<div className="steps-screen__right">
					<StepCommissionCounter commission={this.props.data.commission}
																 decimals={(this.props.data.commission % 1) !== 0 ? 1 : 0} />
					<MyButton myClass='step-2-screen__button' linkTo='/step-3' text='Далее'
										isEnabled={this.props.form.quiz && this.props.form.quiz.values && (Object.keys(this.props.form.quiz.values).indexOf("question-2") !== -1)} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.data,
	form: state.form
});

export default reduxForm({
	form: "quiz",
	destroyOnUnmount: false,
	fields: ["question-2"]
})(connect(mapStateToProps, { calculateCommission })(StepTwo));