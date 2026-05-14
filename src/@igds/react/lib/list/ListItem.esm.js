import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { ListItem as ListItem$1 } from '@igds/core-web/list';
export { ListItem as ListItemWC } from '@igds/core-web/list';
import { IGDS_TAGS } from '@igds/core-web/constants';

const ListItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.listItem,
  elementClass: ListItem$1
});
const ListItem = forwardRef((props, ref) => {
  return jsx(ListItemComponent, {
    ...props,
    ref: ref,
    children: props.children !== undefined && props.children
  });
});

export { ListItem };
