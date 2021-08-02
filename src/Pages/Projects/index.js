import { Helmet } from "react-helmet";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ProjectsContainer } from "../../Components/ProjectsContainer/ProjectsContainer";
import * as Style from "./Projects.style";

export function Projects() {
	return (
		<Style.Projects>
			<Helmet>
				<title>Kirolos Mahfouz | Projects</title>
				<meta
					name="description"
					content="Kirolos Mahfouz | Frontend Web Devolper Portfolio Projects Page"
				/>
				<meta
					name="keywords"
					content="Frontend, Web Devolper, Programming, Portfolio, Kirolos Mahfouz, Web, HTML, HTML5, CSS, CSS3, Javascript, jQuery, Bootstrap, Sass, Pug, Gulp, Git, Github, React, Redux, CLI"
				/>
			</Helmet>

			<Style.Content>
				<Navbar />
				<ProjectsContainer />
			</Style.Content>
		</Style.Projects>
	);
}
