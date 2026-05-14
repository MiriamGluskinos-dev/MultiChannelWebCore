import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Badge as Badge$1 } from '@igds/core-web/badge';
export { Badge as BadgeWC } from '@igds/core-web/badge';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const BadgeComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.badge,
  elementClass: Badge$1,
  events: {
    onIgdsClick: IGDS_EVENTS.click,
    onIgdsChange: IGDS_EVENTS.change
  }
});
const Badge = forwardRef((props, ref) => {
  return jsx(BadgeComponent, {
    ...props,
    ref: ref
  });
});

export { Badge };
