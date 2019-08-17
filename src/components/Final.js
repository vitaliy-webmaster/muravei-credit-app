import React, { Component } from "react";
import { connect } from "react-redux";
import { closeModalWithAddress, closeModalWithPhone } from "../actionCreators/modalActions";

class Final extends Component {

	componentDidMount() {
		this.props.closeModalWithAddress();
		this.props.closeModalWithPhone();
	}

	render() {
		return (
			<div className='final-screen'>
				<div className="final-screen__ok-text">
					Ок! Ваша заявка уже на нашей почте. В самое ближайшее время специалист свяжется с вами.
				</div>
				<div className="final-screen__ok-subtext">
					Если не хотите ждать, вы можете позвонить по БЕСПЛАТНОМУ номеру <a href="tel:88002225026">8 (800)
					222-50-26</a> прямо сейчас.
					<span className='font-size-small'>
						(нажмите на телефон чтобы позвонить)
					</span>
				</div>
			</div>
		);
	}
}

export default connect(null, {
	closeModalWithAddress,
	closeModalWithPhone
})(Final);