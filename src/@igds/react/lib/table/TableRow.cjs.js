'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var table = require('@igds/core-web/table');
var constants = require('@igds/core-web/constants');

const TableRowComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.tableRow,
  elementClass: table.TableRow
});
const TableRow = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(TableRowComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "TableRowWC", {
    enumerable: true,
    get: function () { return table.TableRow; }
});
exports.TableRow = TableRow;
