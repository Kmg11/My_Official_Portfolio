import { theme } from '../theme';

const minMedia = (size) => `@media (min-width: ${size})`;
const maxMedia = (size) => `@media (max-width: ${size})`;

export function mediaBreakpointUp(size) {
  switch (size) {
    case 'sm':
      return minMedia(theme.breakpoints.minSM);
    case 'md':
      return minMedia(theme.breakpoints.minMD);
    case 'lg':
      return minMedia(theme.breakpoints.minLG);
    case 'xl':
      return minMedia(theme.breakpoints.minXL);
    default:
      return false;
  }
}

export function mediaBreakpointDown(size) {
  switch (size) {
    case 'xs':
      return maxMedia(theme.breakpoints.maxXS);
    case 'sm':
      return maxMedia(theme.breakpoints.maxSM);
    case 'md':
      return maxMedia(theme.breakpoints.maxMD);
    case 'lg':
      return maxMedia(theme.breakpoints.maxLG);
    default:
      return false;
  }
}

export function mediaBreakpointOnly(size) {
  switch (size) {
    case 'xs':
      return mediaBreakpointDown('xs');
    case 'sm':
      return `${mediaBreakpointUp('sm')} and ${mediaBreakpointDown('sm').replace('@media ', '')}`;
    case 'md':
      return `${mediaBreakpointUp('md')} and ${mediaBreakpointDown('md').replace('@media ', '')}`;
    case 'lg':
      return `${mediaBreakpointUp('lg')} and ${mediaBreakpointDown('lg').replace('@media ', '')}`;
    case 'xl':
      return mediaBreakpointUp('xl');
    default:
      return false;
  }
}
