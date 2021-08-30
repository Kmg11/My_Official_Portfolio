import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { Components } from "../../../Style";
import * as Style from './SocialLinks.style'

export function SocialLinks({ data, isPending }) {
	const icons = {
		Github: faGithubSquare,
		Linkedin: faLinkedin,
		Email: faEnvelopeSquare,
		Facebook: faFacebookSquare,
	};

	const socialLinksSkeletonList = [...new Array(4).keys()].map((link) => {
		return (
			<Style.Item key={link}>
				<Components.SkeletonLoadingBox width="28px" height="28px" />
			</Style.Item>
		);
	});

	const socialLinksList =
		data &&
		data.social_links.map((link) => {
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
		<Style.SocialLinks>
			{isPending && socialLinksSkeletonList}
			{socialLinksList}
		</Style.SocialLinks>
	);
}
