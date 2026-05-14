import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { SegmentedControl as SegmentedControl$1 } from '@igds/core-web/segmented-control';
export { SegmentedControl as SegmentedControlWC } from '@igds/core-web/segmented-control';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const SegmentedControlComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.segmentedControl,
  elementClass: SegmentedControl$1,
  events: {
    onIgdsChange: IGDS_EVENTS.change
  }
});
const SegmentedControl = forwardRef((props, ref) => {
  return jsx(SegmentedControlComponent, {
    ...props,
    ref: ref
  });
});

export { SegmentedControl };
