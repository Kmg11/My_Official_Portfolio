import { Helmet } from "react-helmet-async";
import { Navbar } from "../../Components/Navbar/Navbar";
import { SingleProject } from "../../Components/SingleProject/SingleProject";
import * as Style from "./Project.style";

export function Project() {
	return (
		<>
			<Helmet>
				<title>Kirolos Mahfouz | Project</title>
				<meta
					name="description"
					content="Kirolos Mahfouz | Frontend Web Devolper Portfolio Project Page"
				/>
				<meta
					name="keywords"
					content="Frontend, Web Devolper, Programming, Portfolio, Kirolos Mahfouz, Web, HTML, HTML5, CSS, CSS3, Javascript, jQuery, Bootstrap, Sass, Pug, Gulp, Git, Github, React, Redux, CLI"
				/>
			</Helmet>

			<Style.Content>
				<Navbar />
				<SingleProject />
			</Style.Content>
		</>
	);
}
