'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var table = require('@igds/core-web/table');
var constants = require('@igds/core-web/constants');

const TableComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.table,
  elementClass: table.Table,
  events: {
    onIgdsDragStart: constants.IGDS_EVENTS.dragStart,
    onIgdsDragEnd: constants.IGDS_EVENTS.dragEnd,
    onIgdsRowSelect: constants.IGDS_EVENTS.rowSelect,
    onIgdsCallAction: constants.IGDS_EVENTS.callAction,
    onIgdsSortingOrderChange: constants.IGDS_EVENTS.sortingOrderChange,
    onIgdsCellChange: constants.IGDS_EVENTS.cellChange,
    onIgdsCellClick: constants.IGDS_EVENTS.cellClick,
    onIgdsCellEnterPressed: constants.IGDS_EVENTS.cellEnterPressed,
    onIgdsCellLinkClick: constants.IGDS_EVENTS.cellLinkClick
  }
});
const Table = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(TableComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "TableWC", {
    enumerable: true,
    get: function () { return table.Table; }
});
exports.Table = Table;
