import React, { Component } from "react";

class MySubmitButton extends Component {
	render() {
		return (
			<button
				type='submit'
				className={`my-submit-button ${this.props.myClass || ""} ${this.props.isEnabled ? "my-submit-btn-enabled" : "my-submit-btn-disabled"}`}
				disabled={!this.props.isEnabled}
			>
				{this.props.text}
			</button>
		);
	}
}

export default MySubmitButton;