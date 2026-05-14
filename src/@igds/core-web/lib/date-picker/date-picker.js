var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { computePosition, offset, size } from '@floating-ui/dom';
import { when } from 'lit/directives/when.js';
import { choose } from 'lit/directives/choose.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { AngularFormElement } from '../abstractions';
import { IGDS_EVENTS, IGDS_TAGS, } from '../constants';
import { DATE_PICKER_DELAY_BEFORE_RECALCULATE_POPUP_POSITION, IGDS_DATE_MODE, IGDS_MONTHS, IGDS_START_WEEK_ON, IGDS_WEEK_DAYS_SHORTCUTS, REGULAR_EXPRESSION_FOR_DATE_VALIDATION, REGULAR_EXPRESSION_FORM_MONTH_YEAR_VALIDATION, START_YEAR_FOR_YEAR_RANGE_GENERATION, YEARS_COUNT_TO_DISPLAY, } from './constants';
import { IGDS_BUTTON_VARIANTS } from '../button';
import { getCssValue, throttle } from '../utils';
import styles from './date-picker.scss?inline';
import popupStyles from './date-picker-popup.scss?inline';
import { calendar, chevronLeft, chevronRight } from '@igds/icons';
let DatePicker = class DatePicker extends AngularFormElement {
    isMobile() {
        return this._mediaQueryObserver.matches;
    }
    constructor() {
        super();
        this.CSS_QUERY = `(max-width: ${getCssValue("--igds-light-ref-device-width-mobile" /* IGDS_BREAKPOINT_VARS.mobile */, '360px')})`;
        this.dir = 'rtl';
        this.dateFormat = 'YYYY/MM/DD';
        this.disabled = false;
        this.required = false;
        this.readonly = false;
        this.min = null;
        this.max = null;
        this.withoutCalendar = false;
        this.startWeekOn = IGDS_START_WEEK_ON.sunday;
        this.invalid = false;
        this.withIcon = true;
        this.autoFocus = false;
        this.autocomplete = 'off';
        this.openOnFocus = false;
        this.autocorrect = false;
        this.onChange = null;
        this.isPopupOpen = false;
        this.days = [];
        this.mode = IGDS_DATE_MODE.date;
        this.yearRange = [];
        this.focusedDate = null;
        this.focusedMonth = null;
        this._scrollHandler = () => this.setPopupPositionWhenOpen();
        this.resizeHandler = throttle(() => {
            if (this.isPopupOpen) {
                this.setPopupPosition();
            }
        }, DATE_PICKER_DELAY_BEFORE_RECALCULATE_POPUP_POSITION);
        this.focusedYear = null;
        this.setAsAngularLibFormElement();
        this._mediaQueryObserver = window.matchMedia(this.CSS_QUERY);
        this._internals = this.attachInternals();
        this.selectedMonth = new Date().getMonth();
        this.selectedYear = new Date().getFullYear();
        this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.generateCalendar();
        this.yearRange = this.generateYearRange(START_YEAR_FOR_YEAR_RANGE_GENERATION);
        if (this.withoutCalendar) {
            this.mode = IGDS_DATE_MODE.month;
        }
    }
    updated(changedProperties) {
        if (changedProperties.has('isPopupOpen') && this.withoutCalendar) {
            this.mode = IGDS_DATE_MODE.month;
        }
    }
    generateCalendar() {
        const firstDayOfMonth = new Date(this.selectedYear, this.selectedMonth, 1);
        const lastDayOfMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const firstDayOfWeek = this.startWeekOn === IGDS_START_WEEK_ON.monday
            ? (firstDayOfMonth.getDay() + 6) % 7
            : firstDayOfMonth.getDay();
        const days = [];
        const previousMonthDays = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            days.push({
                day: previousMonthDays - i,
                isCurrentMonth: false,
                disabled: this.dayIsDisabled(new Date(this.selectedYear, this.selectedMonth - 1, previousMonthDays - i)),
            });
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                day: i,
                isCurrentMonth: true,
                disabled: this.dayIsDisabled(new Date(this.selectedYear, this.selectedMonth, i)),
            });
        }
        const remainingCells = 42 - days.length;
        for (let i = 1; i <= remainingCells; i++) {
            days.push({
                day: i,
                isCurrentMonth: false,
                disabled: this.dayIsDisabled(new Date(this.selectedYear, this.selectedMonth + 1, i)),
            });
        }
        this.days = [...days];
    }
    dayIsDisabled(date) {
        if (!this.minDate && !this.maxDate) {
            return false;
        }
        return (date.getTime() <= (this.minDate?.getTime() || 0) ||
            date.getTime() >= (this.maxDate?.getTime() || Infinity));
    }
    generateYearRange(startYear) {
        return Array.from({ length: YEARS_COUNT_TO_DISPLAY }, (_, index) => startYear + index);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('click', this.handleDocumentMouseDown);
        window.removeEventListener('resize', this.resizeHandler);
        this.stopScrollListener();
    }
    startScrollListener() {
        window.addEventListener('scroll', this._scrollHandler, {
            passive: true,
            capture: true,
        });
    }
    stopScrollListener() {
        window.removeEventListener('scroll', this._scrollHandler, { capture: true });
    }
    render() {
        return html `
      <div class="date-picker">
        <igds-input
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          ?invalid=${this.invalid}
          ?auto-focus=${this.autoFocus}
          dir=${ifDefined(this.dir)}
          label=${this.label}
          label-icon=${ifDefined(this.labelIcon)}
          name=${ifDefined(this.name)}
          form=${ifDefined(this.form)}
          .value=${this.value}
          default-value=${ifDefined(this.defaultValue)}
          placeholder=${ifDefined(this.placeholder)}
          autocomplete=${ifDefined(this.autocomplete)}
          ?autocorrect=${this.autocorrect}
          icon=${ifDefined(this.withIcon ? calendar : undefined)}
          icon-position=${ifDefined(this.withIcon ? 'left' : undefined)}
          class="date-picker__input"
          @calendar-icon-click=${this.togglePopup}
          @igds-change=${this.onInputChange}
          @igds-focus=${this.onInputFocus}
          @igds-blur=${this.onInputBlur}
          @keydown=${this.onInputKeyDown}
        >
        </igds-input>
        <input
          class="date-picker__native-date-picker"
          type=${this.withoutCalendar ? 'month' : 'date'}
          name=${ifDefined(this.name)}
          id="datePicker"
          aria-label="Native date picker label"
          @change=${this.onChangeHandler}
          tabindex="-1"
        />
        ${this.getError()} ${this.renderPopup()}
      </div>
    `;
    }
    togglePopup() {
        if (this.disabled)
            return;
        this.getCurrentMonth();
        this.isPopupOpen = !this.isPopupOpen;
        if (this.isPopupOpen) {
            this.emit(IGDS_EVENTS.calendarOpen);
            this.setPopupPosition();
            setTimeout(() => {
                document.addEventListener('click', this.handleDocumentMouseDown);
            });
            window.addEventListener('resize', this.resizeHandler);
            this.startScrollListener();
        }
        if (!this.isPopupOpen) {
            this.mode = IGDS_DATE_MODE.date;
            this.focusedDate = null;
            this.emit(IGDS_EVENTS.calendarClose);
            window.removeEventListener('resize', this.resizeHandler);
            this.stopScrollListener();
        }
    }
    async setPopupPosition() {
        if (!this.inputElement)
            return;
        const popupElement = this.shadowRoot?.getElementById('date-picker-popup');
        if (!popupElement)
            return;
        const inputElementWidth = this.inputElement.clientWidth;
        const { x, y } = await computePosition(this.inputElement, popupElement, {
            placement: 'bottom-start',
            strategy: 'fixed',
            middleware: [
                offset(2),
                size({
                    apply() {
                        Object.assign(popupElement.style, {
                            width: `${inputElementWidth}px`,
                        });
                    },
                }),
            ],
        });
        Object.assign(popupElement.style, {
            top: `${y}px`,
            left: `${x}px`,
        });
    }
    setPopupPositionWhenOpen() {
        if (this.isPopupOpen) {
            this.setPopupPosition();
        }
    }
    onInputChange(event) {
        event.stopPropagation();
        const value = event.detail.value;
        const isValid = value &&
            (this.withoutCalendar
                ? this.isValidDateWithoutCalendar(value)
                : this.isValidDate(value));
        if (isValid) {
            this.error = '';
            this.invalid = false;
            this.emit(IGDS_EVENTS.change, value);
            this.setValues(value);
            this.generateCalendar();
        }
        else {
            this.clearValue(value ? 'Wrong date' : '');
        }
    }
    clearValue(errorMessage = '') {
        this.error = errorMessage;
        this.invalid = Boolean(errorMessage);
        this._internals.setFormValue('');
        this.value = '';
        this.datePicker.value = '';
        this.datePicker.dispatchEvent(new Event('change'));
        this.emit(IGDS_EVENTS.change, '');
    }
    setValues(value) {
        this.value = value;
        this._internals.setFormValue(this.value);
        const valueParts = value.split('/');
        if (this.withoutCalendar) {
            this.selectedYear = parseInt(valueParts[1]);
            this.selectedMonth = parseInt(valueParts[0]) - 1;
            this.datePicker.value = `${this.selectedYear}-${valueParts[0]}`;
        }
        else {
            this.selectedMonth = parseInt(valueParts[1]) - 1;
            this.selectedYear = parseInt(valueParts[2]);
            this.datePicker.value = `${this.selectedYear}-${valueParts[1]}-${valueParts[0]}`;
        }
        this.datePicker.dispatchEvent(new Event('change'));
    }
    isValidDate(dateString) {
        const match = dateString.match(REGULAR_EXPRESSION_FOR_DATE_VALIDATION);
        if (!match)
            return false;
        const year = match[3];
        const month = match[2];
        const day = match[1];
        const date = new Date(`${year}-${month}-${day}`);
        return (date.getDate() === parseInt(day) &&
            date.getMonth() + 1 === parseInt(month));
    }
    isValidDateWithoutCalendar(dateString) {
        const match = dateString.match(REGULAR_EXPRESSION_FORM_MONTH_YEAR_VALIDATION);
        if (!match)
            return false;
        const year = match[2];
        const month = match[1];
        const date = new Date(`${year}-${month}`);
        return date.getMonth() + 1 === parseInt(month);
    }
    onInputFocus() {
        this.emit(IGDS_EVENTS.focus, this.value ?? '');
        if (this.isMobile()) {
            this.togglePopup();
        }
    }
    onInputBlur() {
        this.emit(IGDS_EVENTS.blur, this.value ?? '');
    }
    onInputKeyDown(event) {
        if (!/[0-9]/.test(event.key) &&
            event.key !== '/' &&
            ![
                "Backspace" /* IGDS_EVENT_KEYS.Backspace */,
                "Delete" /* IGDS_EVENT_KEYS.Delete */,
                "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
                "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
                "Tab" /* IGDS_EVENT_KEYS.Tab */,
            ].includes(event.key)) {
            event.preventDefault();
        }
    }
    onChangeHandler(event) {
        this.onChange?.(event);
    }
    handleDocumentMouseDown(event) {
        const path = event.composedPath();
        if (this && !path.includes(this)) {
            this.isPopupOpen = false;
            this.mode = IGDS_DATE_MODE.date;
            this.focusedDate = null;
            this.focusedDate = null;
            window.removeEventListener('resize', this.resizeHandler);
            this.stopScrollListener();
            this.emit(IGDS_EVENTS.calendarClose);
        }
    }
    getError() {
        return html `
      ${when(this.error, () => html `
          <div class="date-picker__error">
            <igds-default-error-box errormessage=${ifDefined(this.error)}>
            </igds-default-error-box>
          </div>
        `)}
    `;
    }
    renderPopup() {
        return html `
      <div
        id="date-picker-popup"
        class=${classMap({
            'date-picker-popup': true,
            'date-picker-popup--open': this.isPopupOpen,
        })}
      >
        <div class="date-picker-popup__header">
          <igds-button
            variant=${IGDS_BUTTON_VARIANTS.link}
            class="date-picker-popup__header-action-button"
            @click=${this.onPreviousButtonClick}
          >
            <igds-icon
              slot="icon"
              node=${this.dir === 'ltr' ? chevronLeft : chevronRight}
            ></igds-icon>
          </igds-button>
          <igds-button
            variant=${IGDS_BUTTON_VARIANTS.link}
            @click=${this.openMonthPicker}
            class="date-picker-popup__header-current-month"
          >
            ${this.getCurrentMonth()}
          </igds-button>
          <igds-button
            variant=${IGDS_BUTTON_VARIANTS.link}
            @click=${this.openYearPicker}
          >
            ${this.selectedYear}
          </igds-button>
          <igds-button
            variant=${IGDS_BUTTON_VARIANTS.link}
            class="date-picker-popup__header-action-button"
            @click=${this.onNextButtonClick}
          >
            <igds-icon
              slot="icon"
              node=${this.dir === 'ltr' ? chevronRight : chevronLeft}
            ></igds-icon>
          </igds-button>
        </div>
        ${this.renderPicker()}
      </div>
    `;
    }
    onNextButtonClick() {
        if (this.mode === IGDS_DATE_MODE.date) {
            this.moveToNextMonth();
        }
        if (this.mode === IGDS_DATE_MODE.month) {
            this.selectedYear += 1;
            this.emit(IGDS_EVENTS.yearChange, this.selectedYear.toString());
            this.generateCalendar();
        }
        if (this.mode === IGDS_DATE_MODE.year) {
            const startYear = this.yearRange[0] + YEARS_COUNT_TO_DISPLAY;
            this.yearRange = this.generateYearRange(startYear);
        }
        this.emit(IGDS_EVENTS.periodChange);
    }
    moveToNextMonth() {
        if (this.selectedMonth === 11) {
            this.selectedMonth = 0;
            this.selectedYear += 1;
        }
        else {
            this.selectedMonth += 1;
        }
        this.emit(IGDS_EVENTS.monthChange, this.selectedMonth.toString());
        this.generateCalendar();
    }
    openMonthPicker() {
        if (this.mode === IGDS_DATE_MODE.date) {
            this.emit(IGDS_EVENTS.calendarClose);
        }
        this.mode = IGDS_DATE_MODE.month;
    }
    getCurrentMonth() {
        return Object.values(IGDS_MONTHS)[this.selectedMonth];
    }
    openYearPicker() {
        if (this.mode === IGDS_DATE_MODE.date) {
            this.emit(IGDS_EVENTS.calendarClose);
        }
        this.mode = IGDS_DATE_MODE.year;
    }
    onPreviousButtonClick() {
        if (this.mode === IGDS_DATE_MODE.date) {
            this.moveToPreviousMonth();
        }
        if (this.mode === IGDS_DATE_MODE.month) {
            this.selectedYear -= 1;
            this.emit(IGDS_EVENTS.yearChange, this.selectedYear.toString());
            this.generateCalendar();
        }
        if (this.mode === IGDS_DATE_MODE.year) {
            const startYear = this.yearRange[0] - YEARS_COUNT_TO_DISPLAY;
            this.yearRange = this.generateYearRange(startYear);
        }
        this.emit(IGDS_EVENTS.periodChange);
    }
    moveToPreviousMonth() {
        if (this.selectedMonth === 0) {
            this.selectedMonth = 11;
            this.selectedYear -= 1;
        }
        else {
            this.selectedMonth -= 1;
        }
        this.emit(IGDS_EVENTS.monthChange, this.selectedMonth.toString());
        this.generateCalendar();
    }
    onDatePickerKeyDown(event, isDisabled) {
        switch (event.key) {
            case "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */:
                this.moveFocus(7);
                break;
            case "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */:
                this.moveFocus(-7);
                break;
            case "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */:
                this.moveFocus(1);
                break;
            case "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */:
                this.moveFocus(-1);
                break;
            case "Enter" /* IGDS_EVENT_KEYS.Enter */:
                this.onSelectDay(this.focusedDate ?? 1, isDisabled);
                break;
        }
    }
    moveFocus(offset) {
        if (this.focusedDate === null) {
            this.focusedDate = 1;
        }
        let newFocus = this.focusedDate + offset;
        if (newFocus < 1) {
            this.moveToPreviousMonth();
            newFocus = this.days.filter((day) => day.isCurrentMonth).length;
        }
        else if (newFocus > this.days.filter((day) => day.isCurrentMonth).length) {
            this.moveToNextMonth();
            newFocus = 1;
        }
        this.focusedDate = newFocus;
    }
    onMonthPickerKeyDown(event) {
        if (this.focusedMonth === null) {
            this.focusedMonth = 0;
            return;
        }
        switch (event.key) {
            case "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */:
                this.moveMonthPickerFocusDown();
                break;
            case "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */:
                this.moveMonthPickerFocusUp();
                break;
            case "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */:
                this.moveMonthPickerFocusLeft();
                break;
            case "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */:
                this.moveMonthPickerFocusRight();
                break;
            case "Enter" /* IGDS_EVENT_KEYS.Enter */:
                this.onMonthChange(this.focusedMonth ?? 0);
                break;
        }
    }
    moveMonthPickerFocusLeft() {
        if (this.focusedMonth === null)
            return;
        let newFocus = this.focusedMonth + 1;
        if (newFocus >= 12) {
            newFocus = 0;
        }
        this.focusedMonth = newFocus;
    }
    moveMonthPickerFocusRight() {
        if (this.focusedMonth === null)
            return;
        let newFocus = this.focusedMonth - 1;
        if (newFocus < 0) {
            newFocus = 11;
        }
        this.focusedMonth = newFocus;
    }
    moveMonthPickerFocusDown() {
        if (this.focusedMonth === null)
            return;
        if (this.focusedMonth <= 8) {
            this.focusedMonth += 3;
        }
        else {
            this.focusedMonth = 0;
        }
    }
    moveMonthPickerFocusUp() {
        if (this.focusedMonth === null)
            return;
        if (this.focusedMonth >= 3) {
            this.focusedMonth -= 3;
        }
        else {
            this.focusedMonth = 11;
        }
    }
    onYearPickerKeyDown(event) {
        if (this.focusedYear === null) {
            this.focusedYear = this.yearRange[0];
            return;
        }
        switch (event.key) {
            case "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */:
                this.moveYearPickerFocusDown();
                break;
            case "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */:
                this.moveYearPickerFocusUp();
                break;
            case "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */:
                this.moveYearPickerFocusLeft();
                break;
            case "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */:
                this.moveYearPickerFocusRight();
                break;
            case "Enter" /* IGDS_EVENT_KEYS.Enter */:
                this.onYearChange(this.focusedYear ?? 0);
                break;
        }
    }
    moveYearPickerFocusDown() { }
    moveYearPickerFocusUp() { }
    moveYearPickerFocusLeft() {
        if (this.focusedYear === null)
            return;
        this.focusedYear = this.focusedYear + 1;
    }
    moveYearPickerFocusRight() {
        if (this.focusedYear === null)
            return;
        this.focusedYear = this.focusedYear - 1;
    }
    renderPicker() {
        return html `
      ${choose(this.mode, [
            [IGDS_DATE_MODE.month, () => html `${this.renderMonthsPicker()}`],
            [IGDS_DATE_MODE.year, () => html `${this.renderYearPicker()}`],
        ], () => html `${when(!this.withoutCalendar, () => html `${this.renderDatePicker()}`, () => html `${this.renderMonthsPicker()}`)}`)}
    `;
    }
    renderDatePicker() {
        return html `
      <div class="date-picker-popup__calendar">
        <div class="date-picker-popup__week-days">
          ${repeat(Object.values(this.getWeekDayShortcuts()), (weekDayShortcut) => html `
              <div class="date-picker-popup__week-day">${weekDayShortcut}</div>
            `)}
        </div>
        ${when(this.days.length, () => html `
            <div class="date-picker-popup__calendar-body">
              ${repeat(this.days, (day) => html `
                  <div
                    tabindex="${day.isCurrentMonth ? 0 : -1}"
                    class=${classMap({
            'date-picker-popup__calendar-day': true,
            'date-picker-popup__calendar-day--today': this.isToday(day.day) && day.isCurrentMonth,
            'date-picker-popup__calendar-day--not-current-month-day': !day.isCurrentMonth,
            'date-picker-popup__calendar-day--selected': this.isDateSelected(day.day) && day.isCurrentMonth,
            'date-picker-popup__calendar-day--highlighted': this.focusedDate === day.day && day.isCurrentMonth,
            'date-picker-popup__calendar-day--disabled': day.disabled,
            'date-picker-popup__calendar-day--selected-highlighted': this.isDateSelected(day.day) &&
                this.focusedDate === day.day &&
                day.isCurrentMonth,
        })}
                    @click=${() => this.onSelectDay(day.day, day.disabled)}
                    @keydown=${(event) => this.onDatePickerKeyDown(event, day.disabled)}
                  >
                    ${this.padNumber(day.day)}
                  </div>
                `)}
            </div>
          `)}
      </div>
    `;
    }
    getWeekDayShortcuts() {
        if (this.startWeekOn === IGDS_START_WEEK_ON.monday) {
            const entries = Object.entries(IGDS_WEEK_DAYS_SHORTCUTS);
            const startIndex = entries.findIndex(([key]) => key === this.startWeekOn);
            const reorderedEntries = [
                ...entries.slice(startIndex),
                ...entries.slice(0, startIndex),
            ];
            return Object.fromEntries(reorderedEntries);
        }
        return IGDS_WEEK_DAYS_SHORTCUTS;
    }
    isToday(day) {
        return (this.todayDay === day &&
            this.todayMonth === this.selectedMonth &&
            this.todayYear === this.selectedYear);
    }
    get todayDay() {
        return new Date().getDate();
    }
    get todayMonth() {
        return new Date().getMonth();
    }
    get todayYear() {
        return new Date().getFullYear();
    }
    get minDate() {
        if (!this.min) {
            return null;
        }
        const date = new Date(this.min);
        return !isNaN(+date) ? new Date(date.setDate(date.getDate() - 1)) : null;
    }
    get maxDate() {
        if (!this.max) {
            return null;
        }
        const date = new Date(this.max);
        return !isNaN(+date) ? date : null;
    }
    get minMonth() {
        return this.minDate ? this.minDate.getMonth() : null;
    }
    get maxMonth() {
        return this.maxDate ? this.maxDate.getMonth() : null;
    }
    get minYear() {
        return this.minDate ? this.minDate.getFullYear() : null;
    }
    get maxYear() {
        return this.maxDate ? this.maxDate.getFullYear() : null;
    }
    isDateSelected(calendarDay) {
        if (!this.value)
            return false;
        const valueParts = this.value.split('/');
        const year = Number(valueParts[2]);
        const month = Number(valueParts[1]) - 1;
        const day = Number(valueParts[0]);
        return (this.selectedYear === year &&
            this.selectedMonth === month &&
            calendarDay === day);
    }
    onSelectDay(day, isDisabled) {
        if (isDisabled)
            return;
        const formattedDate = `${this.padNumber(day)}/${this.padNumber(this.selectedMonth + 1)}/${this.selectedYear}`;
        this.value = formattedDate ?? '';
        this._internals.setFormValue(this.value ?? null);
        this.isPopupOpen = false;
        this.focusedDate = null;
        window.removeEventListener('resize', this.resizeHandler);
        this.stopScrollListener();
        this.emit(IGDS_EVENTS.dayClick, day.toString());
        this.emit(IGDS_EVENTS.input, this.value);
        this.emit(IGDS_EVENTS.change, this.value);
        this.emit(IGDS_EVENTS.calendarClose);
        this.datePicker.value = `${this.selectedYear}-${this.padNumber(this.selectedMonth + 1)}-${this.padNumber(day)}`;
        this.datePicker.dispatchEvent(new Event('change'));
    }
    padNumber(number) {
        return number.toString().padStart(2, '0');
    }
    renderMonthsPicker() {
        return html `
      <div
        tabindex="0"
        class="date-picker-popup__month-picker"
        @keydown=${this.onMonthPickerKeyDown}
      >
        ${repeat(Object.values(IGDS_MONTHS), (month, index) => html `
            <div
              class=${classMap({
            'date-picker-popup__month-box': true,
            'date-picker-popup__month-box--disabled': Boolean((this.minMonth && index < this.minMonth) ||
                (this.maxMonth && index > this.maxMonth)),
        })}
              @click=${() => this.onMonthChange(index)}
              @keydown=${() => { }}
            >
              <span
                class=${classMap({
            'date-picker-popup__month-label': true,
            'date-picker-popup__month-label--selected': this.selectedMonth === index,
            'date-picker-popup__month-label--highlighted': this.focusedMonth === index,
            'date-picker-popup__month-label--disabled': Boolean((this.minMonth && index < this.minMonth) ||
                (this.maxMonth && index > this.maxMonth)),
            'date-picker-popup__month-label--selected-highlighted': this.selectedMonth === index && this.focusedMonth === index,
        })}
              >
                ${month}
              </span>
            </div>
          `)}
      </div>
    `;
    }
    onMonthChange(index) {
        if ((this.minMonth && index < this.minMonth) ||
            (this.maxMonth && index > this.maxMonth))
            return;
        this.selectedMonth = index;
        this.emit(IGDS_EVENTS.monthChange, this.selectedMonth.toString());
        this.focusedMonth = null;
        if (this.withoutCalendar) {
            this.commitMonthSelection();
        }
        else {
            this.generateCalendar();
            this.mode = IGDS_DATE_MODE.date;
            this.emit(IGDS_EVENTS.calendarOpen);
        }
    }
    commitMonthSelection() {
        const formattedDate = `${this.padNumber(this.selectedMonth + 1)}/${this.selectedYear}`;
        this.value = formattedDate;
        this._internals.setFormValue(this.value ?? null);
        this.datePicker.value = `${this.selectedYear}-${this.padNumber(this.selectedMonth + 1)}`;
        this.datePicker.dispatchEvent(new Event('change'));
        this.emit(IGDS_EVENTS.input, this.value);
        this.emit(IGDS_EVENTS.change, this.value);
        this.isPopupOpen = false;
        window.removeEventListener('resize', this.resizeHandler);
        this.stopScrollListener();
    }
    renderYearPicker() {
        return html `
      <div
        tabindex="0"
        class="date-picker-popup__year-picker"
        @keydown=${this.onYearPickerKeyDown}
      >
        ${repeat(this.yearRange, (year) => html `
            <div
              class=${classMap({
            'date-picker-popup__year-box': true,
            'date-picker-popup__year-box--disabled': Boolean((this.minYear && year < this.minYear) ||
                (this.maxYear && year > this.maxYear)),
        })}
              @click=${() => this.onYearChange(year)}
              @keydown=${() => { }}
            >
              <span
                class=${classMap({
            'date-picker-popup__year-label': true,
            'date-picker-popup__year-label--selected': this.selectedYear === year,
            'date-picker-popup__year-label--disabled': Boolean((this.minYear && year < this.minYear) ||
                (this.maxYear && year > this.maxYear)),
            'date-picker-popup__year-label--highlighted': this.focusedYear === year,
            'date-picker-popup__year-label--selected-highlighted': this.selectedYear === year && this.focusedYear === year,
        })}
              >
                ${year}
              </span>
            </div>
          `)}
      </div>
    `;
    }
    onYearChange(year) {
        if ((this.minYear && year < this.minYear) ||
            (this.maxYear && year > this.maxYear))
            return;
        this.selectedYear = year;
        this.emit(IGDS_EVENTS.yearChange, this.selectedYear.toString());
        this.focusedYear = null;
        if (this.withoutCalendar) {
            this.mode = IGDS_DATE_MODE.month;
        }
        else {
            this.generateCalendar();
            this.mode = IGDS_DATE_MODE.date;
            this.emit(IGDS_EVENTS.calendarOpen);
        }
    }
};
DatePicker.styles = [unsafeCSS(styles), unsafeCSS(popupStyles)];
DatePicker.formAssociated = true;
__decorate([
    property({ type: String, reflect: true })
], DatePicker.prototype, "dir", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "label", void 0);
__decorate([
    property({ type: String, attribute: 'label-icon' })
], DatePicker.prototype, "labelIcon", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "name", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "form", void 0);
__decorate([
    property({ type: String, attribute: 'default-value' })
], DatePicker.prototype, "defaultValue", void 0);
__decorate([
    property({ type: String, attribute: 'date-format' })
], DatePicker.prototype, "dateFormat", void 0);
__decorate([
    property({ type: Boolean })
], DatePicker.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], DatePicker.prototype, "required", void 0);
__decorate([
    property({ type: Boolean })
], DatePicker.prototype, "readonly", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "min", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "max", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean, attribute: 'without-calendar' })
], DatePicker.prototype, "withoutCalendar", void 0);
__decorate([
    property({ type: String, attribute: 'start-week-on' })
], DatePicker.prototype, "startWeekOn", void 0);
__decorate([
    property({ type: Boolean })
], DatePicker.prototype, "invalid", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "error", void 0);
__decorate([
    property({ type: Boolean, attribute: 'with-icon' })
], DatePicker.prototype, "withIcon", void 0);
__decorate([
    property({ type: Boolean, attribute: 'auto-focus' })
], DatePicker.prototype, "autoFocus", void 0);
__decorate([
    property({ type: String })
], DatePicker.prototype, "autocomplete", void 0);
__decorate([
    property({ type: Boolean })
], DatePicker.prototype, "openOnFocus", void 0);
__decorate([
    property({ type: Boolean })
], DatePicker.prototype, "autocorrect", void 0);
__decorate([
    property({ attribute: false })
], DatePicker.prototype, "onChange", void 0);
__decorate([
    state()
], DatePicker.prototype, "isPopupOpen", void 0);
__decorate([
    state()
], DatePicker.prototype, "selectedMonth", void 0);
__decorate([
    state()
], DatePicker.prototype, "selectedYear", void 0);
__decorate([
    state()
], DatePicker.prototype, "days", void 0);
__decorate([
    state()
], DatePicker.prototype, "mode", void 0);
__decorate([
    state()
], DatePicker.prototype, "yearRange", void 0);
__decorate([
    state()
], DatePicker.prototype, "focusedDate", void 0);
__decorate([
    state()
], DatePicker.prototype, "focusedMonth", void 0);
__decorate([
    query('.date-picker__input')
], DatePicker.prototype, "inputElement", void 0);
__decorate([
    query('.date-picker__native-date-picker')
], DatePicker.prototype, "datePicker", void 0);
__decorate([
    state()
], DatePicker.prototype, "focusedYear", void 0);
DatePicker = __decorate([
    customElement(IGDS_TAGS.datePicker)
], DatePicker);
export { DatePicker };
