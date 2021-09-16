import { useState } from "react";
import { useFetchGet } from "../../Hooks/Fetch/useFetchGet";
import { Apis } from "../../Constants";
import { CategoriesButtons } from "./CategoriesButtons/CategoriesButtons";
import { Top } from "./Top/Top";
import { All } from "./All/All";
import * as Style from "./ProjectsContainer.style";
import { AnimatePresence } from "framer-motion";

const TOP = "TOP";
const TEMPLATES = "TEMPLATES";
const APPS = "APPS";

const containerVariants = {
	hidden: { opacity: 0, y: 70, transition: { duration: 0.5 } },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function ProjectsContainer() {
	const [projectsPage, setProjectsPage] = useState(TOP);
	const templates = useFetchGet(Apis.TEMPLATES);
	const apps = useFetchGet(Apis.APPS);

	return (
		<Style.ProjectsContainer
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<CategoriesButtons
				page={{
					projectsPage,
					setProjectsPage,
					pageType: { TOP, TEMPLATES, APPS },
				}}
			/>

			<AnimatePresence exitBeforeEnter>
				{projectsPage === TOP && (
					<Top
						key="top"
						page={{ setProjectsPage, pageType: { TEMPLATES, APPS } }}
						data={{ templates, apps }}
					/>
				)}
				{projectsPage === TEMPLATES && <All key="templates" data={templates} />}
				{projectsPage === APPS && <All key="apps" data={apps} />}
			</AnimatePresence>
		</Style.ProjectsContainer>
	);
}
