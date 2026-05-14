import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { StepItem as StepItem$1 } from '@igds/core-web/step-indicator';
export { StepItem as StepItemWC } from '@igds/core-web/step-indicator';
import { IGDS_TAGS } from '@igds/core-web/constants';

const StepItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.stepItem,
  elementClass: StepItem$1
});
const StepItem = forwardRef((props, ref) => {
  return jsx(StepItemComponent, {
    ...props,
    ref: ref
  });
});

export { StepItem };
