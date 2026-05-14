import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Toast as Toast$1 } from '@igds/core-web/toast';
export { Toast as ToastWC } from '@igds/core-web/toast';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const ToastComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.toast,
  elementClass: Toast$1,
  events: {
    onIgdsClose: IGDS_EVENTS.close
  }
});
const Toast = forwardRef((props, ref) => {
  return jsx(ToastComponent, {
    ...props,
    ref: ref
  });
});

export { Toast };
