import { Helmet } from "react-helmet-async";
import { useFetchGet } from "../../Hooks/Fetch/useFetchGet";
import { CreateImage } from "../../Components/CreateImage/CreateImage";
import { Apis, Images } from "../../Constants";
import { Banner } from "../../Components/Banner/Banner";
import { NextButton } from "../../Components/Buttons/Next/Next";
import * as Style from "./Home.style";

const homeVariants = {
	hidden: { opacity: 0, scale: 1.2 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
	exit: {
		scale: 1.2,
		opacity: 0,
		transition: { duration: 0.5 },
	},
};

export function Home() {
	const response = useFetchGet(Apis.INFO);
	const { data: info } = response;

	const title = info && `Home | ${info.name}`;
	const description = info && info.description;

	return (
		<Style.Home>
			{info && (
				<Helmet>
					<title>{title}</title>
					<meta name="description" content={description} />
					<meta
						name="keywords"
						content="Frontend, Web Devolper, Programming, Portfolio, Kirolos Mahfouz, Web, HTML, HTML5, CSS, CSS3, Javascript, jQuery, Bootstrap, Sass, Pug, Gulp, Git, Github, React, Redux, CLI"
					/>

					<meta property="og:title" content={title} />
					<meta property="og:description" content={description} />
					<meta
						property="og:image"
						content={`${Images.GLOBAL}/personal-image.png`}
					/>
				</Helmet>
			)}

			<Style.CoverImage
				variants={homeVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<CreateImage
					src={`${Images.HOME}/background`}
					alt="Home Background Image"
				/>
			</Style.CoverImage>

			<Style.Content>
				<Banner response={response} />
				{info && <NextButton />}
			</Style.Content>
		</Style.Home>
	);
}
