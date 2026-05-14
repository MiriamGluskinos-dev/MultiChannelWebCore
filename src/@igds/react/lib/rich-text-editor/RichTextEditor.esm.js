import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { RichTextEditor as RichTextEditor$1 } from '@igds/core-web/rich-text-editor';
export { RichTextEditor as RichTextEditorWC } from '@igds/core-web/rich-text-editor';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const RichTextEditorComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.richTextEditor,
  elementClass: RichTextEditor$1,
  events: {
    onIgdsInput: IGDS_EVENTS.input,
    onIgdsFocus: IGDS_EVENTS.focus,
    onIgdsChange: IGDS_EVENTS.change,
    onIgdsBlur: IGDS_EVENTS.blur
  }
});
const RichTextEditor = forwardRef((props, ref) => {
  return jsx(RichTextEditorComponent, {
    ...props,
    ref: ref
  });
});

export { RichTextEditor };
