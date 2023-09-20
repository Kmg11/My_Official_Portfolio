import React from 'react';
import { ROUTES } from '../../../../constants';
import * as Style from './Info.style';
import { useInfo } from '../InfoContext';

export function Go() {
  const { id, type, title } = useInfo();

  return <Style.Go to={`${ROUTES.PROJECT}/${type}/${id}`} aria-label={`Go To ${title} Page`} />;
}
