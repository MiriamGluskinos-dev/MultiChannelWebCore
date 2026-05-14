'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var fileUploader = require('@igds/core-web/file-uploader');
var constants = require('@igds/core-web/constants');

const FileUploaderComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.fileUploader,
  elementClass: fileUploader.FileUploader,
  events: {
    onIgdsFileAdded: constants.IGDS_EVENTS.fileAdded,
    onIgdsFileRemoved: constants.IGDS_EVENTS.fileRemoved,
    onIgdsChange: constants.IGDS_EVENTS.change
  }
});
const FileUploader = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(FileUploaderComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "FileUploaderWC", {
    enumerable: true,
    get: function () { return fileUploader.FileUploader; }
});
exports.FileUploader = FileUploader;
