import { createContext, useState } from "react";
import { useFetchGet } from "../../Hooks/Fetch/useFetchGet";
import { Apis } from "../../Constants";
import { Top } from "./Top/Top";
import { Templates } from "./Templates/Templates";
import { Apps } from "./Apps/Apps";
import { BoxButtons } from "../Buttons/BoxButtons/BoxButtons";
import * as Style from "./ProjectsContainer.style";

const TOP = "TOP";
const TEMPLATES = "TEMPLATES";
const APPS = "APPS";

export const TemplatesContext = createContext();
export const AppsContext = createContext();

export function ProjectsContainer() {
	const [projectsPage, setProjectsPage] = useState(TOP);

	const { data: templates } = useFetchGet(Apis.TEMPLATES);
	const templatesObject = { templates };

	const { data: apps } = useFetchGet(Apis.APPS);
	const appsObject = { apps };

	return (
		<TemplatesContext.Provider value={templatesObject}>
			<AppsContext.Provider value={appsObject}>
				<Style.ProjectsContainer>
					<CategoriesButtons
						projectsPage={projectsPage}
						setProjectsPage={setProjectsPage}
					/>

					{projectsPage === TOP && (
						<Top
							setProjectsPage={setProjectsPage}
							pageType={{ TEMPLATES, APPS }}
						/>
					)}
					{projectsPage === TEMPLATES && <Templates />}
					{projectsPage === APPS && <Apps />}
				</Style.ProjectsContainer>
			</AppsContext.Provider>
		</TemplatesContext.Provider>
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
