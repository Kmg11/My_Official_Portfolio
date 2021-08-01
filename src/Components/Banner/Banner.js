import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

import {
	faGithubSquare,
	faLinkedin,
	faBehanceSquare,
	faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import * as Style from "./Banner.style";
import { PROJECTS } from "../../Constants/Router";

export function Banner({ response: { data, success } }) {
	const icons = {
		Github: faGithubSquare,
		Linkedin: faLinkedin,
		Email: faEnvelopeSquare,
		Behance: faBehanceSquare,
		Facebook: faFacebookSquare,
	};

	const socialLinksList =
		success &&
		data.social_links.map((link) => {
			return (
				<Style.Item key={link.id}>
					<Style.ItemLink
						href={link.website === "Email" ? `mailto:${link.link}` : link.link}
						target="_blank"
					>
						<FontAwesomeIcon icon={icons[link.website]} />
					</Style.ItemLink>
				</Style.Item>
			);
		});

	return (
		success && (
			<Style.Banner>
				<Style.Row>
					<Style.ImageContainer>
						<Style.Image src={data.image} alt={data.name} />
					</Style.ImageContainer>

					<Style.Info>
						<Style.Name>{data.name}</Style.Name>
						<Style.Description>{data.description}</Style.Description>
						<Style.SocialLinks>{socialLinksList}</Style.SocialLinks>
					</Style.Info>
				</Style.Row>

				<Style.Button to={PROJECTS}>
					<Style.Arrows>
						<Style.Arrow></Style.Arrow>
						<Style.Arrow></Style.Arrow>
						<Style.Arrow></Style.Arrow>
					</Style.Arrows>
				</Style.Button>
			</Style.Banner>
		)
	);
}
