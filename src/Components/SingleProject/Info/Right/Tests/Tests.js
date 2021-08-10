import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../../../Box/Box";
import * as Style from "./Tests.style";

export function Tests() {
	return (
		<Style.Tests>
			<Box
				title="tests"
				icon={faPercent}
				items={[
					"97% Performance",
					"100% Accessibilty",
					"100% SEO",
					"100% Best Practice",
					"100% Html Validation",
				]}
			/>
		</Style.Tests>
	);
}
