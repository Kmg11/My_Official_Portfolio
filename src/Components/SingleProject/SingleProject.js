import PropTypes from "prop-types";
import { createContext } from "react";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import * as Style from "./SingleProject.style";

export const ProjectContext = createContext();

const containerVariants = {
	exit: {
		opacity: 0,
		scale: 1.2,
		transition: { duration: 0.5 },
	},
};

export function SingleProject({ data }) {
	return (
		<ProjectContext.Provider value={data}>
			<Style.ProjectContext variants={containerVariants} exit="exit">
				<Header />
				<Info />
			</Style.ProjectContext>
		</ProjectContext.Provider>
	);
}

SingleProject.propTypes = {
	data: PropTypes.object,
};
