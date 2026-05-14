import { jsx } from 'react/jsx-runtime';
import { createComponent } from '@lit/react';
import React__default, { forwardRef } from 'react';
import { SpinBox as SpinBox$1 } from '@igds/core-web/spin-box';
export { SpinBox as SpinBoxWC } from '@igds/core-web/spin-box';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const SpinBoxComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.spinBox,
  elementClass: SpinBox$1,
  events: {
    onIgdsChange: IGDS_EVENTS.change,
    onIgdsInput: IGDS_EVENTS.input,
    onIgdsFocus: IGDS_EVENTS.focus,
    onIgdsBlur: IGDS_EVENTS.blur
  }
});
const SpinBox = forwardRef((props, ref) => {
  return jsx(SpinBoxComponent, {
    ...props,
    ref: ref
  });
});

export { SpinBox };
