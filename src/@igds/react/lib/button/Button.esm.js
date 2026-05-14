import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Button as Button$1 } from '@igds/core-web/button';
export { Button as ButtonWC } from '@igds/core-web/button';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const ButtonComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.button,
  elementClass: Button$1,
  events: {
    onIgdsClick: IGDS_EVENTS.click,
    onIgdsFocus: IGDS_EVENTS.focus,
    onIgdsBlur: IGDS_EVENTS.blur,
    onIgdsKeydown: IGDS_EVENTS.keydown,
    onIgdsKeyup: IGDS_EVENTS.keyup
  }
});
const Button = forwardRef((props, ref) => {
  return jsxs(ButtonComponent, {
    ...props,
    ref: ref,
    children: [props.icon && jsx("div", {
      slot: "icon",
      children: props.icon
    }), props.secondIcon && jsx("div", {
      slot: "second-icon",
      children: props.secondIcon
    }), props.children !== undefined && props.children]
  });
});

export { Button };
