import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import MyButton from "./utils/MyButton";
import connect from "react-redux/es/connect/connect";
import { calculateCommission } from "../actionCreators/dataActions";
import StepIndicatorsGroup from "./utils/StepIndicatorsGroup";

class StepThree extends Component {

	handleChange = () => {
		this.props.calculateCommission();
	};

	render() {
		return (
			<div className='steps-screen step-3-screen'>

				{this.props.form.quiz ? (
					<StepIndicatorsGroup activeQuestions={Object.keys(this.props.form.quiz.registeredFields)} />
				) : null}

				<div className='step-3-screen__header question-header'>
					Кто будет оформлять документы и сопровождать в ПФР?
				</div>

				<div className="steps-screen__left">
					<form noValidate onChange={() => {
						this.handleChange();
					}}>
						<label>
							<div className='question-text'>Тот, кто выдает займ</div>
							<Field name='question-3' component='input' type='radio' value='answer-1' />
							<span className="checkmark" />
						</label>
						<label>
							<div className='question-text'>Прочие</div>
							<Field name='question-3' component='input' type='radio' value='answer-2' />
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
					<MyButton myClass='step-3-screen__button' linkTo='/step-4' text='Далее'
										isEnabled={this.props.form.quiz && this.props.form.quiz.values && (Object.keys(this.props.form.quiz.values).indexOf("question-3") !== -1)} />
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
	fields: ["question-3"]
})(connect(mapStateToProps, { calculateCommission })(StepThree));