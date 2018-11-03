import React, { Component } from "react";

class Final extends Component {
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

export default Final;