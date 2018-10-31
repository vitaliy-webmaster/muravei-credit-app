import React, { Component } from "react";
import { Link } from "react-router-dom";

class StepTwo extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='step-2-screen'>
					Проценты по займу внесу авансом, до регистрации сделки.
				</div>
				<Link to="/step-3">Далее</Link>
			</React.Fragment>
		);
	}
}

export default StepTwo;