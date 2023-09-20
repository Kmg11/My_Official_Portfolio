import { Breakpoints } from '../Variables';

const minMedia = (size) => `@media (min-width: ${size})`;
const maxMedia = (size) => `@media (max-width: ${size})`;

export function mediaBreakpointUp(size) {
  switch (size) {
    case 'sm':
      return minMedia(Breakpoints.minSM);
    case 'md':
      return minMedia(Breakpoints.minMD);
    case 'lg':
      return minMedia(Breakpoints.minLG);
    case 'xl':
      return minMedia(Breakpoints.minXL);
    default:
      return false;
  }
}

export function mediaBreakpointDown(size) {
  switch (size) {
    case 'xs':
      return maxMedia(Breakpoints.maxXS);
    case 'sm':
      return maxMedia(Breakpoints.maxSM);
    case 'md':
      return maxMedia(Breakpoints.maxMD);
    case 'lg':
      return maxMedia(Breakpoints.maxLG);
    default:
      return false;
  }
}

export function mediaBreakpointOnly(size) {
  switch (size) {
    case 'xs':
      return mediaBreakpointDown('xs');
    case 'sm':
      return `${mediaBreakpointUp('sm')} and ${mediaBreakpointDown(
        'sm',
      ).replace('@media ', '')}`;
    case 'md':
      return `${mediaBreakpointUp('md')} and ${mediaBreakpointDown(
        'md',
      ).replace('@media ', '')}`;
    case 'lg':
      return `${mediaBreakpointUp('lg')} and ${mediaBreakpointDown(
        'lg',
      ).replace('@media ', '')}`;
    case 'xl':
      return mediaBreakpointUp('xl');
    default:
      return false;
  }
}
