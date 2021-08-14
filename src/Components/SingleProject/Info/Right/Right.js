import { Description } from "./Description/Description";
import { Technologies } from "./Technologies/Technologies";
import { Tests } from "./Tests/Tests";
import { Versions } from "./Versions/Versions";
import { Links } from "./Links/Links";
import * as Style from "./Right.style";

export function Right() {
	return (
		<Style.Right>
			<Description />
			<Technologies />
			<Tests />
			<Versions />
			<Links />
		</Style.Right>
	);
}
