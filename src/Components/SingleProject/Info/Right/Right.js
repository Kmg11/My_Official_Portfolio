import { Description } from "./Description/Description";
import { Technologies } from "./Technologies/Technologies";
import { Tests } from "./Tests/Tests";
import { Versions } from "./Versions/Versions";
import * as Style from "./Right.style";

export function Right() {
	return (
		<Style.Right>
			<Description />
			<Technologies />
			<Tests />
			<Versions />
		</Style.Right>
	);
}
