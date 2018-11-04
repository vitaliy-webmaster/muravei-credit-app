import React, { Component } from "react";
import { PulseLoader } from "react-spinners";

class MySpinner extends Component {
	render() {
		return (
			<div className='spinner-wrapper'>
				<div className='spinner-box'>
					<PulseLoader
						sizeUnit={"px"}
						size={15}
						color={"#000"}
						loading={this.props.isActive}
					/>
				</div>
			</div>
		);
	}
}

export default MySpinner;