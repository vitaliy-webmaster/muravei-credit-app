import React, { Component } from "react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router-dom";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import StepOne from "./components/StepOne";
import Start from "./components/Start";
import Summary from "./components/Summary";
import ModalWithPhone from "./components/utils/ModalWithPhone";
import ModalWithAddress from "./components/utils/ModalWithAddress";


import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);

class App extends Component {
	render() {
		return (
			<MemoryRouter basename="">
				<div className="muravei-app">
					<Switch>
						<Route path="/" component={Start} exact={true} />
						<Route path="/step-1" component={StepOne} />
						<Route path="/step-2" component={StepTwo} />
						<Route path="/step-3" component={StepThree} />
						<Route path="/step-4" component={StepFour} />
						<Route path="/step-5" component={StepFive} />
						<Route path="/summary" component={Summary} />
						{/*<Route path="/final" component={Final} />*/}
						<Redirect from='*' to='/' />
					</Switch>
					<ModalWithPhone />
					<ModalWithAddress />
				</div>
			</MemoryRouter>
		);
	}
}

export default App;
