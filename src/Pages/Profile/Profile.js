import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Components } from "../../Style/";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ProfileContainer } from "../../Components/ProfileContainer/ProfileContainer";
import * as Style from "./Profile.style";

export function Profile() {
	const navbarWidth = useSelector((state) => state.navbarSize.width);
	const navbarHeight = useSelector((state) => state.navbarSize.height);

	return (
		<div>
			<Helmet>
				<title>Kirolos Mahfouz | Profile</title>
				<meta
					name="description"
					content="Kirolos Mahfouz | Frontend Web Devolper Portfolio Profile Page"
				/>
				<meta
					name="keywords"
					content="Frontend, Web Devolper, Programming, Portfolio, Kirolos Mahfouz, Web, HTML, HTML5, CSS, CSS3, Javascript, jQuery, Bootstrap, Sass, Pug, Gulp, Git, Github, React, Redux, CLI"
				/>
			</Helmet>

			<Style.Content navbarWidth={navbarWidth} navbarHeight={navbarHeight}>
				<Navbar />

				<Components.Container>
					<ProfileContainer />
				</Components.Container>
			</Style.Content>
		</div>
	);
}
