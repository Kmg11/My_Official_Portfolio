import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./Constants";
import * as Page from "./Pages";

export function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={Routes.HOME} component={Page.Home} />
				<Route path={Routes.PROJECTS} component={Page.Projects} />
				<Route path={Routes.PROJECT} component={Page.Project} />
				<Route path={Routes.PROFILE} component={Page.Profile} />
				<Route path={Routes.CV} component={Page.Cv} />
			</Switch>
		</Router>
	);
}
