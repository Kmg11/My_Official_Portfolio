import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../../../Box/Box";
import * as Style from "./Description.style";

export function Description() {
	return (
		<Style.Description>
			<Box
				title="description"
				icon={faInfo}
				items={[
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil voluptatum aliquam fugit veniam, quia, incidunt beatae neque impedit rem, quaerat necessitatibus voluptate totam molestiae quam eum in. Quod, eos!",
				]}
			/>
		</Style.Description>
	);
}
