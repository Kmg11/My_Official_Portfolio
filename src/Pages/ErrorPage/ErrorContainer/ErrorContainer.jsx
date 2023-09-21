import { faHome, faUserAlt, faWrench } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ROUTES } from '../../../constants';
import { CircleButtons, CircleButton } from '../../../components';
import * as Style from './ErrorContainer.style';
import { Container } from '../../../layouts';

const allVariants = {
  hidden: { opacity: 0, y: 20, scale: 1.1 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export function ErrorContainer() {
  return (
    <Style.ErrorContainer initial="hidden" animate="visible">
      <Container>
        <Style.Inner>
          <Style.Title variants={allVariants} transition={{ duration: 0.5, delay: 0.1 }}>
            oops!
          </Style.Title>
          <Style.Type variants={allVariants} transition={{ duration: 0.5, delay: 0.4 }}>
            404 - page not found
          </Style.Type>

          <Style.Description variants={allVariants} transition={{ duration: 0.5, delay: 0.8 }}>
            The page you are looking for might have been removed had it&apos;s name changed or is
            temporarily unavailable
          </Style.Description>

          <motion.div variants={allVariants} transition={{ duration: 0.5, delay: 1.2 }}>
            <CircleButtons isStatic>
              <CircleButton name={ROUTES.HOME} icon={faHome}>
                Home
              </CircleButton>
              <CircleButton name={ROUTES.PROJECTS} icon={faWrench}>
                Projects
              </CircleButton>
              <CircleButton name={ROUTES.PROFILE} icon={faUserAlt}>
                Profile
              </CircleButton>
            </CircleButtons>
          </motion.div>
        </Style.Inner>
      </Container>
    </Style.ErrorContainer>
  );
}
