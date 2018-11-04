import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class StepIndicator extends Component {
	render() {
		return (
			<div className={
				`step-indicator-item
				${this.props.isEnabled ? "indicator-enabled" : ""}
				${this.props.withActiveArrow ? "with-active-arrow" : ""}`}
					 onClick={() => {
						 if (this.props.isEnabled) {
							 this.props.history.push(this.props.linkTo);
						 }
					 }}
			>
				{this.props.children}
				<div className='arrow-left'></div>
			</div>
		);
	}
}

export default withRouter(StepIndicator);