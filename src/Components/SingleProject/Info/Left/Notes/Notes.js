import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { Box } from "../../Box/Box";
import * as Style from "./Notes.style";

export function Notes() {
	return (
		<Style.Notes>
			<Box
				title="notes"
				icon={faClipboard}
				items={[
					"This Is Note 1",
					"This Is Note 2",
					"This Is Note 3",
					"This Is Note 4",
				]}
			/>
		</Style.Notes>
	);
}
