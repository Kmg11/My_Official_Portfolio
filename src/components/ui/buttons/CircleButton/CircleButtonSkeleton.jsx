import React from 'react';
import { SkeletonBox, SkeletonText } from '../../skeletons';
import * as Style from './CircleButton.style';

export function CircleButtonSkeleton() {
  return (
    <Style.CircleButton className="button">
      <SkeletonBox width="40px" height="40px" radius="50%" />
      <SkeletonText width="60px" />
    </Style.CircleButton>
  );
}
