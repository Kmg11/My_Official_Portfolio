import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useFetchGet } from "../../Hooks/useFetchGet";
import * as Style from "./Home.style";
import { APIContext } from "../../App";
import { Banner } from "../../Components/Banner/Banner";

export function Home() {
	const API = useContext(APIContext);
	const { data, success } = useFetchGet(API.info);

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
			</Style.Content>
		</Style.Home>
	);
}
