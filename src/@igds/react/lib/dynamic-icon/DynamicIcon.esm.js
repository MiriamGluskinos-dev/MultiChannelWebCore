import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { DynamicIcon as DynamicIcon$1 } from '@igds/core-web/dynamic-icon';
export { DynamicIcon as DynamicIconWC } from '@igds/core-web/dynamic-icon';
import { IGDS_TAGS } from '@igds/core-web/constants';

const DynamicIconComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.dynamicIcon,
  elementClass: DynamicIcon$1
});
const DynamicIcon = forwardRef((props, ref) => {
  return jsx(DynamicIconComponent, {
    ...props,
    ref: ref
  });
});
DynamicIcon.displayName = 'DynamicIcon';

export { DynamicIcon };
