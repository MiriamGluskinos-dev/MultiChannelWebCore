'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var table = require('@igds/core-web/table');
var constants = require('@igds/core-web/constants');

const TableCellComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.tableCell,
  elementClass: table.TableCell
});
const TableCell = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(TableCellComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "TableCellWC", {
    enumerable: true,
    get: function () { return table.TableCell; }
});
exports.TableCell = TableCell;
