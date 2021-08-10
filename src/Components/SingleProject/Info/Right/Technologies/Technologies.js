import { faTools } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../../../Box/Box";
import * as Style from "./Technologies.style";

export function Technologies() {
	return (
		<Style.Technologies>
			<Box
				title="technologies"
				icon={faTools}
				items={[
					"html",
					"css",
					"javascript",
					"jquery",
					"bootstrap",
					"sass",
					"pug",
				]}
			/>
		</Style.Technologies>
	);
}
