import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Icon as Icon$1 } from '@igds/core-web/icon';
export { Icon as IconWC } from '@igds/core-web/icon';
import { IGDS_TAGS } from '@igds/core-web/constants';

const IconComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.icon,
  elementClass: Icon$1
});
const Icon = forwardRef((props, ref) => {
  return jsx(IconComponent, {
    ...props,
    ref: ref
  });
});

export { Icon };
