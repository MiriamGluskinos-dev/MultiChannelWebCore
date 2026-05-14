import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { BreadcrumbItem as BreadcrumbItem$1 } from '@igds/core-web/breadcrumbs';
export { BreadcrumbItem as BreadcrumbItemWC } from '@igds/core-web/breadcrumbs';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const BreadcrumbItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.breadcrumbItem,
  elementClass: BreadcrumbItem$1,
  events: {
    onIgdsNavigate: IGDS_EVENTS.navigate
  }
});
const BreadcrumbItem = forwardRef((props, ref) => {
  return jsx(BreadcrumbItemComponent, {
    ...props,
    ref: ref
  });
});

export { BreadcrumbItem };
