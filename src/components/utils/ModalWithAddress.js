import React, { Component } from "react";
import ModalWindow from "./ModalWindow";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createTextMask } from "redux-form-input-masks";
import { closeDataAgreement, closeModalWithAddress, openDataAgreement } from "../../actionCreators/modalActions";
import MySubmitButton from "./MySubmitButton";
import { sendFormDataEmail } from "../../actionCreators/mailActions";
import MySpinner from "./MySpinner";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ModalWithAddress extends Component {

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.mail.sendFormDataStatus === "SUCCESS") {
			setTimeout(() => {
				window.location.href = "/mailsended.html";
			}, 500);
		}
	}

	handleModalClose = () => {
		this.props.closeModalWithAddress();
		// this.props.destroy("modalWithAddress");
	};

	onAgreementCloseClick = () => {
		this.props.closeDataAgreement("modalWithAddress");
	};

	onAgreementLinkClick = () => {
		this.props.openDataAgreement("modalWithAddress");
		// this.props.destroy("modalWithAddress");
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

	renderModalWithAddress = () => {
		const { handleSubmit, submitting, valid } = this.props;

		const phoneMask = createTextMask({
			pattern: "+7 (999) 999-99-99"
		});

		return (
			<div className="modal-with-phone with-address">
				<div className="modal-with-phone__header-box">
					<div className="close-mobile-only-599" style={{ display: "none" }}
							 onClick={() => {
								 this.handleModalClose();
							 }}
					></div>
					<div className="modal-with-phone__header">
						КПК “Муравей”
					</div>

					<div className="modal-with-phone__text">
						<p>Специалисты отвечают в рабочее время в течении 1 минуты.</p>
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
							<Field name='years' component={this.renderField} type='text' placeholder="Сколько ребенку лет?" />
							<Field name='homefound' component={this.renderField} type='text' placeholder="Жильё нашли?" />
							<Field name='location' component={this.renderField} type='text' placeholder="Населенный пункт" />
							<MySubmitButton text="Отправить" isEnabled={(!submitting) && valid} />
						</form>

					) : null}

					{(this.props.mail.sendFormDataStatus === "PENDING")
					|| (this.props.mail.sendFormDataStatus === "SUCCESS")
					|| (this.props.mail.sendFormDataStatus === "FAIL") ? (
						<MySpinner isActive={true} />
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
						<div onClick={() => this.onAgreementCloseClick()}><FontAwesomeIcon icon="arrow-left" /> Назад к форме</div>
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
		const { isEnabled, dataAgreementIsEnabled } = this.props.modals.modalWithAddress;

		return (
			isEnabled ? (
				<ModalWindow isOpen={isEnabled}
										 onModalClose={() => this.handleModalClose()}
										 container={document.getElementById("modal-with-phone")}>
					{dataAgreementIsEnabled ? this.renderDataAgreement() : this.renderModalWithAddress()}
				</ModalWindow>
			) : null
		);
	}
}

const mapStateToProps = (state) => ({
	modals: state.modals,
	mail: state.mail
});

const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = "Пожалуйста, введите имя";
	}

	if (!values.phone) {
		errors.phone = "Пожалуйста, введите номер телефона";
	} else if (values.phone.length < 10) {
		errors.phone = "Неверный формат ввода";
	}

	if (!values.years) {
		errors.years = "Пожалуйста, введите значение";
	}

	if (!values.homefound) {
		errors.homefound = "Пожалуйста, введите значение";
	}

	if (!values.location) {
		errors.location = "Пожалуйста, введите значение";
	}

	return errors;
};

export default reduxForm({
	form: "modalWithAddress",
	shouldValidate: () => true,
	destroyOnUnmount: true,
	validate
})(withRouter(connect(mapStateToProps, {
	closeModalWithAddress,
	openDataAgreement,
	closeDataAgreement,
	sendFormDataEmail
})(ModalWithAddress)));