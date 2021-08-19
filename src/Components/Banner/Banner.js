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

export function Banner({ response }) {
	const {
		data: { name, description, social_links },
	} = response;

	const icons = {
		Github: faGithubSquare,
		Linkedin: faLinkedin,
		Email: faEnvelopeSquare,
		Behance: faBehanceSquare,
		Facebook: faFacebookSquare,
	};

	const socialLinksList = social_links.map((link) => {
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
		<Style.Banner>
			<Style.Row>
				<Style.ImageContainer>
					<Style.Image
						src={`${Images.GLOBAL}/personal-image.webp`}
						alt={name}
					/>
				</Style.ImageContainer>

				<Style.Info>
					<Style.Name>{name}</Style.Name>
					<Style.Description>{description}</Style.Description>
					<Style.SocialLinks>{socialLinksList}</Style.SocialLinks>
				</Style.Info>
			</Style.Row>
		</Style.Banner>
	);
}
