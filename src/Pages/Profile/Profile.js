import { useFetchGet } from "../../Hooks/Fetch/useFetchGet";
import { Apis } from "../../Constants";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Components } from "../../Style/";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ProfileContainer } from "../../Components/ProfileContainer/ProfileContainer";
import * as Style from "./Profile.style";

export function Profile() {
	const response = useFetchGet(Apis.INFO);
	const { data: info } = response;

	const navbarWidth = useSelector((state) => state.navbarSize.width);
	const navbarHeight = useSelector((state) => state.navbarSize.height);

	return (
		<>
			{info && (
				<Helmet>
					<title>{info.name} | Profile</title>
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
				<Style.Content navbarWidth={navbarWidth} navbarHeight={navbarHeight}>
					<Navbar />

					<Components.Container>
						<ProfileContainer response={response} />
					</Components.Container>
				</Style.Content>
			)}
		</>
	);
}
