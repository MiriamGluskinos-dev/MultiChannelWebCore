import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Footer as Footer$1 } from '@igds/core-web/footer';
export { Footer as FooterWC } from '@igds/core-web/footer';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const FooterComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.footer,
  elementClass: Footer$1,
  events: {
    onIgdsLogoClick: IGDS_EVENTS.logoClick,
    onIgdsSubmit: IGDS_EVENTS.submit
  }
});
const Footer = forwardRef((props, ref) => {
  return jsx(FooterComponent, {
    ...props,
    ref: ref
  });
});

export { Footer };
