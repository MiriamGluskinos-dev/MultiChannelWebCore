import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { TagGroup as TagGroup$1 } from '@igds/core-web/tag';
export { TagGroup as TagGroupWC } from '@igds/core-web/tag';
import { IGDS_TAGS } from '@igds/core-web/constants';

const TagGroupComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.tagGroup,
  elementClass: TagGroup$1
});
const TagGroup = forwardRef((props, ref) => {
  return jsx(TagGroupComponent, {
    ...props,
    ref: ref
  });
});

export { TagGroup };
