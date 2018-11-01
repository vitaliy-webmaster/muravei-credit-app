import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class StepIndicator extends Component {
	render() {
		return (
			<div className={`step-indicator-item ${this.props.isEnabled ? "indicator-enabled" : ""}`}
					 onClick={() => {
						 if (this.props.isEnabled) {
							 this.props.history.push(this.props.linkTo);
						 }
					 }}
			>
				{this.props.children}
			</div>
		);
	}
}

export default withRouter(StepIndicator);