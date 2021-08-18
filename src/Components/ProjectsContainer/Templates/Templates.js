import { useContext } from "react";
import { Card } from "../Card/Card";
import { TemplatesContext } from "../ProjectsContainer";
import * as Style from "./Templates.style";

export function Templates() {
	const { templates } = useContext(TemplatesContext);

	const templatesList = templates.map((item) => {
		return <Card key={item.id} info={item} />;
	});

	return <Style.Cards>{templatesList}</Style.Cards>;
}
