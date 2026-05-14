import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Header as Header$1 } from '@igds/core-web/header';
export { Header as HeaderWC } from '@igds/core-web/header';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const HeaderComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.header,
  elementClass: Header$1,
  events: {
    onIgdsLogoClick: IGDS_EVENTS.logoClick
  }
});
const Header = forwardRef((props, ref) => {
  return jsx(HeaderComponent, {
    ...props,
    ref: ref
  });
});

export { Header };
