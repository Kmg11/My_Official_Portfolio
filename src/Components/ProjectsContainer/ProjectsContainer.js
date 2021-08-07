import { useState } from "react";
import { Top } from "./Top/Top";
import { Templates } from "./Templates/Templates";
import { Apps } from "./Apps/Apps";
import { BoxButtons } from "../Buttons/BoxButtons/BoxButtons";
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
			<BoxButtons
				page={projectsPage}
				setPage={setProjectsPage}
				info={[
					{ pageType: TOP, text: "Top" },
					{ pageType: TEMPLATES, text: "Templates" },
					{ pageType: APPS, text: "Small Apps" },
				]}
			/>
		</Style.Categories>
	);
}
