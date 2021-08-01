import { Helmet } from "react-helmet";
import { Navbar } from "../../Components/Navbar/Navbar";

export function Project() {
	return (
		<div>
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
			
			<Navbar />
		</div>
	);
}
