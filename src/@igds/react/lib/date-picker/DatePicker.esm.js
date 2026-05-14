import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { DatePicker as DatePicker$1 } from '@igds/core-web/date-picker';
export { DatePicker as DatePickerWC } from '@igds/core-web/date-picker';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const DatePickerComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.datePicker,
  elementClass: DatePicker$1,
  events: {
    onIgdsCalendarOpen: IGDS_EVENTS.calendarOpen,
    onIgdsCalendarClose: IGDS_EVENTS.calendarClose,
    onIgdsChange: IGDS_EVENTS.change,
    onIgdsYearChange: IGDS_EVENTS.yearChange,
    onIgdsPeriodChange: IGDS_EVENTS.periodChange,
    onIgdsMonthChange: IGDS_EVENTS.monthChange,
    onIgdsDayClick: IGDS_EVENTS.dayClick,
    onIgdsInput: IGDS_EVENTS.input,
    onIgdsFocus: IGDS_EVENTS.focus,
    onIgdsBlur: IGDS_EVENTS.blur
  }
});
const DatePicker = forwardRef((props, ref) => {
  return jsx(DatePickerComponent, {
    ...props,
    ref: ref
  });
});

export { DatePicker };
