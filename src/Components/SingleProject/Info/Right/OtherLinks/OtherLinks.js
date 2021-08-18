import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Box } from "../../../../Box/Box";
import { ProjectContext } from "../../../SingleProject";
import * as Style from "./OtherLinks.style";

export function OtherLinks() {
	const {
		project: { other_links },
	} = useContext(ProjectContext);

	const linksList = other_links.map((link) => {
		return (
			<Style.Link
				key={link.text}
				href={link.link}
				target="_blank"
				rel="noreferrer"
			>
				{link.text}
			</Style.Link>
		);
	});

	return (
		<Style.OtherLinks>
			<Box title="other links" icon={faLink} items={linksList} />
		</Style.OtherLinks>
	);
}
