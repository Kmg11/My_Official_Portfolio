import { useContext } from "react";
import { Slider } from "../Slider/Slider";
import { TemplatesContext } from "../ProjectsContainer";

export function Top({ setProjectsPage, pageType }) {
	const { templates } = useContext(TemplatesContext);
	const topTemplates =
		templates && templates.filter((template) => template.is_top);

	return (
		<>
			{topTemplates && (
				<Slider
					data={topTemplates}
					setProjectsPage={setProjectsPage}
					pageType={pageType.TEMPLATES}
				/>
			)}
			{/* <Slider /> */}
		</>
	);
}
