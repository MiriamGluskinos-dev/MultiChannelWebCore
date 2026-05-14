import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const Slotted = forwardRef(({
  slot,
  children,
  isContents
}, ref) => {
  return jsx("div", {
    ref: ref,
    slot: slot,
    style: {
      display: isContents ? 'contents' : undefined
    },
    children: children
  });
});

export { Slotted };
