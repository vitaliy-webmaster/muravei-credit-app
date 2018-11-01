import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import MySecondButton from "./utils/MySecondButton";

class Summary extends Component {

	handleButtonClick = () => {
		console.log("Xoчу консультацию!");
	};

	render() {
		return (
			<div className='summary-screen'>

				<div className="steps-screen-left">
					<div className='steps-screen-left__header'>
						Ваша комиссия по займу:
					</div>
					<div className='steps-screen-left__commission'>
						<span>{this.props.data.commission}</span> тысяч рублей
					</div>
				</div>

				<div className="steps-screen-right">
					<div className="steps-screen-right__header">

					</div>
				</div>

				<MySecondButton myClass='summary-screen__button' text='Хочу консультацию'
												onButtonClick={() => this.handleButtonClick()}
												isEnabled={true} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.data
});

export default connect(mapStateToProps, {})(Summary);