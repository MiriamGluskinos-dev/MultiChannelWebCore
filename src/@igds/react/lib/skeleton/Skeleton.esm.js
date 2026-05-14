import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Skeleton as Skeleton$1 } from '@igds/core-web/skeleton';
export { Skeleton as SkeletonWC } from '@igds/core-web/skeleton';
import { IGDS_TAGS } from '@igds/core-web/constants';

const SkeletonComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.skeleton,
  elementClass: Skeleton$1
});
const Skeleton = forwardRef((props, ref) => {
  return jsx(SkeletonComponent, {
    ...props,
    ref: ref
  });
});

export { Skeleton };
