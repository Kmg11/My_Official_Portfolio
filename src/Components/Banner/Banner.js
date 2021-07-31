import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

import {
	faGithubSquare,
	faLinkedin,
	faBehanceSquare,
	faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import {
	BannerStyle,
	Row,
	ImageContainer,
	Image,
	Info,
	Name,
	Description,
	SocialLinks,
	Items,
	Link,
} from "./Banner.style";

export function Banner({ response: { data, success } }) {
	const icons = {
		Github: faGithubSquare,
		Linkedin: faLinkedin,
		Email: faEnvelopeSquare,
		Behance: faBehanceSquare,
		Facebook: faFacebookSquare,
	};

	return (
		<BannerStyle>
			{success && (
				<Row>
					<ImageContainer>
						<Image src={data.image} alt={data.name} />
					</ImageContainer>

					<Info>
						<Name>{data.name}</Name>
						<Description>{data.description}</Description>
						<SocialLinks>
							{data.social_links.map((link) => {
								return (
									<Items key={link.id}>
										<Link href={link.link} target="_blank">
											<FontAwesomeIcon icon={icons[link.website]} />
										</Link>
									</Items>
								);
							})}
						</SocialLinks>
					</Info>
				</Row>
			)}
		</BannerStyle>
	);
}
