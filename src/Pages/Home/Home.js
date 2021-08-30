import { Helmet } from "react-helmet-async";
import { useFetchGet } from "../../Hooks/Fetch/useFetchGet";
import { CreateImage } from "../../Components/CreateImage/CreateImage";
import { Apis, Images } from "../../Constants";
import { Banner } from "../../Components/Banner/Banner";
import { NextButton } from "../../Components/NextButton/NextButton";
import * as Style from "./Home.style";

export function Home() {
	const response = useFetchGet(Apis.INFO);
	const { data: info } = response;

	const title = info && `Home | ${info.name}`;
	const description = info && info.description;

	return (
		<Style.Home>
			{info && (
				<Helmet>
					<title>{title}</title>
					<meta name="description" content={description} />
					<meta
						name="keywords"
						content="Frontend, Web Devolper, Programming, Portfolio, Kirolos Mahfouz, Web, HTML, HTML5, CSS, CSS3, Javascript, jQuery, Bootstrap, Sass, Pug, Gulp, Git, Github, React, Redux, CLI"
					/>

					<meta property="og:title" content={title} />
					<meta property="og:description" content={description} />
					<meta
						property="og:image"
						content={`${Images.GLOBAL}/personal-image.png`}
					/>
				</Helmet>
			)}

			<Style.CoverImage>
				<CreateImage src={`${Images.HOME}/background`} alt="Background Image" />
			</Style.CoverImage>

			<Style.Content>
				<Banner response={response} />
				<NextButton />
			</Style.Content>
		</Style.Home>
	);
}
