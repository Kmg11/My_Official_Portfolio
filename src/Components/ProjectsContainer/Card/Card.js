import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Style from "./Card.style";

export function Card() {
	return (
		<Style.Card>
			<Style.Go to="/" aria-label="Go To Project Page"></Style.Go>

			<Style.Buttons>
				<Style.Button href="/" target="_blank" rel="noreferrer">
					<Style.ButtonIcon>
						<FontAwesomeIcon icon={faGithub} fixedWidth />
					</Style.ButtonIcon>
					<Style.ButtonName>Github</Style.ButtonName>
				</Style.Button>

				<Style.Button href="/" target="_blank" rel="noreferrer">
					<Style.ButtonIcon>
						<FontAwesomeIcon icon={faWifi} fixedWidth />
					</Style.ButtonIcon>
					<Style.ButtonName>Live</Style.ButtonName>
				</Style.Button>
			</Style.Buttons>

			<Style.CardInfo>
				<Style.Box>
					<Style.Title>Apple</Style.Title>
					<Style.Description>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo
						provident error nulla est quod nam libero dolorum laudantium rem.
					</Style.Description>
				</Style.Box>

				<Style.Box>
					<Style.TechTitle>Technolgy Used</Style.TechTitle>
					<Style.TechList>
						<Style.TechItem>Html</Style.TechItem>
						<Style.TechItem>Css</Style.TechItem>
						<Style.TechItem>Javascript</Style.TechItem>
						<Style.TechItem>jQuery</Style.TechItem>
						<Style.TechItem>Bootstrap</Style.TechItem>
					</Style.TechList>
				</Style.Box>
			</Style.CardInfo>
		</Style.Card>
	);
}
