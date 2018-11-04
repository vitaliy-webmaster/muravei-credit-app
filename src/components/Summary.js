import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import MySecondButton from "./utils/MySecondButton";
import { Link } from "react-router-dom";
import { openModalWithPhone, openModalWithAddress, openDataAgreement } from "../actionCreators/modalActions";
import { Field, reduxForm } from "redux-form";
import MySubmitButton from "./utils/MySubmitButton";
import { createTextMask } from "redux-form-input-masks";
import { sendFormDataEmail } from "../actionCreators/mailActions";

class Summary extends Component {

	RENDER_SCENARIO = window.app && window.app.env.INITIAL_RENDER_SCENARIO;

	handleButtonClick = () => {
		switch (this.RENDER_SCENARIO) {
			case "FIRST":
				this.props.openModalWithPhone();
				break;
			case "SECOND":
				this.props.openModalWithAddress();
				break;
			default:
				this.props.openModalWithPhone();
		}
	};

	handleFormSubmit = (data) => {
		this.props.sendFormDataEmail();
	};

	renderField = ({
									 input,
									 placeholder,
									 type,
									 meta: { touched, error }
								 }) => (
		<React.Fragment>
			<input {...input} placeholder={placeholder} type={type} />
			{touched &&
			(error && <div className='form-error'>{error}</div>)}
		</React.Fragment>
	);

	onPageAgreementLinkClick = () => {
		this.props.openModalWithPhone().then(nextState => {
			this.props.openDataAgreement("modalWithPhone");
		});
	};

	render() {
		const { handleSubmit, submitting, valid } = this.props;

		const phoneMask = createTextMask({
			pattern: "+7 (999) 999-99-99",
			guide: true
		});

		return (
			<div className='summary-screen'>

				<div className="steps-screen-left">
					<div className='steps-screen-left__header'>
						Ваша комиссия по займу:
					</div>

					<div className='steps-screen-left__commission'>
						<span>{this.props.data.commission}</span> тысяч рублей
					</div>

					<div className="steps-screen-left__quiz-summary">
						<ol>
							<li>
								<span className='q'>Готов ждать всю сумму 39 дней</span> &nbsp;
								<span className='a'>
									{this.props.form.quiz.values["question-1"] === "answer-2" ? "ДА" : "НЕТ"}
								</span>
							</li>
							<li>
								<span className='q'>Проценты внесу наличными</span> &nbsp;
								<span className='a'>
									{this.props.form.quiz.values["question-2"] === "answer-1" ? "ДА" : "НЕТ"}
								</span>
							</li>
							<li>
								<span className='q'>Оформлением документов КПК Муравей</span> &nbsp;
								<span className='a'>
									{this.props.form.quiz.values["question-3"] === "answer-1" ? "ДА" : "НЕТ"}
								</span>
							</li>
							<li>
								<span className='q'>Жилье в городской черте</span> &nbsp;
								<span className='a'>
									{this.props.form.quiz.values["question-4"] === "answer-1" ? "ДА" : "НЕТ"}
								</span>
							</li>
							<li>
								<span className='q'>Сделка с родственниками</span> &nbsp;
								<span className='a'>
									{this.props.form.quiz.values["question-5"] === "answer-1" ? "ДА" : "НЕТ"}
								</span>
							</li>
						</ol>
					</div>

					<div className='steps-screen-left__people-percent'>
						<div className="people-percent__value">
							52%
						</div>

						<div className="people-percent__text">
							людей платят именно такую комиссию
						</div>
					</div>

					<div className="clearfix"></div>

					<div className='steps-screen-left__quiz-again'>
						<Link to='/step-1'>🡨 Пройти еще раз</Link>
					</div>
				</div>

				<div className="steps-screen-right">
					<div className="steps-screen-right__header">
						Оставьте сейчас заявку на индивидуальную консультацию:
					</div>

					<div className="steps-screen-right__consult-steps">
						<ul>
							<li>- специалист разберет именно ваш случай и даст рекомендации</li>
							<li>- узнаете как и кому можно уменьшить комиссию до <span>0 рублей</span></li>
							<li>- расскажем как увеличить сумму <span>займа до 620 000 рублей</span></li>
						</ul>
						<div
							className={`consult-steps__plus ${(this.RENDER_SCENARIO === "THIRD") ? "consult-steps__plus-accent" : ""}`}>
							+ дополнительная скидка 3000 руб.
							если в течении 7 дней решите работать
							с нами
						</div>
					</div>

					{(this.RENDER_SCENARIO === "THIRD") ? (
							<React.Fragment>
								<div className='plain-form-content'>
									<form noValidate onSubmit={handleSubmit(this.handleFormSubmit)}>
										<MySubmitButton text="Отправить" isEnabled={(!submitting) && valid} />
										<Field name='phone' component={this.renderField} type='tel'
													 placeholder="Ваш номер телефона" {...phoneMask} />
									</form>
								</div>
								<div className="plain-with-phone__personal-data-link">
									Нажимая отправить, Вы даете <span className='personal-data-link'
																										onClick={() => this.onPageAgreementLinkClick()}> согласие на
						обработку своих персональных данных</span>
								</div>
							</React.Fragment>
						) :
						<MySecondButton myClass='summary-screen__button' text='Хочу консультацию'
														onButtonClick={() => this.handleButtonClick()}
														isEnabled={true} />
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.data,
	form: state.form
});

const validate = values => {
	const errors = {};

	if (!values.phone) {
		errors.phone = "Пожалуйста, введите номер телефона";
	} else if (values.phone.length < 10) {
		errors.phone = "Неверный формат ввода";
	}

	return errors;
};


export default reduxForm({
	form: "plainWithPhone",
	shouldValidate: () => true,
	destroyOnUnmount: true,
	validate
})(connect(mapStateToProps, {
	openModalWithPhone,
	openModalWithAddress,
	openDataAgreement,
	sendFormDataEmail
})(Summary));