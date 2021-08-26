import { Slider } from "../Slider/Slider";

export function Top({ page, data }) {
	const { templates, apps } = data;
	const topTemplates = templates.filter((template) => template.is_top);
	const topApps = apps.filter((app) => app.is_top);

	return (
		<>
			{topTemplates && <Slider data={topTemplates} page={page} />}
			{topApps && <Slider data={topApps} page={page} />}
		</>
	);
}
