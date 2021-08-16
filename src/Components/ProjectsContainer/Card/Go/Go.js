import { Routes } from "../../../../Constants";
import * as Style from "./Info.style";

export function Go() {
	return (
		<Style.Go to={Routes.PROJECT} aria-label="Go To Project Page"></Style.Go>
	);
}
