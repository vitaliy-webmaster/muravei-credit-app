import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import MyButton from "./utils/MyButton";
import connect from "react-redux/es/connect/connect";
import { calculateCommission } from "../actionCreators/dataActions";
import StepIndicatorsGroup from "./utils/StepIndicatorsGroup";

class StepFour extends Component {

	handleChange = () => {
		this.props.calculateCommission();
	};

	render() {
		return (
			<div className='steps-screen step-4-screen'>

				{this.props.form.quiz ? (
					<StepIndicatorsGroup activeQuestions={Object.keys(this.props.form.quiz.registeredFields)} />
				) : null}

				<div className='step-4-screen__header question-header'>
					Квартира находится в городе (не в сельской местности)?
				</div>

				<div className="steps-screen__left">
					<form noValidate onChange={() => {
						this.handleChange();
					}}>
						<label>
							<div className='question-text'>Да</div>
							<Field name='question-4' component='input' type='radio' value='answer-1' />
							<span className="checkmark" />
						</label>
						<label>
							<div className='question-text'>Нет</div>
							<Field name='question-4' component='input' type='radio' value='answer-2' />
							<span className="checkmark" />
						</label>
					</form>
				</div>

				<div className="steps-screen__right">
					<div className="steps-screen__comission">
						<div className="steps-screen__comission-title">
							Ваша комиссия составляет:
						</div>
						<div className="steps-screen__comission-value">
							{this.props.data.commission} т.р.
						</div>
					</div>
					<MyButton myClass='step-4-screen__button' linkTo='/step-5' text='Далее'
										isEnabled={this.props.form.quiz && this.props.form.quiz.values && (Object.keys(this.props.form.quiz.values).indexOf("question-4") !== -1)} />
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
	fields: ["question-4"]
})(connect(mapStateToProps, { calculateCommission })(StepFour));