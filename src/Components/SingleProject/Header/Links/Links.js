import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ProjectContext } from "../../SingleProject";
import { CircleButtons, Button } from "../../../Buttons/Circle/Circle";
import * as Style from "./Links.style";

const buttonVariants = {
	hidden: { opacity: 0, y: 20, scale: 1.1, originX: 0 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5, delay: 0.9 },
	},
};

export function Links() {
	const { project, isPending } = useContext(ProjectContext);

	const getLinks = (variants) => {
		return (
			<Style.Links variants={variants}>
				<CircleButtons
					isPending={isPending}
					object={project}
					section="links"
					isStatic={false}
				>
					<Button name="github" icon={faGithub}>
						github
					</Button>
					<Button name="live" icon={faWifi}>
						live
					</Button>
				</CircleButtons>
			</Style.Links>
		);
	};

	return isPending ? getLinks(null) : project && getLinks(buttonVariants);
}
