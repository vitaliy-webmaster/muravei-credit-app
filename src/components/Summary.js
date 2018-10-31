import React, { Component } from "react";
import { Link } from "react-router-dom";

class Summary extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='summary-screen'>
					Ваша комиссия по займу: <br />
					37 тысяч рублей
				</div>
				<Link to="/final">Далее</Link>
			</React.Fragment>
		);
	}
}

export default Summary;