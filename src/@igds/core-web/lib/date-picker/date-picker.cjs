"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const I=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),o=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),D=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),P=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),k=require("../node_modules/.pnpm/@floating-ui_dom@1.6.12/node_modules/@floating-ui/dom/dist/floating-ui.dom.cjs"),y=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),Y=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/choose.cjs"),p=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),m=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),E=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),T=require("../abstractions/angular-form-element.cjs"),b=require("../constants/breakpoints.cjs"),a=require("../constants/events.cjs"),h=require("../constants/event-keys.cjs"),w=require("../constants/tags.cjs"),s=require("./constants.cjs");require("../button/button.cjs");const f=require("../button/constants.cjs"),g=require("../utils/common.cjs"),$=require("./date-picker.scss.cjs"),O=require("./date-picker-popup.scss.cjs"),_=require("@igds/icons"),M=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var N=Object.defineProperty,C=Object.getOwnPropertyDescriptor,i=(S,e,t,r)=>{for(var n=r>1?void 0:r?C(e,t):e,l=S.length-1,u;l>=0;l--)(u=S[l])&&(n=(r?u(e,t,n):u(n))||n);return r&&n&&N(e,t,n),n};exports.DatePicker=class extends T.AngularFormElement{constructor(){super(),this.CSS_QUERY=`(max-width: ${g.getCssValue(b.IGDS_BREAKPOINT_VARS.mobile,"360px")})`,this.dir="rtl",this.dateFormat="YYYY/MM/DD",this.disabled=!1,this.required=!1,this.readonly=!1,this.min=null,this.max=null,this.withoutCalendar=!1,this.startWeekOn=s.IGDS_START_WEEK_ON.sunday,this.invalid=!1,this.withIcon=!0,this.autoFocus=!1,this.autocomplete="off",this.openOnFocus=!1,this.autocorrect=!1,this.onChange=null,this.isPopupOpen=!1,this.days=[],this.mode=s.IGDS_DATE_MODE.date,this.yearRange=[],this.focusedDate=null,this.focusedMonth=null,this._scrollHandler=()=>this.setPopupPositionWhenOpen(),this.resizeHandler=g.throttle(()=>{this.isPopupOpen&&this.setPopupPosition()},s.DATE_PICKER_DELAY_BEFORE_RECALCULATE_POPUP_POSITION),this.focusedYear=null,this.setAsAngularLibFormElement(),this._mediaQueryObserver=window.matchMedia(this.CSS_QUERY),this._internals=this.attachInternals(),this.selectedMonth=new Date().getMonth(),this.selectedYear=new Date().getFullYear(),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this)}isMobile(){return this._mediaQueryObserver.matches}firstUpdated(e){super.firstUpdated(e),this.generateCalendar(),this.yearRange=this.generateYearRange(s.START_YEAR_FOR_YEAR_RANGE_GENERATION),this.withoutCalendar&&(this.mode=s.IGDS_DATE_MODE.month)}updated(e){e.has("isPopupOpen")&&this.withoutCalendar&&(this.mode=s.IGDS_DATE_MODE.month)}generateCalendar(){const e=new Date(this.selectedYear,this.selectedMonth,1),r=new Date(this.selectedYear,this.selectedMonth+1,0).getDate(),n=this.startWeekOn===s.IGDS_START_WEEK_ON.monday?(e.getDay()+6)%7:e.getDay(),l=[],u=new Date(this.selectedYear,this.selectedMonth,0).getDate();for(let d=n-1;d>=0;d--)l.push({day:u-d,isCurrentMonth:!1,disabled:this.dayIsDisabled(new Date(this.selectedYear,this.selectedMonth-1,u-d))});for(let d=1;d<=r;d++)l.push({day:d,isCurrentMonth:!0,disabled:this.dayIsDisabled(new Date(this.selectedYear,this.selectedMonth,d))});const v=42-l.length;for(let d=1;d<=v;d++)l.push({day:d,isCurrentMonth:!1,disabled:this.dayIsDisabled(new Date(this.selectedYear,this.selectedMonth+1,d))});this.days=[...l]}dayIsDisabled(e){return!this.minDate&&!this.maxDate?!1:e.getTime()<=(this.minDate?.getTime()||0)||e.getTime()>=(this.maxDate?.getTime()||1/0)}generateYearRange(e){return Array.from({length:s.YEARS_COUNT_TO_DISPLAY},(t,r)=>e+r)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleDocumentMouseDown),window.removeEventListener("resize",this.resizeHandler),this.stopScrollListener()}startScrollListener(){window.addEventListener("scroll",this._scrollHandler,{passive:!0,capture:!0})}stopScrollListener(){window.removeEventListener("scroll",this._scrollHandler,{capture:!0})}render(){return c.html`
      <div class="date-picker">
        <igds-input
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          ?invalid=${this.invalid}
          ?auto-focus=${this.autoFocus}
          dir=${p.ifDefined(this.dir)}
          label=${this.label}
          label-icon=${p.ifDefined(this.labelIcon)}
          name=${p.ifDefined(this.name)}
          form=${p.ifDefined(this.form)}
          .value=${this.value}
          default-value=${p.ifDefined(this.defaultValue)}
          placeholder=${p.ifDefined(this.placeholder)}
          autocomplete=${p.ifDefined(this.autocomplete)}
          ?autocorrect=${this.autocorrect}
          icon=${p.ifDefined(this.withIcon?_.calendar:void 0)}
          icon-position=${p.ifDefined(this.withIcon?"left":void 0)}
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
          type=${this.withoutCalendar?"month":"date"}
          name=${p.ifDefined(this.name)}
          id="datePicker"
          aria-label="Native date picker label"
          @change=${this.onChangeHandler}
          tabindex="-1"
        />
        ${this.getError()} ${this.renderPopup()}
      </div>
    `}togglePopup(){this.disabled||(this.getCurrentMonth(),this.isPopupOpen=!this.isPopupOpen,this.isPopupOpen&&(this.emit(a.IGDS_EVENTS.calendarOpen),this.setPopupPosition(),setTimeout(()=>{document.addEventListener("click",this.handleDocumentMouseDown)}),window.addEventListener("resize",this.resizeHandler),this.startScrollListener()),this.isPopupOpen||(this.mode=s.IGDS_DATE_MODE.date,this.focusedDate=null,this.emit(a.IGDS_EVENTS.calendarClose),window.removeEventListener("resize",this.resizeHandler),this.stopScrollListener()))}async setPopupPosition(){if(!this.inputElement)return;const e=this.shadowRoot?.getElementById("date-picker-popup");if(!e)return;const t=this.inputElement.clientWidth,{x:r,y:n}=await k.computePosition(this.inputElement,e,{placement:"bottom-start",strategy:"fixed",middleware:[k.offset(2),k.size({apply(){Object.assign(e.style,{width:`${t}px`})}})]});Object.assign(e.style,{top:`${n}px`,left:`${r}px`})}setPopupPositionWhenOpen(){this.isPopupOpen&&this.setPopupPosition()}onInputChange(e){e.stopPropagation();const t=e.detail.value;t&&(this.withoutCalendar?this.isValidDateWithoutCalendar(t):this.isValidDate(t))?(this.error="",this.invalid=!1,this.emit(a.IGDS_EVENTS.change,t),this.setValues(t),this.generateCalendar()):this.clearValue(t?"Wrong date":"")}clearValue(e=""){this.error=e,this.invalid=!!e,this._internals.setFormValue(""),this.value="",this.datePicker.value="",this.datePicker.dispatchEvent(new Event("change")),this.emit(a.IGDS_EVENTS.change,"")}setValues(e){this.value=e,this._internals.setFormValue(this.value);const t=e.split("/");this.withoutCalendar?(this.selectedYear=parseInt(t[1]),this.selectedMonth=parseInt(t[0])-1,this.datePicker.value=`${this.selectedYear}-${t[0]}`):(this.selectedMonth=parseInt(t[1])-1,this.selectedYear=parseInt(t[2]),this.datePicker.value=`${this.selectedYear}-${t[1]}-${t[0]}`),this.datePicker.dispatchEvent(new Event("change"))}isValidDate(e){const t=e.match(s.REGULAR_EXPRESSION_FOR_DATE_VALIDATION);if(!t)return!1;const r=t[3],n=t[2],l=t[1],u=new Date(`${r}-${n}-${l}`);return u.getDate()===parseInt(l)&&u.getMonth()+1===parseInt(n)}isValidDateWithoutCalendar(e){const t=e.match(s.REGULAR_EXPRESSION_FORM_MONTH_YEAR_VALIDATION);if(!t)return!1;const r=t[2],n=t[1];return new Date(`${r}-${n}`).getMonth()+1===parseInt(n)}onInputFocus(){this.emit(a.IGDS_EVENTS.focus,this.value??""),this.isMobile()&&this.togglePopup()}onInputBlur(){this.emit(a.IGDS_EVENTS.blur,this.value??"")}onInputKeyDown(e){!/[0-9]/.test(e.key)&&e.key!=="/"&&![h.IGDS_EVENT_KEYS.Backspace,h.IGDS_EVENT_KEYS.Delete,h.IGDS_EVENT_KEYS.ArrowLeft,h.IGDS_EVENT_KEYS.ArrowRight,h.IGDS_EVENT_KEYS.Tab].includes(e.key)&&e.preventDefault()}onChangeHandler(e){this.onChange?.(e)}handleDocumentMouseDown(e){const t=e.composedPath();this&&!t.includes(this)&&(this.isPopupOpen=!1,this.mode=s.IGDS_DATE_MODE.date,this.focusedDate=null,this.focusedDate=null,window.removeEventListener("resize",this.resizeHandler),this.stopScrollListener(),this.emit(a.IGDS_EVENTS.calendarClose))}getError(){return c.html`
      ${y.when(this.error,()=>c.html`
          <div class="date-picker__error">
            <igds-default-error-box errormessage=${p.ifDefined(this.error)}>
            </igds-default-error-box>
          </div>
        `)}
    `}renderPopup(){return c.html`
      <div
        id="date-picker-popup"
        class=${m.classMap({"date-picker-popup":!0,"date-picker-popup--open":this.isPopupOpen})}
      >
        <div class="date-picker-popup__header">
          <igds-button
            variant=${f.IGDS_BUTTON_VARIANTS.link}
            class="date-picker-popup__header-action-button"
            @click=${this.onPreviousButtonClick}
          >
            <igds-icon
              slot="icon"
              node=${this.dir==="ltr"?_.chevronLeft:_.chevronRight}
            ></igds-icon>
          </igds-button>
          <igds-button
            variant=${f.IGDS_BUTTON_VARIANTS.link}
            @click=${this.openMonthPicker}
            class="date-picker-popup__header-current-month"
          >
            ${this.getCurrentMonth()}
          </igds-button>
          <igds-button
            variant=${f.IGDS_BUTTON_VARIANTS.link}
            @click=${this.openYearPicker}
          >
            ${this.selectedYear}
          </igds-button>
          <igds-button
            variant=${f.IGDS_BUTTON_VARIANTS.link}
            class="date-picker-popup__header-action-button"
            @click=${this.onNextButtonClick}
          >
            <igds-icon
              slot="icon"
              node=${this.dir==="ltr"?_.chevronRight:_.chevronLeft}
            ></igds-icon>
          </igds-button>
        </div>
        ${this.renderPicker()}
      </div>
    `}onNextButtonClick(){if(this.mode===s.IGDS_DATE_MODE.date&&this.moveToNextMonth(),this.mode===s.IGDS_DATE_MODE.month&&(this.selectedYear+=1,this.emit(a.IGDS_EVENTS.yearChange,this.selectedYear.toString()),this.generateCalendar()),this.mode===s.IGDS_DATE_MODE.year){const e=this.yearRange[0]+s.YEARS_COUNT_TO_DISPLAY;this.yearRange=this.generateYearRange(e)}this.emit(a.IGDS_EVENTS.periodChange)}moveToNextMonth(){this.selectedMonth===11?(this.selectedMonth=0,this.selectedYear+=1):this.selectedMonth+=1,this.emit(a.IGDS_EVENTS.monthChange,this.selectedMonth.toString()),this.generateCalendar()}openMonthPicker(){this.mode===s.IGDS_DATE_MODE.date&&this.emit(a.IGDS_EVENTS.calendarClose),this.mode=s.IGDS_DATE_MODE.month}getCurrentMonth(){return Object.values(s.IGDS_MONTHS)[this.selectedMonth]}openYearPicker(){this.mode===s.IGDS_DATE_MODE.date&&this.emit(a.IGDS_EVENTS.calendarClose),this.mode=s.IGDS_DATE_MODE.year}onPreviousButtonClick(){if(this.mode===s.IGDS_DATE_MODE.date&&this.moveToPreviousMonth(),this.mode===s.IGDS_DATE_MODE.month&&(this.selectedYear-=1,this.emit(a.IGDS_EVENTS.yearChange,this.selectedYear.toString()),this.generateCalendar()),this.mode===s.IGDS_DATE_MODE.year){const e=this.yearRange[0]-s.YEARS_COUNT_TO_DISPLAY;this.yearRange=this.generateYearRange(e)}this.emit(a.IGDS_EVENTS.periodChange)}moveToPreviousMonth(){this.selectedMonth===0?(this.selectedMonth=11,this.selectedYear-=1):this.selectedMonth-=1,this.emit(a.IGDS_EVENTS.monthChange,this.selectedMonth.toString()),this.generateCalendar()}onDatePickerKeyDown(e,t){switch(e.key){case h.IGDS_EVENT_KEYS.ArrowDown:this.moveFocus(7);break;case h.IGDS_EVENT_KEYS.ArrowUp:this.moveFocus(-7);break;case h.IGDS_EVENT_KEYS.ArrowRight:this.moveFocus(1);break;case h.IGDS_EVENT_KEYS.ArrowLeft:this.moveFocus(-1);break;case h.IGDS_EVENT_KEYS.Enter:this.onSelectDay(this.focusedDate??1,t);break}}moveFocus(e){this.focusedDate===null&&(this.focusedDate=1);let t=this.focusedDate+e;t<1?(this.moveToPreviousMonth(),t=this.days.filter(r=>r.isCurrentMonth).length):t>this.days.filter(r=>r.isCurrentMonth).length&&(this.moveToNextMonth(),t=1),this.focusedDate=t}onMonthPickerKeyDown(e){if(this.focusedMonth===null){this.focusedMonth=0;return}switch(e.key){case h.IGDS_EVENT_KEYS.ArrowDown:this.moveMonthPickerFocusDown();break;case h.IGDS_EVENT_KEYS.ArrowUp:this.moveMonthPickerFocusUp();break;case h.IGDS_EVENT_KEYS.ArrowLeft:this.moveMonthPickerFocusLeft();break;case h.IGDS_EVENT_KEYS.ArrowRight:this.moveMonthPickerFocusRight();break;case h.IGDS_EVENT_KEYS.Enter:this.onMonthChange(this.focusedMonth??0);break}}moveMonthPickerFocusLeft(){if(this.focusedMonth===null)return;let e=this.focusedMonth+1;e>=12&&(e=0),this.focusedMonth=e}moveMonthPickerFocusRight(){if(this.focusedMonth===null)return;let e=this.focusedMonth-1;e<0&&(e=11),this.focusedMonth=e}moveMonthPickerFocusDown(){this.focusedMonth!==null&&(this.focusedMonth<=8?this.focusedMonth+=3:this.focusedMonth=0)}moveMonthPickerFocusUp(){this.focusedMonth!==null&&(this.focusedMonth>=3?this.focusedMonth-=3:this.focusedMonth=11)}onYearPickerKeyDown(e){if(this.focusedYear===null){this.focusedYear=this.yearRange[0];return}switch(e.key){case h.IGDS_EVENT_KEYS.ArrowDown:this.moveYearPickerFocusDown();break;case h.IGDS_EVENT_KEYS.ArrowUp:this.moveYearPickerFocusUp();break;case h.IGDS_EVENT_KEYS.ArrowLeft:this.moveYearPickerFocusLeft();break;case h.IGDS_EVENT_KEYS.ArrowRight:this.moveYearPickerFocusRight();break;case h.IGDS_EVENT_KEYS.Enter:this.onYearChange(this.focusedYear??0);break}}moveYearPickerFocusDown(){}moveYearPickerFocusUp(){}moveYearPickerFocusLeft(){this.focusedYear!==null&&(this.focusedYear=this.focusedYear+1)}moveYearPickerFocusRight(){this.focusedYear!==null&&(this.focusedYear=this.focusedYear-1)}renderPicker(){return c.html`
      ${Y.choose(this.mode,[[s.IGDS_DATE_MODE.month,()=>c.html`${this.renderMonthsPicker()}`],[s.IGDS_DATE_MODE.year,()=>c.html`${this.renderYearPicker()}`]],()=>c.html`${y.when(!this.withoutCalendar,()=>c.html`${this.renderDatePicker()}`,()=>c.html`${this.renderMonthsPicker()}`)}`)}
    `}renderDatePicker(){return c.html`
      <div class="date-picker-popup__calendar">
        <div class="date-picker-popup__week-days">
          ${E.repeat(Object.values(this.getWeekDayShortcuts()),e=>c.html`
              <div class="date-picker-popup__week-day">${e}</div>
            `)}
        </div>
        ${y.when(this.days.length,()=>c.html`
            <div class="date-picker-popup__calendar-body">
              ${E.repeat(this.days,e=>c.html`
                  <div
                    tabindex="${e.isCurrentMonth?0:-1}"
                    class=${m.classMap({"date-picker-popup__calendar-day":!0,"date-picker-popup__calendar-day--today":this.isToday(e.day)&&e.isCurrentMonth,"date-picker-popup__calendar-day--not-current-month-day":!e.isCurrentMonth,"date-picker-popup__calendar-day--selected":this.isDateSelected(e.day)&&e.isCurrentMonth,"date-picker-popup__calendar-day--highlighted":this.focusedDate===e.day&&e.isCurrentMonth,"date-picker-popup__calendar-day--disabled":e.disabled,"date-picker-popup__calendar-day--selected-highlighted":this.isDateSelected(e.day)&&this.focusedDate===e.day&&e.isCurrentMonth})}
                    @click=${()=>this.onSelectDay(e.day,e.disabled)}
                    @keydown=${t=>this.onDatePickerKeyDown(t,e.disabled)}
                  >
                    ${this.padNumber(e.day)}
                  </div>
                `)}
            </div>
          `)}
      </div>
    `}getWeekDayShortcuts(){if(this.startWeekOn===s.IGDS_START_WEEK_ON.monday){const e=Object.entries(s.IGDS_WEEK_DAYS_SHORTCUTS),t=e.findIndex(([n])=>n===this.startWeekOn),r=[...e.slice(t),...e.slice(0,t)];return Object.fromEntries(r)}return s.IGDS_WEEK_DAYS_SHORTCUTS}isToday(e){return this.todayDay===e&&this.todayMonth===this.selectedMonth&&this.todayYear===this.selectedYear}get todayDay(){return new Date().getDate()}get todayMonth(){return new Date().getMonth()}get todayYear(){return new Date().getFullYear()}get minDate(){if(!this.min)return null;const e=new Date(this.min);return isNaN(+e)?null:new Date(e.setDate(e.getDate()-1))}get maxDate(){if(!this.max)return null;const e=new Date(this.max);return isNaN(+e)?null:e}get minMonth(){return this.minDate?this.minDate.getMonth():null}get maxMonth(){return this.maxDate?this.maxDate.getMonth():null}get minYear(){return this.minDate?this.minDate.getFullYear():null}get maxYear(){return this.maxDate?this.maxDate.getFullYear():null}isDateSelected(e){if(!this.value)return!1;const t=this.value.split("/"),r=Number(t[2]),n=Number(t[1])-1,l=Number(t[0]);return this.selectedYear===r&&this.selectedMonth===n&&e===l}onSelectDay(e,t){if(t)return;const r=`${this.padNumber(e)}/${this.padNumber(this.selectedMonth+1)}/${this.selectedYear}`;this.value=r??"",this._internals.setFormValue(this.value??null),this.isPopupOpen=!1,this.focusedDate=null,window.removeEventListener("resize",this.resizeHandler),this.stopScrollListener(),this.emit(a.IGDS_EVENTS.dayClick,e.toString()),this.emit(a.IGDS_EVENTS.input,this.value),this.emit(a.IGDS_EVENTS.change,this.value),this.emit(a.IGDS_EVENTS.calendarClose),this.datePicker.value=`${this.selectedYear}-${this.padNumber(this.selectedMonth+1)}-${this.padNumber(e)}`,this.datePicker.dispatchEvent(new Event("change"))}padNumber(e){return e.toString().padStart(2,"0")}renderMonthsPicker(){return c.html`
      <div
        tabindex="0"
        class="date-picker-popup__month-picker"
        @keydown=${this.onMonthPickerKeyDown}
      >
        ${E.repeat(Object.values(s.IGDS_MONTHS),(e,t)=>c.html`
            <div
              class=${m.classMap({"date-picker-popup__month-box":!0,"date-picker-popup__month-box--disabled":!!(this.minMonth&&t<this.minMonth||this.maxMonth&&t>this.maxMonth)})}
              @click=${()=>this.onMonthChange(t)}
              @keydown=${()=>{}}
            >
              <span
                class=${m.classMap({"date-picker-popup__month-label":!0,"date-picker-popup__month-label--selected":this.selectedMonth===t,"date-picker-popup__month-label--highlighted":this.focusedMonth===t,"date-picker-popup__month-label--disabled":!!(this.minMonth&&t<this.minMonth||this.maxMonth&&t>this.maxMonth),"date-picker-popup__month-label--selected-highlighted":this.selectedMonth===t&&this.focusedMonth===t})}
              >
                ${e}
              </span>
            </div>
          `)}
      </div>
    `}onMonthChange(e){this.minMonth&&e<this.minMonth||this.maxMonth&&e>this.maxMonth||(this.selectedMonth=e,this.emit(a.IGDS_EVENTS.monthChange,this.selectedMonth.toString()),this.focusedMonth=null,this.withoutCalendar?this.commitMonthSelection():(this.generateCalendar(),this.mode=s.IGDS_DATE_MODE.date,this.emit(a.IGDS_EVENTS.calendarOpen)))}commitMonthSelection(){const e=`${this.padNumber(this.selectedMonth+1)}/${this.selectedYear}`;this.value=e,this._internals.setFormValue(this.value??null),this.datePicker.value=`${this.selectedYear}-${this.padNumber(this.selectedMonth+1)}`,this.datePicker.dispatchEvent(new Event("change")),this.emit(a.IGDS_EVENTS.input,this.value),this.emit(a.IGDS_EVENTS.change,this.value),this.isPopupOpen=!1,window.removeEventListener("resize",this.resizeHandler),this.stopScrollListener()}renderYearPicker(){return c.html`
      <div
        tabindex="0"
        class="date-picker-popup__year-picker"
        @keydown=${this.onYearPickerKeyDown}
      >
        ${E.repeat(this.yearRange,e=>c.html`
            <div
              class=${m.classMap({"date-picker-popup__year-box":!0,"date-picker-popup__year-box--disabled":!!(this.minYear&&e<this.minYear||this.maxYear&&e>this.maxYear)})}
              @click=${()=>this.onYearChange(e)}
              @keydown=${()=>{}}
            >
              <span
                class=${m.classMap({"date-picker-popup__year-label":!0,"date-picker-popup__year-label--selected":this.selectedYear===e,"date-picker-popup__year-label--disabled":!!(this.minYear&&e<this.minYear||this.maxYear&&e>this.maxYear),"date-picker-popup__year-label--highlighted":this.focusedYear===e,"date-picker-popup__year-label--selected-highlighted":this.selectedYear===e&&this.focusedYear===e})}
              >
                ${e}
              </span>
            </div>
          `)}
      </div>
    `}onYearChange(e){this.minYear&&e<this.minYear||this.maxYear&&e>this.maxYear||(this.selectedYear=e,this.emit(a.IGDS_EVENTS.yearChange,this.selectedYear.toString()),this.focusedYear=null,this.withoutCalendar?this.mode=s.IGDS_DATE_MODE.month:(this.generateCalendar(),this.mode=s.IGDS_DATE_MODE.date,this.emit(a.IGDS_EVENTS.calendarOpen)))}};exports.DatePicker.styles=[M.unsafeCSS($),M.unsafeCSS(O)];exports.DatePicker.formAssociated=!0;i([o.property({type:String,reflect:!0})],exports.DatePicker.prototype,"dir",2);i([o.property({type:String})],exports.DatePicker.prototype,"label",2);i([o.property({type:String,attribute:"label-icon"})],exports.DatePicker.prototype,"labelIcon",2);i([o.property({type:String})],exports.DatePicker.prototype,"name",2);i([o.property({type:String})],exports.DatePicker.prototype,"form",2);i([o.property({type:String,attribute:"default-value"})],exports.DatePicker.prototype,"defaultValue",2);i([o.property({type:String,attribute:"date-format"})],exports.DatePicker.prototype,"dateFormat",2);i([o.property({type:Boolean})],exports.DatePicker.prototype,"disabled",2);i([o.property({type:Boolean})],exports.DatePicker.prototype,"required",2);i([o.property({type:Boolean})],exports.DatePicker.prototype,"readonly",2);i([o.property({type:String})],exports.DatePicker.prototype,"min",2);i([o.property({type:String})],exports.DatePicker.prototype,"max",2);i([o.property({type:String})],exports.DatePicker.prototype,"placeholder",2);i([o.property({type:Boolean,attribute:"without-calendar"})],exports.DatePicker.prototype,"withoutCalendar",2);i([o.property({type:String,attribute:"start-week-on"})],exports.DatePicker.prototype,"startWeekOn",2);i([o.property({type:Boolean})],exports.DatePicker.prototype,"invalid",2);i([o.property({type:String})],exports.DatePicker.prototype,"error",2);i([o.property({type:Boolean,attribute:"with-icon"})],exports.DatePicker.prototype,"withIcon",2);i([o.property({type:Boolean,attribute:"auto-focus"})],exports.DatePicker.prototype,"autoFocus",2);i([o.property({type:String})],exports.DatePicker.prototype,"autocomplete",2);i([o.property({type:Boolean})],exports.DatePicker.prototype,"openOnFocus",2);i([o.property({type:Boolean})],exports.DatePicker.prototype,"autocorrect",2);i([o.property({attribute:!1})],exports.DatePicker.prototype,"onChange",2);i([D.state()],exports.DatePicker.prototype,"isPopupOpen",2);i([D.state()],exports.DatePicker.prototype,"selectedMonth",2);i([D.state()],exports.DatePicker.prototype,"selectedYear",2);i([D.state()],exports.DatePicker.prototype,"days",2);i([D.state()],exports.DatePicker.prototype,"mode",2);i([D.state()],exports.DatePicker.prototype,"yearRange",2);i([D.state()],exports.DatePicker.prototype,"focusedDate",2);i([D.state()],exports.DatePicker.prototype,"focusedMonth",2);i([P.query(".date-picker__input")],exports.DatePicker.prototype,"inputElement",2);i([P.query(".date-picker__native-date-picker")],exports.DatePicker.prototype,"datePicker",2);i([D.state()],exports.DatePicker.prototype,"focusedYear",2);exports.DatePicker=i([I.customElement(w.IGDS_TAGS.datePicker)],exports.DatePicker);
