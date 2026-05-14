import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Segment as Segment$1 } from '@igds/core-web/segmented-control';
export { Segment as SegmentWC } from '@igds/core-web/segmented-control';
import { IGDS_TAGS } from '@igds/core-web/constants';

const SegmentComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.segment,
  elementClass: Segment$1
});
const Segment = forwardRef((props, ref) => {
  return jsx(SegmentComponent, {
    ...props,
    ref: ref
  });
});

export { Segment };
