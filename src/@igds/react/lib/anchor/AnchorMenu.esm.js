import { jsx } from 'react/jsx-runtime';
import { createComponent } from '@lit/react';
import React__default, { forwardRef } from 'react';
import { AnchorMenu as AnchorMenu$1 } from '@igds/core-web/anchor';
export { AnchorMenu as AnchorMenuWC } from '@igds/core-web/anchor';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const AnchorComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.anchorMenu,
  elementClass: AnchorMenu$1,
  events: {
    onIgdsClick: IGDS_EVENTS.click,
    onIgdsFocus: IGDS_EVENTS.focus,
    onIgdsBlur: IGDS_EVENTS.blur
  }
});
const AnchorMenu = forwardRef((props, ref) => {
  return jsx(AnchorComponent, {
    ...props,
    ref: ref
  });
});

export { AnchorMenu };
