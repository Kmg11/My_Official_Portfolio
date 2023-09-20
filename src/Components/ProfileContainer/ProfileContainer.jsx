import PropTypes from 'prop-types';
import { Banner } from '../Banner/Banner';
import { Summary } from './Summary/Summary';
import { Skills } from './Skills/Skills';
import { Languages } from './Languages/Languages';
import * as Style from './ProfileContainer.style';
import { Experience } from './Experience/Experience';

const containerVariants = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

export function ProfileContainer({ response }) {
  return (
    <Style.ProfileContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Style.BannerContainer>
        <Banner response={response} />
      </Style.BannerContainer>

      <Summary response={response} />
      <Experience response={response} />
      <Skills response={response} />
      <Languages response={response} />
      {/* <Cv response={response} /> */}
    </Style.ProfileContainer>
  );
}

ProfileContainer.propTypes = {
  response: PropTypes.object.isRequired,
};
