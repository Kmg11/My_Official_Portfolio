import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { Components } from '../../../../styles';
import * as Style from './SocialLinks.style';

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.7,
    originX: 0,
  },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function SocialLinks({ data, isPending }) {
  const icons = {
    Github: faGithubSquare,
    Linkedin: faLinkedin,
    Email: faEnvelopeSquare,
    Facebook: faFacebookSquare,
  };

  const socialLinksSkeletonList = [...new Array(4).keys()].map((link) => (
    <Style.Item key={link}>
      <Components.SkeletonLoadingBox width="28px" height="28px" />
    </Style.Item>
  ));

  const socialLinksList =
    data &&
    data.social_links.map((link, index) => (
      <Style.Item
        key={link.id}
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.9 + index / 3 }}
      >
        <Style.Link
          href={link.website === 'Email' ? `mailto:${link.link}` : link.link}
          target="_blank"
          rel="noreferrer"
          aria-label={link.website}
        >
          <FontAwesomeIcon icon={icons[link.website]} />
        </Style.Link>
      </Style.Item>
    ));

  return isPending ? (
    <Style.SocialLinks>{socialLinksSkeletonList}</Style.SocialLinks>
  ) : (
    <Style.SocialLinks>{socialLinksList}</Style.SocialLinks>
  );
}

SocialLinks.propTypes = {
  data: PropTypes.object,
  isPending: PropTypes.bool.isRequired,
};
