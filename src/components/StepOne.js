import React, { Component } from "react";
import { Link } from "react-router-dom";

class StepOne extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='step-1-screen'>
					Готовы получить деньги через 39 дней после регистрации в Регпалате?
				</div>
				<Link to="/step-2">Далее</Link>
			</React.Fragment>
		);
	}
}

export default StepOne;