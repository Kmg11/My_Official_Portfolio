import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../../Constants";
import * as Style from "./Banner.style";

import {
	faGithubSquare,
	faLinkedin,
	faBehanceSquare,
	faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

export function Banner() {
	const icons = {
		Github: faGithubSquare,
		Linkedin: faLinkedin,
		Email: faEnvelopeSquare,
		Behance: faBehanceSquare,
		Facebook: faFacebookSquare,
	};

	const data = [
		{
			id: 1,
			website: "Github",
			link: "https://github.com/Kmg11",
			icon: "faGithubSquare",
		},
		{
			id: 2,
			website: "Linkedin",
			link: "https://www.linkedin.com/in/kirolos-m-a29134165/",
			icon: "faLinkedin",
		},
		{
			id: 3,
			website: "Email",
			link: "kirolosmahfouz15@gmail.com",
			icon: "faEnvelopeSquare",
		},
		{
			id: 4,
			website: "Behance",
			link: "https://www.behance.net/kirolosmahfouz",
			icon: "faBehanceSquare",
		},
		{
			id: 5,
			website: "Facebook",
			link: "https://www.facebook.com/KirolosMahfouz/",
			icon: "faFacebookSquare",
		},
	];

	const socialLinksList =
		data &&
		data.map((link) => {
			return (
				<Style.Item key={link.id}>
					<Style.Link
						href={link.website === "Email" ? `mailto:${link.link}` : link.link}
						target="_blank"
						rel="noreferrer"
						aria-label={link.website}
					>
						<FontAwesomeIcon icon={icons[link.website]} />
					</Style.Link>
				</Style.Item>
			);
		});

	return (
		data && (
			<Style.Banner>
				<Style.Row>
					<Style.ImageContainer>
						<Style.Image
							src={`${Images.GLOBAL}/personal-image.webp`}
							alt="Kirolos Mahfouz Image"
						/>
					</Style.ImageContainer>

					<Style.Info>
						<Style.Name>Kirolos Mahfouz</Style.Name>
						<Style.Description>
							I'm Frontend Web Devolper With A Loot Of Skills & Technologies
						</Style.Description>
						<Style.SocialLinks>{socialLinksList}</Style.SocialLinks>
					</Style.Info>
				</Style.Row>
			</Style.Banner>
		)
	);
}
