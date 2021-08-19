import { useContext } from "react";
import { Routes } from "../../../../Constants";
import { InfoContext } from "../Card";
import * as Style from "./Info.style";

export function Info() {
	const { id, type, title, description, technologies } =
		useContext(InfoContext);

	const sliceDescription =
		description.length > 100 ? description.slice(0, 100) : description;

	const technologiesList = technologies.map((item, index) => {
		return <Style.Item key={index}>{item}</Style.Item>;
	});

	return (
		<Style.Info>
			<Style.Box>
				<Style.Title>{title}</Style.Title>
				<Style.Description>
					{sliceDescription}{" "}
					<Style.Dots to={`${Routes.PROJECT}/${type}/${id}/${title}`}>
						...
					</Style.Dots>
				</Style.Description>
			</Style.Box>

			<Style.Box>
				<Style.Title>Technologies</Style.Title>
				<Style.List>{technologiesList}</Style.List>
			</Style.Box>
		</Style.Info>
	);
}
