import React, { Component } from "react";
import StepIndicator from "./StepIndicator";
import { withRouter } from "react-router-dom";

class StepIndicatorsGroup extends Component {


	render() {
		const { activeQuestions } = this.props;
		const currentActiveQuestion = this.props.match.url;

		return (
			<div className="step-indicators-group">
				<StepIndicator linkTo='/step-1'
											 isEnabled={activeQuestions.indexOf("question-1") !== -1}
											 withActiveArrow={currentActiveQuestion === "/step-1"}>
					<span>Шаг 1</span>
					<span className='mobile-only-991' style={{ display: "none" }}>1</span>
				</StepIndicator>
				<StepIndicator linkTo='/step-2'
											 isEnabled={activeQuestions.indexOf("question-2") !== -1}
											 withActiveArrow={currentActiveQuestion === "/step-2"}>
					<span>Шаг 2</span>
					<span className='mobile-only-991' style={{ display: "none" }}>2</span>
				</StepIndicator>
				<StepIndicator linkTo='/step-3'
											 isEnabled={activeQuestions.indexOf("question-3") !== -1}
											 withActiveArrow={currentActiveQuestion === "/step-3"}>
					<span>Шаг 3</span>
					<span className='mobile-only-991' style={{ display: "none" }}>3</span>
				</StepIndicator>
				<StepIndicator linkTo='/step-4'
											 isEnabled={activeQuestions.indexOf("question-4") !== -1}
											 withActiveArrow={currentActiveQuestion === "/step-4"}>
					<span>Шаг 4</span>
					<span className='mobile-only-991' style={{ display: "none" }}>4</span>
				</StepIndicator>
				<StepIndicator linkTo='/step-5'
											 isEnabled={activeQuestions.indexOf("question-5") !== -1}
											 withActiveArrow={currentActiveQuestion === "/step-5"}>
					<span>Шаг 5</span>
					<span className='mobile-only-991' style={{ display: "none" }}>5</span>
				</StepIndicator>
			</div>
		);
	}
}

export default withRouter(StepIndicatorsGroup);