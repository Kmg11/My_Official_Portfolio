import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../../../Constants";
import { Components } from "../../../Style";
import { CircleButtons } from "../../Buttons/CircleButtons/CircleButtons";
import * as Style from "./Header.style";

export function Header() {
	return (
		<Style.Header>
			<Style.CoverImage
				src={`${Images.TEMPLATES}/Apple.png`}
				alt="Project Cover Image"
			/>

			<Components.Container>
				<Style.Content>
					<Style.Name>apple dark mode</Style.Name>

					<Style.Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi
						in quibusdam ipsam deserunt mollitia.
					</Style.Description>

					<CircleButtons
						info={[
							{ href: "/", icon: faGithub, text: "github" },
							{ href: "/", icon: faWifi, text: "live" },
						]}
					/>
				</Style.Content>
			</Components.Container>
		</Style.Header>
	);
}
