import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../../../Box/Box";
import * as Style from "./Features.style";

export function Features() {
	return (
		<Style.Features>
			<Box
				title="features"
				icon={faStar}
				items={[
					"Interact with posts by [ like, comment, delete ] and single page for every post",
					"Form for creating posts that contain user ( name, image ), post ( title, description, images )",
					"Save unsent data in local storage",
					"Infinity scroll",
					"A random image containing a distinctive color and the first letter of the first and second name of the user who did not put a picture",
					"Loading handler, error handler and 404 page",
				]}
			/>
		</Style.Features>
	);
}
