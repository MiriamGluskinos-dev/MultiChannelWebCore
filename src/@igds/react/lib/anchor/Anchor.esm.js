import { jsx } from 'react/jsx-runtime';
import { createComponent } from '@lit/react';
import React__default, { forwardRef } from 'react';
import { Anchor as Anchor$1 } from '@igds/core-web/anchor';
export { Anchor as AnchorWC } from '@igds/core-web/anchor';
import { IGDS_TAGS } from '@igds/core-web/constants';

const AnchorItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.anchor,
  elementClass: Anchor$1
});
const Anchor = forwardRef((props, ref) => {
  return jsx(AnchorItemComponent, {
    ...props,
    ref: ref
  });
});

export { Anchor };
