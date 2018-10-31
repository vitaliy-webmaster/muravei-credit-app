import React, { Component } from "react";
import { Link } from "react-router-dom";

class StepThree extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='step-3-screen'>
					Кто будет оформлять документы и сопровождать в ПФР?
				</div>
				<Link to="/step-4">Далее</Link>
			</React.Fragment>
		);
	}
}

export default StepThree;