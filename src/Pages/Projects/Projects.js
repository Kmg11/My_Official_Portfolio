import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ProjectsContainer } from "../../Components/ProjectsContainer/ProjectsContainer";
import * as Style from "./Projects.style";

export function Projects() {
	const [navWidthState, setNavWidthState] = useState();
	const navWidth = useRef();

	useEffect(() => {
		setNavWidthState(navWidth.current.offsetWidth);
	}, []);

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

			<Style.Content navWidth={navWidthState}>
				<Navbar ref={navWidth} />
				<ProjectsContainer navWidthState={navWidthState} />
			</Style.Content>
		</Style.Projects>
	);
}
