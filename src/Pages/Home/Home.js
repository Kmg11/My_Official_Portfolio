import { Helmet } from "react-helmet-async";
import { useFetchGet } from "../../Hooks/Fetch/useFetchGet";
import { Apis } from "../../Constants";
import { Banner } from "../../Components/Banner/Banner";
import { NextButton } from "../../Components/NextButton/NextButton";
import * as Style from "./Home.style";

export function Home() {
	const response = useFetchGet(Apis.INFO);
	const { data: info } = response;

	return (
		<Style.Home>
			{info && (
				<Helmet>
					<title>{info.name} | Home</title>
					<meta
						name="description"
						content={`${info.name} | ${info.description}`}
					/>
					<meta
						name="keywords"
						content="Frontend, Web Devolper, Programming, Portfolio, Kirolos Mahfouz, Web, HTML, HTML5, CSS, CSS3, Javascript, jQuery, Bootstrap, Sass, Pug, Gulp, Git, Github, React, Redux, CLI"
					/>
				</Helmet>
			)}

			{info && (
				<Style.Content>
					<Banner response={response} />
					<NextButton />
				</Style.Content>
			)}
		</Style.Home>
	);
}
