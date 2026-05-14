import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Tag as Tag$1 } from '@igds/core-web/tag';
export { Tag as TagWC } from '@igds/core-web/tag';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const TagComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.tag,
  elementClass: Tag$1,
  events: {
    onIgdsSelect: IGDS_EVENTS.select,
    onIgdsRemove: IGDS_EVENTS.remove
  }
});
const Tag = forwardRef((props, ref) => {
  return jsx(TagComponent, {
    ...props,
    ref: ref
  });
});

export { Tag };
