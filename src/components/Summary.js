import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import MySecondButton from "./utils/MySecondButton";
import { Link } from "react-router-dom";
import { openModalWithPhone } from "../actionCreators/modalActions";

class Summary extends Component {

	handleButtonClick = () => {
		this.props.openModalWithPhone();
	};

	render() {
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
							<li><span className='q'>Готов ждать всю сумму 39 дней</span> <span className='a'>ДА</span></li>
							<li><span className='q'>Проценты внесу наличными</span> <span className='a'>ДА</span></li>
							<li><span className='q'>Оформлением документов КПК Муравей</span> <span className='a'>ДА</span></li>
							<li><span className='q'>Жилье в городской черте</span> <span className='a'>ДА</span></li>
							<li><span className='q'>Сделка с родственниками</span> <span className='a'>ДА</span></li>
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
						<div className='consult-steps__plus'>
							+ дополнительная скидка 3000 руб.
							если в течении 7 дней решите работать
							с нами
						</div>
					</div>

					<MySecondButton myClass='summary-screen__button' text='Хочу консультацию'
													onButtonClick={() => this.handleButtonClick()}
													isEnabled={true} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.data
});

export default connect(mapStateToProps, { openModalWithPhone })(Summary);