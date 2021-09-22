import { Switch, Route, useLocation } from "react-router-dom";
import { Routes } from "./Constants";
import { AnimatePresence } from "framer-motion";
import * as Page from "./Pages";

export function App() {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.key}>
				<Route exact path={Routes.HOME} component={Page.Home} />
				<Route path={Routes.PROJECTS} component={Page.Projects} />
				<Route path={`${Routes.PROJECT}/:type/:id`} component={Page.Project} />
				<Route path={Routes.PROFILE} component={Page.Profile} />
				<Route path="*" component={Page.Error} />
			</Switch>
		</AnimatePresence>
	);
}
