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

export function ProjectsContainer() {
	const [projectsPage, setProjectsPage] = useState(TOP);
	const { data: templates } = useFetchGet(Apis.TEMPLATES);
	const { data: apps } = useFetchGet(Apis.APPS);

	return (
		<Style.ProjectsContainer>
			<CategoriesButtons
				page={{
					projectsPage,
					setProjectsPage,
					pageType: { TOP, TEMPLATES, APPS },
				}}
			/>

			{projectsPage === TOP && templates && apps && (
				<Top
					page={{ setProjectsPage, pageType: { TEMPLATES, APPS } }}
					data={{ templates, apps }}
				/>
			)}
			{projectsPage === TEMPLATES && templates && <All data={templates} />}
			{projectsPage === APPS && apps && <All data={apps} />}
		</Style.ProjectsContainer>
	);
}
