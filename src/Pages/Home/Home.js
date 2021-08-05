import { Helmet } from "react-helmet-async";
import { useFetchGet } from "../../Hooks/Fetch/useFetchGet";
import { Apis } from "../../Constants";
import { Banner } from "../../Components/Banner/Banner";
import { NextButton } from "../../Components/NextButton/NextButton";
import * as Style from "./Home.style";

export function Home() {
	const { data, success } = useFetchGet(Apis.INFO);

	return (
		<Style.Home>
			<Helmet>
				<title>Kirolos Mahfouz | Home</title>
				<meta
					name="description"
					content="Kirolos Mahfouz | Frontend Web Devolper Portfolio Home Page"
				/>
				<meta
					name="keywords"
					content="Frontend, Web Devolper, Programming, Portfolio, Kirolos Mahfouz, Web, HTML, HTML5, CSS, CSS3, Javascript, jQuery, Bootstrap, Sass, Pug, Gulp, Git, Github, React, Redux, CLI"
				/>
			</Helmet>

			<Style.Content>
				<Banner response={{ data, success }} />
				<NextButton />
			</Style.Content>
		</Style.Home>
	);
}
