import PropTypes from "prop-types";
import { createContext } from "react";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import * as Style from "./SingleProject.style";

export const ProjectContext = createContext();

const containerVariants = {
	hidden: { opacity: 0, transition: { duration: 0.5 } },
	visible: { opacity: 1, transition: { duration: 0.7 } },
};

export function SingleProject({ data }) {
	return (
		<ProjectContext.Provider value={data}>
			<Style.ProjectContext
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				<Header />
				<Info />
			</Style.ProjectContext>
		</ProjectContext.Provider>
	);
}

SingleProject.propTypes = {
	data: PropTypes.object,
};
