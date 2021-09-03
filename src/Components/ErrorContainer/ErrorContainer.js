import { Components } from "../../Style";
import { Routes } from "../../Constants";
import { CircleButtons, Button } from "../Buttons/CircleButtons/CircleButtons";
import * as Style from "./ErrorContainer.style";
import { faHome, faUserAlt, faWrench } from "@fortawesome/free-solid-svg-icons";

export function ErrorContainer() {
	return (
		<Style.ErrorContainer>
			<Components.Container>
				<Style.Inner>
					<Style.Title>oops!</Style.Title>
					<Style.Type>404 - page not found</Style.Type>

					<Style.Description>
						The page you are looking for might have been removed had it's name
						changed or is temporarily unavailable
					</Style.Description>

					<CircleButtons isStatic={true}>
						<Button name={Routes.HOME} icon={faHome}>
							Home
						</Button>
						<Button name={Routes.PROJECTS} icon={faWrench}>
							Projects
						</Button>
						<Button name={Routes.PROFILE} icon={faUserAlt}>
							Profile
						</Button>
					</CircleButtons>
				</Style.Inner>
			</Components.Container>
		</Style.ErrorContainer>
	);
}
