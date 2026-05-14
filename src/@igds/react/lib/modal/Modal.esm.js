import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Modal as Modal$1 } from '@igds/core-web/modal';
export { Modal as ModalWC } from '@igds/core-web/modal';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const ModalComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.modal,
  elementClass: Modal$1,
  events: {
    onIgdsOpen: IGDS_EVENTS.open,
    onIgdsClose: IGDS_EVENTS.close,
    onIgdsPrimaryClick: IGDS_EVENTS.primaryClick,
    onIgdsSecondaryClick: IGDS_EVENTS.secondaryClick
  }
});
const Modal = forwardRef((props, ref) => {
  return jsx(ModalComponent, {
    ...props,
    ref: ref
  });
});

export { Modal };
