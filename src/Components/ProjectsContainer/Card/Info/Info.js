import { useContext } from "react";
import { InfoContext } from "../Card";
import * as Style from "./Info.style";

export function Info() {
	const { title, description, technologies } = useContext(InfoContext);

	const technologiesList = technologies.map((item, index) => {
		return <Style.Item key={index}>{item}</Style.Item>;
	});

	return (
		<Style.Info>
			<Style.Box>
				<Style.Title>{title}</Style.Title>
				<Style.Description>{description}</Style.Description>
			</Style.Box>

			<Style.Box>
				<Style.Title>Technologies</Style.Title>
				<Style.List>{technologiesList}</Style.List>
			</Style.Box>
		</Style.Info>
	);
}
