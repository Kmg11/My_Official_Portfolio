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
						rel="noreferrer"
						aria-label={link.website}
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
						<Style.Image
							src={`${Images.GLOBAL}/${data.image}`}
							alt={data.name}
						/>
					</Style.ImageContainer>

					<Style.Info>
						<Style.Name>{data.name}</Style.Name>
						<Style.Description>{data.description}</Style.Description>
						<Style.SocialLinks>{socialLinksList}</Style.SocialLinks>
					</Style.Info>
				</Style.Row>
			</Style.Banner>
		)
	);
}
