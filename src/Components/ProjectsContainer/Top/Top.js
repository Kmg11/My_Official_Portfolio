import { Slider } from "./Slider/Slider";

export function Top({ page, data }) {
	const { templates, apps } = data;

	return (
		<>
			<Slider response={templates} page={page} />
			<Slider response={apps} page={page} />
		</>
	);
}
