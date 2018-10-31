import React, { Component } from "react";
import { Link } from "react-router-dom";

class StepFive extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='step-5-screen'>
					Покупаете у родственников?
				</div>
				<Link to="/summary">Далее</Link>
			</React.Fragment>
		);
	}
}

export default StepFive;