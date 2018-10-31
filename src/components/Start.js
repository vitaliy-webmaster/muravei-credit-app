import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyButton from "./utils/MyButton";

class Start extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='start-screen'>
					<div className="start-screen__right">
						<img src="/images/woman-in-office.png" alt="" />
						<div className="commissions-info">
							<div className="commissions-info__percent">
								87%
							</div>
							<div className="commissions-info__explain">
								людей платят завышенную комиссию
							</div>
						</div>
					</div>
					<h2>
						Выбери свою комиссию от 30 до 45 т.р.
					</h2>
					<div className="clearfix"></div>
					<MyButton myClass='start-screen__button' linkTo='/step-1' text='Начать расчёт' isDisabled={false} />
				</div>
			</React.Fragment>
		);
	}
}

export default Start;