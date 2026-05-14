import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { ToolbarItem as ToolbarItem$1 } from '@igds/core-web/rich-text-editor';
export { ToolbarItem as ToolbarItemWC } from '@igds/core-web/rich-text-editor';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const ToolbarItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.toolbarItem,
  elementClass: ToolbarItem$1,
  events: {
    onIgdsClick: IGDS_EVENTS.click
  }
});
const ToolbarItem = forwardRef((props, ref) => {
  return jsx(ToolbarItemComponent, {
    ...props,
    ref: ref
  });
});

export { ToolbarItem };
