import { Description } from "./Description/Description";
import { Technologies } from "./Technologies/Technologies";
import { Tests } from "./Tests/Tests";
import * as Style from "./Right.style";

export function Right() {
	return (
		<Style.Right>
			<Description />
			<Technologies />
			<Tests />
		</Style.Right>
	);
}
