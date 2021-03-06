import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ProjectsContainer } from "../../Components/ProjectsContainer/ProjectsContainer";
import * as Style from "./Projects.style";

export function Projects() {
	const navbarWidth = useSelector((state) => state.navbarSize.width);
	const navbarHeight = useSelector((state) => state.navbarSize.height);

	const title = `Projects | Kirolos Mahfouz`;
	const description =
		"Kirolos Mahfouz | Frontend Web Devolper Portfolio Projects Page";

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta
					name="keywords"
					content="Frontend, Web Devolper, Programming, Portfolio, Kirolos Mahfouz, Web, HTML, HTML5, CSS, CSS3, Javascript, jQuery, Bootstrap, Sass, Pug, Gulp, Git, Github, React, Redux, CLI"
				/>

				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
			</Helmet>

			<Style.Content navbarWidth={navbarWidth} navbarHeight={navbarHeight}>
				<Navbar />
				<ProjectsContainer />
			</Style.Content>
		</>
	);
}
