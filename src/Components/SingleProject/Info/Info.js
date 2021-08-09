import { Left } from "./Left/Left";
import { Right } from "./Right/Right";
import * as Style from "./Info.style";

export function Info() {
	return (
		<Style.Info>
			<Left />
			<Right />
		</Style.Info>
	);
}
