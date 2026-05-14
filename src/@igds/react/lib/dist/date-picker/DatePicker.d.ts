import React from 'react';
import { DatePicker as DatePickerWC } from '@igds/core-web/date-picker';
declare const DatePicker: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<DatePickerWC>, "defaultValue" | "autoFocus" | "onChange" | "connectedCallback" | "disconnectedCallback" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "form" | "label" | "disabled" | "onIgdsFocus" | "onIgdsBlur" | "onIgdsChange" | "required" | "invalid" | "name" | "error" | "onInputChange" | "getError" | "checked" | "value" | "onIgdsCalendarOpen" | "onIgdsCalendarClose" | "onIgdsYearChange" | "onIgdsPeriodChange" | "onIgdsMonthChange" | "onIgdsDayClick" | "onIgdsInput" | "labelIcon" | "dateFormat" | "readonly" | "min" | "max" | "placeholder" | "withoutCalendar" | "startWeekOn" | "withIcon" | "autocomplete" | "openOnFocus" | "isPopupOpen" | "selectedMonth" | "selectedYear" | "days" | "mode" | "yearRange" | "focusedDate" | "focusedMonth" | "inputElement" | "datePicker" | "generateCalendar" | "generateYearRange" | "togglePopup" | "setPopupPosition" | "setValues" | "isValidDate" | "isValidDateWithoutCalendar" | "onInputFocus" | "onInputBlur" | "onInputKeyDown" | "onChangeHandler" | "handleDocumentMouseDown" | "renderPopup" | "onNextButtonClick" | "moveToNextMonth" | "openMonthPicker" | "getCurrentMonth" | "openYearPicker" | "onPreviousButtonClick" | "moveToPreviousMonth" | "onDatePickerKeyDown" | "moveFocus" | "onMonthPickerKeyDown" | "moveMonthPickerFocusLeft" | "moveMonthPickerFocusRight" | "moveMonthPickerFocusDown" | "moveMonthPickerFocusUp" | "onYearPickerKeyDown" | "focusedYear" | "moveYearPickerFocusDown" | "moveYearPickerFocusUp" | "moveYearPickerFocusLeft" | "moveYearPickerFocusRight" | "renderPicker" | "renderDatePicker" | "getWeekDayShortcuts" | "isToday" | "todayDay" | "todayMonth" | "todayYear" | "minDate" | "maxDate" | "minMonth" | "maxMonth" | "minYear" | "maxYear" | "isDateSelected" | "onSelectDay" | "padNumber" | "renderMonthsPicker" | "onMonthChange" | "renderYearPicker" | "onYearChange"> & {
    onIgdsCalendarOpen?: ((e: CustomEvent<any>) => void) | undefined;
    onIgdsCalendarClose?: ((e: CustomEvent<any>) => void) | undefined;
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsYearChange?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsPeriodChange?: ((e: CustomEvent<any>) => void) | undefined;
    onIgdsMonthChange?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsDayClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsInput?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsFocus?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsBlur?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<DatePickerWC, keyof HTMLElement>> & React.RefAttributes<DatePickerWC>, "ref"> & React.RefAttributes<DatePickerWC>>;
export { DatePicker, DatePickerWC };
