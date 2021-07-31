import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useFetchGet } from "../../Hooks/useFetchGet";
import { HomeStyle } from "./Home.style";
import { Banner } from "../../Components/Banner/Banner";
import { APIContext } from "../../App";

export function Home() {
	const API = useContext(APIContext);
	const { data, success } = useFetchGet(API.info);

	return (
		<HomeStyle>
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

			<Banner response={{ data, success }} />
		</HomeStyle>
	);
}
