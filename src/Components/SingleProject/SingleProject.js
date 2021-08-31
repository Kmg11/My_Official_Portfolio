import PropTypes from "prop-types";
import { createContext } from "react";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";

export const ProjectContext = createContext();

export function SingleProject({ data }) {
	return (
		<ProjectContext.Provider value={data}>
			<Header />
			<Info />
		</ProjectContext.Provider>
	);
}

SingleProject.propTypes = {
	data: PropTypes.object,
};
