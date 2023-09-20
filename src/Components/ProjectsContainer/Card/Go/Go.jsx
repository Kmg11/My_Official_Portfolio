import React from 'react';
import { Routes } from '../../../../Constants';
import * as Style from './Info.style';
import { useInfo } from '../InfoContext';

export function Go() {
  const { id, type, title } = useInfo();

  return <Style.Go to={`${Routes.PROJECT}/${type}/${id}`} aria-label={`Go To ${title} Page`} />;
}
