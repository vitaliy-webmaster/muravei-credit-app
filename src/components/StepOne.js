import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import MyButton from "./utils/MyButton";
import { calculateCommission } from "../actionCreators/dataActions";
import StepIndicatorsGroup from "./utils/StepIndicatorsGroup";
import StepCommissionCounter from "./utils/StepCommissionCounter";


class StepOne extends Component {

	handleChange = () => {
		this.props.calculateCommission();
	};

	render() {

		return (
			<div className='steps-screen step-1-screen'>

				{this.props.form.quiz ? (
					<StepIndicatorsGroup activeQuestions={Object.keys(this.props.form.quiz.registeredFields)} />
				) : null}

				<div className='step-1-screen__header question-header'>
					Готовы получить деньги через 39 дней после регистрации в Регпалате?
				</div>

				<div className="steps-screen__left">
					<form noValidate onChange={() => {
						this.handleChange();
					}}>
						<label>
							<div className='question-text'>Нет, хочу сразу</div>
							<Field name='question-1' component='input' type='radio' value='answer-1' />
							<span className="checkmark" />
						</label>
						<label>
							<div className='question-text'>Да, буду ждать всю сумму</div>
							<Field name='question-1' component='input' type='radio' value='answer-2' />
							<span className="checkmark" />
						</label>
						<label>
							<div className='question-text'>После сделки заберу 100 000, остаток через 39 дней</div>
							<Field name='question-1' component='input' type='radio' value='answer-3' />
							<span className="checkmark" />
						</label>
					</form>
				</div>

				<div className="steps-screen__right">
					<StepCommissionCounter commission={this.props.data.commission}
																 decimals={(this.props.data.commission % 1) !== 0 ? 1 : 0} />
					<MyButton myClass='step-1-screen__button' linkTo='/step-2' text='Далее'
										isEnabled={this.props.form.quiz && this.props.form.quiz.values && (Object.keys(this.props.form.quiz.values).indexOf("question-1") !== -1)} />
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
	fields: ["question-1"]
})(connect(mapStateToProps, { calculateCommission })(StepOne));