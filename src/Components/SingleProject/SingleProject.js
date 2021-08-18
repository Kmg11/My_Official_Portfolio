import { createContext } from "react";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";

export const ProjectContext = createContext();

export function SingleProject({ info }) {
	return (
		<ProjectContext.Provider value={info}>
			<Header />
			<Info />
		</ProjectContext.Provider>
	);
}
