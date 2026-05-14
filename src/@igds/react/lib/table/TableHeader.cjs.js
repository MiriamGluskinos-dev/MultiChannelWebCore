'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var table = require('@igds/core-web/table');
var constants = require('@igds/core-web/constants');

const TableHeaderComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.tableHeader,
  elementClass: table.TableHeader
});
const TableHeader = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(TableHeaderComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "TableHeaderWC", {
    enumerable: true,
    get: function () { return table.TableHeader; }
});
exports.TableHeader = TableHeader;
