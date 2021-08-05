import { useState } from "react";
import { Top } from "./Top/Top";
import { Templates } from "./Templates/Templates";
import { Apps } from "./Apps/Apps";
import * as Style from "./ProjectsContainer.style";

const TOP = "TOP";
const TEMPLATES = "TEMPLATES";
const APPS = "APPS";

export function ProjectsContainer() {
	const [projectsPage, setProjectsPage] = useState(TOP);

	return (
		<Style.ProjectsContainer>
			<CategoriesButtons
				projectsPage={projectsPage}
				setProjectsPage={setProjectsPage}
			/>

			{projectsPage === TOP && <Top />}
			{projectsPage === TEMPLATES && <Templates />}
			{projectsPage === APPS && <Apps />}
		</Style.ProjectsContainer>
	);
}

function CategoriesButtons({ projectsPage, setProjectsPage }) {
	return (
		<Style.Categories>
			<Style.Button
				onClick={() => setProjectsPage(TOP)}
				active={projectsPage === TOP ? true : false}
			>
				Top
			</Style.Button>
			<Style.Button
				onClick={() => setProjectsPage(TEMPLATES)}
				active={projectsPage === TEMPLATES ? true : false}
			>
				Templates
			</Style.Button>
			<Style.Button
				onClick={() => setProjectsPage(APPS)}
				active={projectsPage === APPS ? true : false}
			>
				Small Apps
			</Style.Button>
		</Style.Categories>
	);
}
