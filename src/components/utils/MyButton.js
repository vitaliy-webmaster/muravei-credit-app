import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MyButton extends Component {
	render() {
		return (
			<button className={`my-button ${this.props.myClass}`}
							onClick={() => {
								this.props.history.push(this.props.linkTo);
							}}
							disabled={this.props.isDisabled}
			>
				{this.props.text}
			</button>
		);
	}
}

export default withRouter(MyButton);