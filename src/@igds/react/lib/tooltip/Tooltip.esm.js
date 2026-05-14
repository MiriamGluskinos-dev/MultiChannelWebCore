import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Tooltip as Tooltip$1 } from '@igds/core-web/tooltip';
export { Tooltip as TooltipWC } from '@igds/core-web/tooltip';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const TooltipComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.tooltip,
  elementClass: Tooltip$1,
  events: {
    onIgdsHide: IGDS_EVENTS.hide,
    onIgdsShow: IGDS_EVENTS.show
  }
});
const Tooltip = forwardRef((props, ref) => {
  return jsxs(TooltipComponent, {
    ...props,
    ref: ref,
    children: [props.htmlContent !== undefined && jsx("div", {
      slot: "content",
      children: props.htmlContent
    }), props.children !== undefined && props.children]
  });
});

export { Tooltip };
