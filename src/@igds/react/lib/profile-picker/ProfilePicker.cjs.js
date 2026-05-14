'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var profilePicker = require('@igds/core-web/profile-picker');
var constants = require('@igds/core-web/constants');

const ProfilePickerComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.profilePicker,
  elementClass: profilePicker.ProfilePicker
});
const ProfilePicker = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(ProfilePickerComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "ProfilePickerWC", {
    enumerable: true,
    get: function () { return profilePicker.ProfilePicker; }
});
exports.ProfilePicker = ProfilePicker;
