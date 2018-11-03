import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MyButton extends Component {
	render() {
		return (
			<div className={`my-button ${this.props.myClass || ""} ${this.props.isEnabled ? "my-button-enabled" : ""}`}
					 onClick={() => {
						 if (this.props.isEnabled) {
							 this.props.history.push(this.props.linkTo);
						 }
					 }}
			>
				<span>{this.props.text}</span>
			</div>
		);
	}
}

export default withRouter(MyButton);