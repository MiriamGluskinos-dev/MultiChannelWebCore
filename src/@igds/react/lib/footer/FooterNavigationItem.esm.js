import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { FooterNavigationItem as FooterNavigationItem$1 } from '@igds/core-web/footer';
export { FooterNavigationItem as FooterNavigationItemWC } from '@igds/core-web/footer';
import { IGDS_TAGS } from '@igds/core-web/constants';

const FooterNavigationItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.footerNavigationItem,
  elementClass: FooterNavigationItem$1
});
const FooterNavigationItem = forwardRef((props, ref) => {
  return jsx(FooterNavigationItemComponent, {
    ...props,
    ref: ref
  });
});

export { FooterNavigationItem };
