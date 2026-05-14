import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { ProgressBar as ProgressBar$1 } from '@igds/core-web/progress-bar';
export { ProgressBar as ProgressBarWC } from '@igds/core-web/progress-bar';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const ProgressBarComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.progressBar,
  elementClass: ProgressBar$1,
  events: {
    onIgdsComplete: IGDS_EVENTS.complete
  }
});
const ProgressBar = forwardRef((props, ref) => {
  return jsx(ProgressBarComponent, {
    ...props,
    ref: ref
  });
});

export { ProgressBar };
