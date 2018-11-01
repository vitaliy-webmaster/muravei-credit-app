import React, { Component } from "react";

class MySecondButton extends Component {
	render() {
		return (
			<div className={`my-second-button ${this.props.myClass} ${this.props.isEnabled ? "my-button-enabled" : ""}`}
					 onClick={() => {
						 if (this.props.isEnabled) {
							 this.props.onButtonClick();
						 }
					 }}
			>
				<span>{this.props.text}</span>
			</div>
		);
	}
}

export default MySecondButton;