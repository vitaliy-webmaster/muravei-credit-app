import React, { Component } from "react";
import ModalWindow from "./ModalWindow";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createTextMask } from "redux-form-input-masks";
import { closeDataAgreement, closeModalWithPhone, openDataAgreement } from "../../actionCreators/modalActions";
import MySubmitButton from "./MySubmitButton";
import { sendFormDataEmail } from "../../actionCreators/mailActions";
import MySpinner from "./MySpinner";
import { withRouter } from "react-router-dom";


class ModalWithPhone extends Component {

	RENDER_SCENARIO = window.app && window.app.env.INITIAL_RENDER_SCENARIO;

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.mail.sendFormDataStatus === "SUCCESS") {
			setTimeout(() => {
				this.props.closeModalWithPhone();
				this.props.history.push("/final");
			}, 1500);
		}
	}

	handleModalClose = () => {
		this.props.closeModalWithPhone();
		// this.props.destroy("modalWithPhone");
	};

	onAgreementCloseClick = () => {
		if (this.RENDER_SCENARIO === "THIRD") {
			this.props.closeModalWithPhone().then(nextState => {
				this.props.closeDataAgreement("modalWithPhone");
			});
		} else {
			this.props.closeDataAgreement("modalWithPhone");
		}
	};

	onAgreementLinkClick = () => {
		this.props.openDataAgreement("modalWithPhone");
		// this.props.destroy("modalWithPhone");
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

	renderModalWithPhone = () => {
		const { handleSubmit, submitting, valid } = this.props;

		const phoneMask = createTextMask({
			pattern: "+7 (999) 999-99-99",
			guide: true
		});

		return (
			<div className="modal-with-phone">
				<div className="modal-with-phone__header-box">

					<div className="modal-with-phone__header">
						КПК “Муравей”
					</div>

					<div className="modal-with-phone__text">
						<p>Специалисты отвечают в рабочее время в течении 1 минуты.</p>
						<p>Заполните форму и нажмите отправить.</p>
					</div>

				</div>

				<div className="modal-with-phone__form-box">
					<div className="form-box__header">
						Индивидуальная консультация
					</div>

					{this.props.mail.sendFormDataStatus === "" ? (
						<form noValidate onSubmit={handleSubmit(this.handleFormSubmit)}>
							<Field name='name' component={this.renderField} type='text' placeholder="Ваше имя" />
							<Field name='phone' component={this.renderField} type='tel'
										 placeholder="Ваш номер телефона" {...phoneMask} />
							<MySubmitButton text="Отправить" isEnabled={(!submitting) && valid} />
						</form>
					) : null}

					{this.props.mail.sendFormDataStatus === "PENDING" ? (
						<MySpinner isActive={true} />
					) : null}

					{this.props.mail.sendFormDataStatus === "SUCCESS" ? (
						<div className="form-send-success">
							Заявка успешно отправлена!
						</div>
					) : null}

					{this.props.mail.sendFormDataStatus === "FAIL" ? (
						<div className="form-send-fail">
							Ошибка при отправке данных!
						</div>
					) : null}


					<div className="modal-with-phone__personal-data-link">
						Нажимая отправить, Вы даете <span className='personal-data-link'
																							onClick={() => this.onAgreementLinkClick()}> согласие на
								обработку своих персональных данных</span>
					</div>
				</div>
			</div>
		);
	};


	renderDataAgreement = () => {
		return (
			<div className="modal-with-phone-agreement">
				<div className="modal-with-phone-agreement__header-box">
					<div className="modal-with-phone-agreement__header">
						Пользовательское соглашение
					</div>

					<div className="modal-with-phone-agreement__header-text">
						<div onClick={() => this.onAgreementCloseClick()}>🡨 &nbsp;Назад к форме</div>
					</div>
				</div>

				<div className="modal-with-phone-agreement-body">
					<p>
						Настоящим я, далее – «ПосетительСайта», во исполнение требований Федерального закона от 27.07.2006 г. №
						152-ФЗ «О персональных данных» (с изменениями и дополнениями)свободно, своей волей и в своем интересе даю
						свое согласие КПК "МУРАВЕЙ" (далее – «КПК») на обработку своих персональных данных, указанных при
						регистрации путем заполнения веб-формы на сайте КПК маткапитал.рф.
					</p>
					<p>
						Под персональными данными я понимаю любую информацию, относящуюся ко мне как к Посетителю сайта, в том числе
						мои фамилию, имя, отчество, адрес, образование, профессию, контактные данные(телефон, факс, электронная
						почта, почтовый адрес), фотографии, иную другую информацию. Под обработкой персональных данных я понимаю
						сбор, систематизацию, накопление, уточнение, обновление, изменение, использование, распространение,
						передачу, в том числе трансграничную, обезличивание, блокирование, уничтожение, бессрочное хранение), и
						любые другие действия(операции) с персональными данными.
					</p>
					<p>
						Обработка персональных данных ПосетителяСайта осуществляется исключительно в целях регистрации
						ПосетителяСайта в базе данных КПК с последующим направлением ПосетителюСайта почтовых сообщений и
						смс-уведомлений, в том числе рекламного содержания, от КПК, его аффилированных лиц и/или субподрядчиков,
						информационных и новостных рассылок, приглашений на мероприятия КПК и другой информации рекламно-новостного
						содержания, а также сцелью подтверждения личности ПосетителяСайта при посещении мероприятий КПК.
					</p>
					<p>
						Датой выдачи согласия на обработкуперсональных данных ПосетителяСайта является дата отправки регистрационной
						веб-формы с Сайта КПК.
					</p>
					<p>
						Обработка персональных данных ПосетителяСайта может осуществляться с помощью средств автоматизации и/илибез
						использования средств автоматизации в соответствии с действующим законодательством РФ и внутренними
						положениями КПК.
					</p>
					<p>
						КПК принимает необходимые правовые, организационные и технические меры или обеспечивает их принятие для
						защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения,
						блокирования, копирования, предоставления, распространения персональных данных, а также от иных
						неправомерных действий вотношении персональных данных, а также принимает на себя обязательство сохранения
						конфиденциальности персональных данных ПосетителяСайта. КПК вправе привлекать для обработки персональных
						данных ПосетителяСайта субподрядчиков, а также вправе передавать персональные данные для обработки своим
						аффилированным лицам, обеспечивая при этом принятие такими субподрядчиками и аффилированными лицами
						соответствующих обязательств в части конфиденциальности персональных данных.
					</p>
					<p>
						Я ознакомлен(а), что:
					</p>
					<p>
						настоящее согласие на обработку моих персональных данных, указанных при регистрации на Сайте КПК,
						направляемых(заполненных) с использованием Cайта, действует в течение 20 (двадцати) лет смомента регистрации
						на Cайте КПК; <br />
						согласие может быть отозвано мною на основании письменного заявления в произвольной форме;
						предоставление персональных данных третьих лиц без их согласия влечет ответственность в соответствии с
						действующим законодательством Российской Федерации.
					</p>
				</div>
			</div>
		);
	};

	render() {
		const { isEnabled, dataAgreementIsEnabled } = this.props.modals.modalWithPhone;

		return (
			isEnabled ? (
				<ModalWindow isOpen={isEnabled}
										 onModalClose={() => this.handleModalClose()}
										 container={document.getElementById("modal-with-phone")}>
					{dataAgreementIsEnabled ? this.renderDataAgreement() : this.renderModalWithPhone()}
				</ModalWindow>
			) : null
		);
	}
}

const mapStateToProps = (state) => ({
	modals: state.modals,
	form: state.form,
	mail: state.mail
});

const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = "Пожалуйста, введите имя";
	} else if (values.name.length < 3) {
		errors.name = "Имя должно содержать минимум 3 симв.";
	}
	if (!values.phone) {
		errors.phone = "Пожалуйста, введите номер телефона";
	} else if (values.phone.length < 10) {
		errors.phone = "Неверный формат ввода";
	}
	return errors;
};

export default reduxForm({
	form: "modalWithPhone",
	shouldValidate: () => true,
	destroyOnUnmount: true,
	validate
})(withRouter(connect(mapStateToProps, {
	closeModalWithPhone,
	openDataAgreement,
	closeDataAgreement,
	sendFormDataEmail
})(ModalWithPhone)));