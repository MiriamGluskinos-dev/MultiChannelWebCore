import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { CheckboxGroup as CheckboxGroup$1 } from '@igds/core-web/checkbox-group';
export { CheckboxGroup as CheckboxGroupWC } from '@igds/core-web/checkbox-group';
import { IGDS_TAGS } from '@igds/core-web/constants';

const CheckboxGroupComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.checkboxGroup,
  elementClass: CheckboxGroup$1
});
const CheckboxGroup = forwardRef((props, ref) => {
  return jsx(CheckboxGroupComponent, {
    ...props,
    ref: ref
  });
});

export { CheckboxGroup };
