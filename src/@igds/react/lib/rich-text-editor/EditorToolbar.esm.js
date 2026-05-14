import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { EditorToolbar as EditorToolbar$1 } from '@igds/core-web/rich-text-editor';
export { EditorToolbar as EditorToolbarWC } from '@igds/core-web/rich-text-editor';
import { IGDS_TAGS } from '@igds/core-web/constants';

const EditorToolbarComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.editorToolbar,
  elementClass: EditorToolbar$1
});
const EditorToolbar = forwardRef((props, ref) => {
  return jsx(EditorToolbarComponent, {
    ...props,
    ref: ref
  });
});

export { EditorToolbar };
