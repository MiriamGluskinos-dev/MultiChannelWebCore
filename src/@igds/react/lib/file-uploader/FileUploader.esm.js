import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { FileUploader as FileUploader$1 } from '@igds/core-web/file-uploader';
export { FileUploader as FileUploaderWC } from '@igds/core-web/file-uploader';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const FileUploaderComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.fileUploader,
  elementClass: FileUploader$1,
  events: {
    onIgdsFileAdded: IGDS_EVENTS.fileAdded,
    onIgdsFileRemoved: IGDS_EVENTS.fileRemoved,
    onIgdsChange: IGDS_EVENTS.change
  }
});
const FileUploader = forwardRef((props, ref) => {
  return jsx(FileUploaderComponent, {
    ...props,
    ref: ref
  });
});

export { FileUploader };
