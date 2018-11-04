import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import MyButton from "./utils/MyButton";
import connect from "react-redux/es/connect/connect";
import { calculateCommission } from "../actionCreators/dataActions";
import StepIndicatorsGroup from "./utils/StepIndicatorsGroup";
import StepCommissionCounter from "./utils/StepCommissionCounter";

class StepFive extends Component {

	handleChange = () => {
		this.props.calculateCommission();
	};

	render() {
		return (
			<div className='steps-screen step-5-screen'>

				{this.props.form.quiz ? (
					<StepIndicatorsGroup activeQuestions={Object.keys(this.props.form.quiz.registeredFields)} />
				) : null}

				<div className='step-5-screen__header question-header'>
					Покупаете у родственников?
				</div>

				<div className="steps-screen__left">
					<form noValidate onChange={() => {
						this.handleChange();
					}}>
						<label>
							<div className='question-text'>Да</div>
							<Field name='question-5' component='input' type='radio' value='answer-1' />
							<span className="checkmark" />
						</label>
						<label>
							<div className='question-text'>Нет</div>
							<Field name='question-5' component='input' type='radio' value='answer-2' />
							<span className="checkmark" />
						</label>
					</form>
				</div>

				<div className="steps-screen__right">
					<StepCommissionCounter commission={this.props.data.commission}
																 decimals={(this.props.data.commission % 1) !== 0 ? 1 : 0} />
					<MyButton myClass='step-5-screen__button' linkTo='/summary' text='Далее'
										isEnabled={this.props.form.quiz && this.props.form.quiz.values && (Object.keys(this.props.form.quiz.values).indexOf("question-5") !== -1)} />
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
	fields: ["question-5"]
})(connect(mapStateToProps, { calculateCommission })(StepFive));