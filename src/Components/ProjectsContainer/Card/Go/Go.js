import { useContext } from "react";
import { Routes } from "../../../../Constants";
import { InfoContext } from "../Card";
import * as Style from "./Info.style";

export function Go() {
	const { id, type, title } = useContext(InfoContext);

	return (
		<Style.Go
			to={`${Routes.PROJECT}/${type}/${id}/${title.split(" ").join("-")}`}
			aria-label={`Go To ${title} Page`}
		></Style.Go>
	);
}
