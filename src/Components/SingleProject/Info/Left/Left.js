import { Features } from "./Features/Features";
import { Notes } from "./Notes/Notes";
import { HowToUse } from "./HowToUse/HowToUse";
import * as Style from "./Left.style";

export function Left() {
	return (
		<Style.Left>
			<Features />
			<Notes />
			<HowToUse />
		</Style.Left>
	);
}
