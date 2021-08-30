import { useContext } from "react";
import { useSelector } from "react-redux";
import { Components } from "../../../Style";
import { ProjectContext } from "../SingleProject";
import { CoverImage } from "./CoverImage/CoverImage";
import { Badge } from "./Badge/Badge";
import { Name } from "./Name/Name";
import { Description } from "./Description/Description";
import { Links } from "./Links/Links";
import * as Style from "./Header.style";

export function Header() {
	const { project, isPending } = useContext(ProjectContext);
	const navbarHeight = useSelector((state) => state.navbarSize.height);

	return (
		<Style.Header navbarHeight={navbarHeight}>
			<CoverImage project={project} />

			<Components.Container>
				<Style.Content>
					<Badge project={project} isPending={isPending} />
					<Name project={project} isPending={isPending} />
					<Description project={project} isPending={isPending} />
					<Links project={project} isPending={isPending} />
				</Style.Content>
			</Components.Container>
		</Style.Header>
	);
}
