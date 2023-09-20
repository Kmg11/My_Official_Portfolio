import { ROUTES } from '../../../constants';
import * as Style from './Next.style';

const nextVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotate: -90,
    transition: { duration: 0.5 },
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: -90,
    transition: { duration: 0.7, delay: 0.3 },
  },
};

export function NextButton() {
  return (
    <Style.NextButton to={ROUTES.PROJECTS} aria-label="Go To Projects Page">
      <Style.Arrows variants={nextVariants} initial="hidden" animate="visible" exit="hidden">
        <Style.Arrow />
        <Style.Arrow />
        <Style.Arrow />
      </Style.Arrows>
    </Style.NextButton>
  );
}
