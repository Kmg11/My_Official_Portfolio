import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Style from './Box.style';
import { SubTitle } from '../SubTitle/SubTitle';
import { SkeletonBox, SkeletonText } from '../skeletons';

const boxVariants = {
  hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function Box({ title, icon, isPending, data, section, isLink = false }) {
  const SkeletonLoading =
    isPending &&
    [...new Array(4).keys()].map((item) => (
      <Style.Item key={item}>
        <SkeletonBox width="20px" height="20px" />
        <SkeletonText width="100%" />
      </Style.Item>
    ));

  return !isPending && data && data[section] ? (
    <Style.Box variants={boxVariants} initial="hidden" animate="visible" exit="hidden">
      <SubTitle>{title}</SubTitle>

      <Style.List>
        {data[section].map((item, index) => (
          <Style.Item key={index}>
            <Style.Icon>
              <FontAwesomeIcon icon={icon} fixedWidth />
            </Style.Icon>

            {isLink ? (
              <Style.Link key={index} href={item.link} target="_blank" rel="noreferrer">
                {item.name}
              </Style.Link>
            ) : (
              <Style.Text>{item}</Style.Text>
            )}
          </Style.Item>
        ))}
      </Style.List>
    </Style.Box>
  ) : (
    isPending && (
      <Style.Box>
        <SubTitle>
          <SkeletonText head width="100px" />
        </SubTitle>

        <Style.List>{SkeletonLoading}</Style.List>
      </Style.Box>
    )
  );
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  isPending: PropTypes.bool.isRequired,
  data: PropTypes.object,
  section: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
};
