import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { ProfilePicker as ProfilePicker$1 } from '@igds/core-web/profile-picker';
export { ProfilePicker as ProfilePickerWC } from '@igds/core-web/profile-picker';
import { IGDS_TAGS } from '@igds/core-web/constants';

const ProfilePickerComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.profilePicker,
  elementClass: ProfilePicker$1
});
const ProfilePicker = forwardRef((props, ref) => {
  return jsx(ProfilePickerComponent, {
    ...props,
    ref: ref
  });
});

export { ProfilePicker };
