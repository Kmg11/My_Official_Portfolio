import { faHome, faUserAlt, faWrench } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Components } from '../../Style';
import { Routes } from '../../Constants';
import { CircleButtons, Button } from '../Buttons/Circle/Circle';
import * as Style from './ErrorContainer.style';

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
      <Components.Container>
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
              <Button name={Routes.HOME} icon={faHome}>
                Home
              </Button>
              <Button name={Routes.PROJECTS} icon={faWrench}>
                Projects
              </Button>
              <Button name={Routes.PROFILE} icon={faUserAlt}>
                Profile
              </Button>
            </CircleButtons>
          </motion.div>
        </Style.Inner>
      </Components.Container>
    </Style.ErrorContainer>
  );
}
