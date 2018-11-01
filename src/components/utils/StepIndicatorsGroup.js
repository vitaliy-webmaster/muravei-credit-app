import React, { Component } from "react";
import StepIndicator from "./StepIndicator";

class StepIndicatorsGroup extends Component {


	render() {
		const { activeQuestions } = this.props;

		return (
			<div className="step-indicators-group">
				<StepIndicator linkTo='/step-1'
											 isEnabled={activeQuestions.indexOf("question-1") !== -1}><span>Шаг 1</span></StepIndicator>
				<StepIndicator linkTo='/step-2'
											 isEnabled={activeQuestions.indexOf("question-2") !== -1}><span>Шаг 2</span></StepIndicator>
				<StepIndicator linkTo='/step-3'
											 isEnabled={activeQuestions.indexOf("question-3") !== -1}><span>Шаг 3</span></StepIndicator>
				<StepIndicator linkTo='/step-4'
											 isEnabled={activeQuestions.indexOf("question-4") !== -1}><span>Шаг 4</span></StepIndicator>
				<StepIndicator linkTo='/step-5'
											 isEnabled={activeQuestions.indexOf("question-5") !== -1}><span>Шаг 5</span></StepIndicator>
			</div>
		);
	}
}

export default StepIndicatorsGroup;