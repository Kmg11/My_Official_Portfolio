import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Projects, Project, Profile, Cv } from "./Pages";
import { HOME, PROJECTS, PROJECT, PROFILE, CV } from "./Constants/Router";

export const APIContext = createContext();
const APILinks = {
	info: "/Api/info.json",
};

export function App() {
	return (
		<APIContext.Provider value={APILinks}>
			<Router>
				<Switch>
					<Route exact path={HOME} component={Home} />
					<Route path={PROJECTS} component={Projects} />
					<Route path={PROJECT} component={Project} />
					<Route path={PROFILE} component={Profile} />
					<Route path={CV} component={Cv} />
				</Switch>
			</Router>
		</APIContext.Provider>
	);
}
