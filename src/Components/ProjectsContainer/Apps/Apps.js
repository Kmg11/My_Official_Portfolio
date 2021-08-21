import { useContext } from "react";
import { Card } from "../Card/Card";
import { AppsContext } from "../ProjectsContainer";
import * as Style from "./Apps.style";

export function Apps() {
	const { apps } = useContext(AppsContext);

	const appsList = apps.map((item) => {
		return <Card key={item.id} info={item} />;
	});

	return <Style.Cards>{appsList}</Style.Cards>;
}
