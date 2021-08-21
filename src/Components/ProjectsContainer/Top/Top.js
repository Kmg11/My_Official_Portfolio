import { useContext } from "react";
import { Slider } from "../Slider/Slider";
import { TemplatesContext, AppsContext } from "../ProjectsContainer";

export function Top({ setProjectsPage, pageType }) {
	const { templates } = useContext(TemplatesContext);
	const topTemplates =
		templates && templates.filter((template) => template.is_top);

	const { apps } = useContext(AppsContext);
	const topApps = apps && apps.filter((app) => app.is_top);

	return (
		<>
			{topTemplates && (
				<Slider
					data={topTemplates}
					setProjectsPage={setProjectsPage}
					pageType={pageType.TEMPLATES}
				/>
			)}
			{topApps && (
				<Slider
					data={topApps}
					setProjectsPage={setProjectsPage}
					pageType={pageType.APPS}
				/>
			)}
		</>
	);
}
