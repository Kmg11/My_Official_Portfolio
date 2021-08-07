import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../../../Constants";
import { CircleButtons } from "../../Buttons/CircleButtons/CircleButtons";
import * as Style from "./Header.style";

export function Header() {
	return (
		<Style.Header>
			<Style.CoverImage
				src={`${Images.TEMPLATES}/Apple.png`}
				alt="Project Cover Image"
			/>

			<Style.Content>
				<Style.ProjectName>apple dark mode</Style.ProjectName>

				<Style.SmallDescription>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi in
					quibusdam ipsam deserunt mollitia.
				</Style.SmallDescription>

				<CircleButtons
					info={[
						{ href: "/", icon: faGithub, text: "github" },
						{ href: "/", icon: faWifi, text: "live" },
					]}
				/>
			</Style.Content>
		</Style.Header>
	);
}
