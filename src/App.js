import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Projects, Project, Profile, Contact } from "./Pages";
import { HOME, PROJECTS, PROJECT, PROFILE, CONTACT } from "./Constants/Router";

export function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={HOME} component={Home} />
				<Route path={PROJECTS} component={Projects} />
				<Route path={PROJECT} component={Project} />
				<Route path={PROFILE} component={Profile} />
				<Route path={CONTACT} component={Contact} />
			</Switch>
		</Router>
	);
}
