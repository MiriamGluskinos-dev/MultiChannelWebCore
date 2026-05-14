import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Divider as Divider$1 } from '@igds/core-web/divider';
export { Divider as DividerWC } from '@igds/core-web/divider';
import { IGDS_TAGS } from '@igds/core-web/constants';

const DividerComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.divider,
  elementClass: Divider$1
});
const Divider = forwardRef((props, ref) => {
  return jsx(DividerComponent, {
    ...props,
    ref: ref
  });
});

export { Divider };
