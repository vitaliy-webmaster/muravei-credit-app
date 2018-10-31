import React, { Component } from "react";
import { Link } from "react-router-dom";

class StepFour extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='step-4-screen'>
					Квартира находится в городе (не в сельской местности)?
				</div>
				<Link to="/step-5">Далее</Link>
			</React.Fragment>
		);
	}
}

export default StepFour;