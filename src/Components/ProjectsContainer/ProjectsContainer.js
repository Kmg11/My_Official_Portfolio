import { useState } from "react";
import { useFetchGet } from "../../Hooks/Fetch/useFetchGet";
import { Apis } from "../../Constants";
import { CategoriesButtons } from "./CategoriesButtons/CategoriesButtons";
import { Top } from "./Top/Top";
import { All } from "./All/All";
import * as Style from "./ProjectsContainer.style";

const TOP = "TOP";
const TEMPLATES = "TEMPLATES";
const APPS = "APPS";

const containerVariants = {
	exit: {
		opacity: 0,
		scale: 1.2,
		transition: { duration: 0.5 },
	},
};

export function ProjectsContainer() {
	const [projectsPage, setProjectsPage] = useState(TOP);
	const templates = useFetchGet(Apis.TEMPLATES);
	const apps = useFetchGet(Apis.APPS);

	return (
		<Style.ProjectsContainer variants={containerVariants} exit="exit">
			<CategoriesButtons
				page={{
					projectsPage,
					setProjectsPage,
					pageType: { TOP, TEMPLATES, APPS },
				}}
			/>

			{projectsPage === TOP && (
				<Top
					page={{ setProjectsPage, pageType: { TEMPLATES, APPS } }}
					data={{ templates, apps }}
				/>
			)}
			{projectsPage === TEMPLATES && <All data={templates} />}
			{projectsPage === APPS && <All data={apps} />}
		</Style.ProjectsContainer>
	);
}
