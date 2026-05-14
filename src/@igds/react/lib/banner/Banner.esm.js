import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Banner as Banner$1 } from '@igds/core-web/banner';
export { Banner as BannerWC } from '@igds/core-web/banner';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const BannerComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.banner,
  elementClass: Banner$1,
  events: {
    onIgdsClick: IGDS_EVENTS.click,
    onIgdsFooterClick: IGDS_EVENTS.footerClick
  }
});
const Banner = forwardRef((props, ref) => {
  return jsx(BannerComponent, {
    ...props,
    ref: ref
  });
});

export { Banner };
