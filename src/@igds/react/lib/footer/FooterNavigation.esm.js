import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { FooterNavigation as FooterNavigation$1 } from '@igds/core-web/footer';
export { FooterNavigation as FooterNavigationWC } from '@igds/core-web/footer';
import { IGDS_TAGS } from '@igds/core-web/constants';

const FooterNavigationComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.footerNavigation,
  elementClass: FooterNavigation$1
});
const FooterNavigation = forwardRef((props, ref) => {
  return jsx(FooterNavigationComponent, {
    ...props,
    ref: ref
  });
});

export { FooterNavigation };
