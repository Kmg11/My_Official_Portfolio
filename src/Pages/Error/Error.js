import { Helmet } from "react-helmet-async";
import { CreateImage } from "../../Components/CreateImage/CreateImage";
import { Images } from "../../Constants";
import { ErrorContainer } from "../../Components/ErrorContainer/ErrorContainer";
import * as Style from "./Error.style";

export function Error() {
	const title = `404 | Error`;
	const description = `Page not found please try again`;

	return (
		<Style.Error>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Helmet>

			<Style.CoverImage>
				<CreateImage
					src={`${Images.ERROR}/background`}
					alt="404 Page Background Image"
				/>
			</Style.CoverImage>

			<Style.Content>
				<ErrorContainer />
			</Style.Content>
		</Style.Error>
	);
}
