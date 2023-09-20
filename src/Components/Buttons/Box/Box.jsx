import PropTypes from 'prop-types';
import * as Style from './Box.style';

export function BoxButtons({ page, setPage, info }) {
  return (
    <Style.Buttons numberOfButtons={info.length}>
      {info.map(({ pageType, text }) => (
        <Style.Button
          key={pageType}
          onClick={() => setPage(pageType)}
          active={page === pageType}
          numberOfButtons={info.length}
        >
          {text}
        </Style.Button>
      ))}
    </Style.Buttons>
  );
}

BoxButtons.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  info: PropTypes.arrayOf(
    PropTypes.shape({
      pageType: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
