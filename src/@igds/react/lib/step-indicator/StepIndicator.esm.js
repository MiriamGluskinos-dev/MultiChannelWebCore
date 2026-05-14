import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { StepIndicator as StepIndicator$1 } from '@igds/core-web/step-indicator';
export { StepIndicator as StepIndicatorWC } from '@igds/core-web/step-indicator';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const StepIndicatorComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.stepIndicator,
  elementClass: StepIndicator$1,
  events: {
    onIgdsChange: IGDS_EVENTS.change,
    onIgdsClick: IGDS_EVENTS.click
  }
});
const StepIndicator = forwardRef((props, ref) => {
  return jsx(StepIndicatorComponent, {
    ...props,
    ref: ref
  });
});

export { StepIndicator };
