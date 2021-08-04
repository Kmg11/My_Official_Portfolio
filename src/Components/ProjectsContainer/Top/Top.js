import { Slider } from "../Slider/Slider";

export function Top({ navWidthState }) {
	return (
		<>
			<Slider navWidthState={navWidthState} />
			<Slider navWidthState={navWidthState} />
		</>
	);
}
