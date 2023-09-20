import { breakpointsSizes } from './breakpointsSizes';

const minMedia = (size) => `@media (min-width: ${size})`;
const maxMedia = (size) => `@media (max-width: ${size})`;

const SIZES = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
};

function up(size) {
  switch (size) {
    case SIZES.SM:
      return minMedia(breakpointsSizes.minSM);
    case SIZES.MD:
      return minMedia(breakpointsSizes.minMD);
    case SIZES.LG:
      return minMedia(breakpointsSizes.minLG);
    case SIZES.XL:
      return minMedia(breakpointsSizes.minXL);
    default:
      return false;
  }
}

function down(size) {
  switch (size) {
    case SIZES.XS:
      return maxMedia(breakpointsSizes.maxXS);
    case SIZES.SM:
      return maxMedia(breakpointsSizes.maxSM);
    case SIZES.MD:
      return maxMedia(breakpointsSizes.maxMD);
    case SIZES.LG:
      return maxMedia(breakpointsSizes.maxLG);
    default:
      return false;
  }
}

function only(size) {
  switch (size) {
    case SIZES.XS:
      return down(SIZES.XS);
    case SIZES.SM:
      return `${up(SIZES.SM)} and ${down(SIZES.SM).replace('@media ', '')}`;
    case SIZES.MD:
      return `${up(SIZES.MD)} and ${down(SIZES.MD).replace('@media ', '')}`;
    case SIZES.LG:
      return `${up(SIZES.LG)} and ${down(SIZES.LG).replace('@media ', '')}`;
    case SIZES.XL:
      return up(SIZES.XL);
    default:
      return false;
  }
}

export const breakpoints = {
  up,
  down,
  only,
};
