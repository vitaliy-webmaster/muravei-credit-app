import React, { Component } from "react";
import CountUp from "react-countup";

class StepCommissionCounter extends Component {

	state = {
		startCommission: this.props.commission,
		endCommission: this.props.commission
	};

	UNSAFE_componentWillReceiveProps = (nextProps) => {
		if (nextProps.commission !== this.state.endCommission) {
			this.setState({
				endCommission: nextProps.commission
			});
		}
	};

	equalizeCounters = () => {
		this.setState(prevState => ({
			startCommission: prevState.endCommission
		}));
	};

	render() {
		return (
			<CountUp
				start={this.state.startCommission}
				end={this.state.endCommission}
				duration={0.4}
				decimals={this.props.decimals || 0}
				decimal="."
				onEnd={() => this.equalizeCounters()}
				onStart={() => {
				}}
				delay={0}
				useEasing={false}
			>
				{({ countUpRef }) => (

					<div className="steps-screen__comission">
						<div className="steps-screen__comission-title">
							Ваша комиссия составляет:
						</div>
						<div className="steps-screen__comission-value">
							<span ref={countUpRef} /> т.р.
						</div>
					</div>
					//
					//
					// <div>
					// 	<span ref={countUpRef} />
					// 	<button onClick={start}>Start</button>
					// </div>
				)}
			</CountUp>
		);
	}
}

export default StepCommissionCounter;