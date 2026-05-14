'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var datePicker = require('@igds/core-web/date-picker');
var constants = require('@igds/core-web/constants');

const DatePickerComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.datePicker,
  elementClass: datePicker.DatePicker,
  events: {
    onIgdsCalendarOpen: constants.IGDS_EVENTS.calendarOpen,
    onIgdsCalendarClose: constants.IGDS_EVENTS.calendarClose,
    onIgdsChange: constants.IGDS_EVENTS.change,
    onIgdsYearChange: constants.IGDS_EVENTS.yearChange,
    onIgdsPeriodChange: constants.IGDS_EVENTS.periodChange,
    onIgdsMonthChange: constants.IGDS_EVENTS.monthChange,
    onIgdsDayClick: constants.IGDS_EVENTS.dayClick,
    onIgdsInput: constants.IGDS_EVENTS.input,
    onIgdsFocus: constants.IGDS_EVENTS.focus,
    onIgdsBlur: constants.IGDS_EVENTS.blur
  }
});
const DatePicker = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(DatePickerComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "DatePickerWC", {
    enumerable: true,
    get: function () { return datePicker.DatePicker; }
});
exports.DatePicker = DatePicker;
