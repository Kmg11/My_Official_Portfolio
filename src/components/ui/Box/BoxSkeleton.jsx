import React from 'react';
import { SubTitle } from '../SubTitle/SubTitle';
import { SkeletonBox, SkeletonText } from '../skeletons';
import * as Style from './Box.style';

export function BoxSkeleton() {
  return (
    <Style.Box>
      <SubTitle>
        <SkeletonText head width="100px" />
      </SubTitle>

      <Style.List>
        {[...new Array(4).keys()].map((item) => (
          <Style.Item key={item}>
            <SkeletonBox width="20px" height="20px" />
            <SkeletonText width="100%" />
          </Style.Item>
        ))}
      </Style.List>
    </Style.Box>
  );
}
