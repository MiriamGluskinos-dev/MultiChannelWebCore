import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Breadcrumbs as Breadcrumbs$1 } from '@igds/core-web/breadcrumbs';
export { Breadcrumbs as BreadcrumbsWC } from '@igds/core-web/breadcrumbs';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const BreadcrumbsComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.breadcrumbs,
  elementClass: Breadcrumbs$1,
  events: {
    onIgdsExpand: IGDS_EVENTS.expand,
    onIgdsNavigate: IGDS_EVENTS.navigate
  }
});
const Breadcrumbs = forwardRef((props, ref) => {
  return jsx(BreadcrumbsComponent, {
    ...props,
    ref: ref
  });
});

export { Breadcrumbs };
