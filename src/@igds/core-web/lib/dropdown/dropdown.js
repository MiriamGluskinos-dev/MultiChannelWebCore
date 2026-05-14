var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, query, queryAll, state, } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { computePosition, offset, size } from '@floating-ui/dom';
import { AngularFormElement } from '../abstractions';
import { calculateIndexIncrement, throttle, MENU_ITEM_HEIGHT } from '../utils';
import { DELAY_BEFORE_RECALCULATE_POPUP_POSITION, DROPDOWN_POPUP_MAX_HEIGHT, } from './constants';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDS_ICON_SIZES } from '../icon';
import { IGDS_BUTTON_SIZES, IGDS_BUTTON_TYPES, IGDS_BUTTON_VARIANTS, } from '../button';
import { chevronDown, chevronUp, close } from '@igds/icons';
import styles from './dropdown.scss?inline';
import dropdownPopupStyles from './dropdown-popup.scss?inline';
import '../icon/icon';
import '../input/input';
import '../button/button';
import '../checkbox/checkbox';
let Dropdown = class Dropdown extends AngularFormElement {
    constructor() {
        super();
        this.isPopupOpen = false;
        this.noOptions = false;
        this.filterText = '';
        this.highlightedId = null;
        this.treeFocusedIndex = 0;
        this.valueIcon = null;
        this.multiple = false;
        this.treeView = false;
        this.selected = [];
        this.disabled = false;
        this.required = false;
        this.filterable = false;
        this.invalid = false;
        this.dir = 'rtl';
        this.onChange = null;
        this.treeNodes = [];
        this._options = [];
        this._scrollHandler = () => this.setPopupPositionWhenOpen();
        this.handleDocumentMouseDown = (event) => {
            // Close when clicking outside the containing element
            const path = event.composedPath();
            if (this && !path.includes(this)) {
                this.isPopupOpen = false;
                this.highlightedId = null;
                this.removeHighlightedClass();
            }
        };
        this.resizeHandler = throttle(() => {
            this.setPopupPositionWhenOpen();
        }, DELAY_BEFORE_RECALCULATE_POPUP_POSITION);
        this.setAsAngularLibFormElement();
        this._internals = this.attachInternals();
        this.setPopupPosition = this.setPopupPosition.bind(this);
        this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
        this.onClearFilter = this.onClearFilter.bind(this);
    }
    set options(value) {
        if (!value) {
            this._options = [];
            return;
        }
        this._options = value.map((option) => ({
            id: option.id.toString() ?? '',
            label: option.label ?? '',
            icon: option.icon,
            checked: option.checked,
            disabled: option.disabled ?? false,
        }));
    }
    get options() {
        return this._options;
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('resize', this.resizeHandler);
        document.addEventListener('mousedown', this.handleDocumentMouseDown);
    }
    firstUpdated() {
        if (this.filterable) {
            this.multiple = false;
        }
        if (this.multiple) {
            this.filterable = false;
        }
        if (this.selected.length) {
            this.setSelectedOptions();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('noOptions')) {
            this.setPopupPosition();
        }
        if (changedProperties.has('selected')) {
            this.handleSelectedChange();
        }
    }
    handleSelectedChange() {
        if (this.selected.length) {
            this.setSelectedOptions();
        }
        else {
            this.value = '';
            this.filterText = '';
            this.valueIcon = null;
            this.setFormValue(null);
        }
    }
    setSelectedOptions() {
        if (this.multiple) {
            this.setMultiSelectedOptions();
            return;
        }
        if (this.treeView) {
            this.setTreeViewSelectedNode();
            return;
        }
        this.setSingleSelectedOption();
    }
    setMultiSelectedOptions() {
        const options = this.getDropdownOptions();
        if (!options) {
            return;
        }
        options.forEach((option, index) => {
            const checkboxElement = option.querySelector(IGDS_TAGS.checkbox);
            if (checkboxElement && this.selected.includes(option.id)) {
                checkboxElement.checked = true;
                this.select.options[index].selected = true;
            }
        });
        this.select.dispatchEvent(new Event('change'));
        const firstPart = `בחרת`;
        this.value = `${firstPart} ${this.selected.length} ${this.label}`;
        this.setFormValue();
    }
    clearSingleSelectionState() {
        this.value = '';
        this.valueIcon = null;
        this.filterText = '';
        this.setFormValue(null);
    }
    syncSelectElementToOption(selectedOptionId) {
        if (!this.select)
            return;
        Array.from(this.select.options).forEach((_, i) => {
            this.select.options[i].selected = false;
        });
        const idx = Array.from(this.select.options).findIndex((opt) => opt.value === selectedOptionId);
        if (idx >= 0 && this.select.options[idx]) {
            this.select.options[idx].selected = true;
        }
        this.select.dispatchEvent(new Event('change'));
    }
    setSingleSelectedOption() {
        const selectedOptionId = this.selected[0];
        if (!selectedOptionId) {
            this.clearSingleSelectionState();
            return;
        }
        const selectedOption = this.options.find((o) => o.id === selectedOptionId);
        if (!selectedOption)
            return;
        this.value = selectedOption.label;
        this.valueIcon = selectedOption.icon ?? null;
        this.filterText = this.value;
        this.setFormValue(this.value);
        this.syncSelectElementToOption(selectedOptionId);
    }
    setTreeViewSelectedNode() {
        if (!this.selected[0]) {
            this.value = '';
            this.select.dispatchEvent(new Event('change'));
            this.setFormValue(this.value);
            return;
        }
        const selectedNodeId = this.selected[0];
        const node = this.findNodeById(this.treeNodes ?? [], selectedNodeId);
        this.value = node?.label ?? '';
        this.select.dispatchEvent(new Event('change'));
        this.setFormValue(this.value);
    }
    findNodeById(nodes, id) {
        for (const node of nodes) {
            if (node.id === id) {
                return node;
            }
            if (node.children?.length) {
                const result = this.findNodeById(node.children, id);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }
    onClearFilter() {
        this.filterText = '';
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', this.resizeHandler);
        document.removeEventListener('mousedown', this.handleDocumentMouseDown);
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
    isExtraDoublePaddingLtr() {
        return this.filterable && this.filterText && this.dir === 'ltr';
    }
    isExtraDoublePaddingRtr() {
        return (this.filterable && this.filterText && (this.dir === 'rtl' || !this.dir));
    }
    render() {
        return html `
      <div
        role="combobox"
        aria-haspopup="listbox"
        aria-controls="popup"
        aria-expanded=${this.isPopupOpen}
        aria-label=${ifDefined(this.label ? this.label : undefined)}
        aria-invalid=${this.invalid}
        aria-required=${this.required}
        class="dropdown"
      >
        <div class="dropdown__input-box">
          ${this.getInputValueIcon()} ${this.getClearIcon()}
          <igds-input
            class=${classMap({
            dropdown__input: true,
            'dropdown__input-with-extra-double-end-padding-ltr': this.isExtraDoublePaddingLtr(),
            'dropdown__input-with-extra-double-end-padding': this.isExtraDoublePaddingRtr(),
            'dropdown__input-with-extra-start-padding': Boolean(this.valueIcon) && (this.dir === 'rtl' || !this.dir),
            'dropdown__input-with-extra-start-padding-ltr': Boolean(this.valueIcon) && this.dir === 'ltr',
        })}
            ?readonly=${!this.filterable}
            ?required=${this.required}
            ?disabled=${this.disabled}
            ?invalid=${this.invalid}
            ?tooltip-icon=${this.tooltipIcon}
            dir=${ifDefined(this.dir)}
            label=${ifDefined(this.label)}
            label-icon=${ifDefined(this.labelIcon)}
            icon=${this.isPopupOpen ? chevronUp : chevronDown}
            name=${ifDefined(this.name)}
            form=${ifDefined(this.form)}
            placeholder=${ifDefined(this.placeholder)}
            .value=${this.filterable ? this.filterText : this.value}
            tooltip=${ifDefined(this.tooltip)}
            tooltip-question=${ifDefined(this.tooltipQuestion)}
            @click=${this.togglePopup}
            @keydown=${this.onKeyDown}
            @igds-input=${this.setFilterText}
            @igds-blur=${this.onBlur}
            @igds-focus=${this.onFocus}
          >
          </igds-input>
        </div>
        <select
          class="dropdown__select"
          ?disabled=${this.disabled}
          ?multiple=${this.multiple}
          name=${ifDefined(this.name)}
          id="dropdown"
          aria-label="Select label"
          @change=${this.onChangeHandler}
          tabindex="-1"
        >
          ${repeat(this.getOptions(), (option) => option.id, (option) => html ` <option value=${option.id}>
              ${option.label}
            </option>`)}
        </select>
        <div
          role="listbox"
          id="popup"
          aria-label="dropdown-popup"
          class=${classMap({
            'dropdown-popup': true,
            'dropdown-popup--open': this.isPopupOpen,
        })}
        >
          ${this.getPopupActions()} ${this.renderDropdownOptions()}
          ${this.renderNoOptions()}
        </div>
        ${this.getError()} ${this.getHelpContainer()}
      </div>
    `;
    }
    getInputValueIcon() {
        return html `
      ${when(this.valueIcon, () => html `
          <igds-icon
            id="value-icon"
            tabindex="-1"
            role="button"
            aria-label="Dropdown value icon"
            class=${classMap({
            'dropdown__value-icon': true,
            'dropdown__value-icon--ltr': this.dir === 'ltr',
        })}
            node=${this.valueIcon}
            size=${IGDS_ICON_SIZES.medium}
          >
          </igds-icon>
        `)}
    `;
    }
    getClearIcon() {
        return html `
      ${when(this.filterable && this.filterText, () => html `
          <igds-icon
            id="clear-icon"
            tabindex="0"
            role="button"
            aria-label="Dropdown clear icon"
            class=${classMap({
            'dropdown__clear-icon': true,
            'dropdown__clear-icon--ltr': this.dir === 'ltr',
        })}
            node=${close}
            size=${IGDS_ICON_SIZES.medium}
            @click=${this.onClear}
            @keydown=${this.onClearIconKeyDown}
          >
          </igds-icon>
        `)}
    `;
    }
    onClear() {
        this.filterText = '';
        this.value = '';
        this.valueIcon = null;
        this.selected = [];
        this.emit(IGDS_EVENTS.clear, '');
        this.setFormValue(null);
    }
    onClearIconKeyDown(event) {
        if (["Enter" /* IGDS_EVENT_KEYS.Enter */, " " /* IGDS_EVENT_KEYS.Space */].includes(event.key)) {
            this.onClear();
        }
    }
    togglePopup() {
        this.isPopupOpen = !this.isPopupOpen;
        if (this.isPopupOpen) {
            this.setPopupPosition();
            this.startScrollListener();
        }
        else {
            this.stopScrollListener();
            this.removeHighlightedClass();
        }
    }
    removeHighlightedClass() {
        const options = this.getDropdownOptions();
        if (!options)
            return;
        options.forEach((option) => {
            if (option.classList.contains('dropdown-popup__option--highlighted')) {
                option.classList.remove('dropdown-popup__option--highlighted');
            }
        });
    }
    onKeyDown(event) {
        if (![
            "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
            "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
            "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
            "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
            "Enter" /* IGDS_EVENT_KEYS.Enter */,
            "Escape" /* IGDS_EVENT_KEYS.Escape */,
            " " /* IGDS_EVENT_KEYS.Space */,
        ].includes(event.key) ||
            this.disabled)
            return;
        if (this.filterable) {
            this.onKeyDownForFilterableDropdown(event);
            return;
        }
        if (this.multiple) {
            this.onKeyDownForMultipleChoicesDropdown(event);
            return;
        }
        if (this.treeNodes?.length) {
            this.onKeyDownForTreeViewDropdown(event);
            return;
        }
        this.onKeyDownForSingleChoiceDropdown(event);
    }
    processOptionIndex(options) {
        const optionIndex = options.findIndex((option) => option.id === this.highlightedId);
        if (optionIndex || optionIndex === 0) {
            this.select.options[optionIndex].selected = true;
            const option = this.getOptions().find((option) => option.id === this.selected[0]);
            this.value = option?.label ?? '';
            this.valueIcon = option?.icon ?? null;
            this.select.dispatchEvent(new Event('change'));
            this.filterText = this.value;
            this.setFormValue(this.value);
            this.emit(IGDS_EVENTS.keydown, this.value);
            this.removeHighlightedClass();
        }
    }
    selectHighlightedOption(options) {
        const highlightedOption = options.find((option) => option.id === this.highlightedId);
        if (!highlightedOption)
            return true;
        this.selected = [this.highlightedId];
        Array.from(this.select.options).forEach((_, i) => (this.select.options[i].selected = false));
        this.processOptionIndex(options);
        return false;
    }
    handleEnterOrHighlightedSpace(options) {
        this.isPopupOpen = !this.isPopupOpen;
        if (!this.highlightedId || !options?.length) {
            return false;
        }
        return this.selectHighlightedOption(options);
    }
    handleSpaceWithoutHighlight() {
        if (!this.isPopupOpen) {
            this.isPopupOpen = true;
            return true;
        }
        return false;
    }
    handleEnterOrSpaceDown(key, options) {
        if (![" " /* IGDS_EVENT_KEYS.Space */, "Enter" /* IGDS_EVENT_KEYS.Enter */].includes(key)) {
            return false;
        }
        if (key === "Enter" /* IGDS_EVENT_KEYS.Enter */ || this.highlightedId) {
            return this.handleEnterOrHighlightedSpace(options);
        }
        if (key === " " /* IGDS_EVENT_KEYS.Space */ && !this.highlightedId) {
            return this.handleSpaceWithoutHighlight();
        }
        return false;
    }
    handleEscapeDown(key) {
        if (key === "Escape" /* IGDS_EVENT_KEYS.Escape */) {
            this.isPopupOpen = false;
        }
    }
    handleArrowKeysDown(key, options) {
        if ([
            "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
            "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
            "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
            "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
        ].includes(key) &&
            options?.length) {
            const highlightedOption = options.find((option) => option.classList.contains('dropdown-popup__option--highlighted'));
            const increment = calculateIndexIncrement(key);
            let index = highlightedOption
                ? options.indexOf(highlightedOption) + increment
                : 0;
            if (index < 0) {
                index = options.length - 1;
            }
            if (index > options.length - 1) {
                index = 0;
            }
            options.forEach((option) => {
                if (option.classList.contains('dropdown-popup__option--highlighted')) {
                    option.classList.remove('dropdown-popup__option--highlighted');
                }
            });
            options[index].classList.add('dropdown-popup__option--highlighted');
            options[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
            this.highlightedId = options[index].id;
        }
    }
    onKeyDownForFilterableDropdown(event) {
        const options = this.getDropdownOptions();
        if (this.handleEnterOrSpaceDown(event.key, options)) {
            return;
        }
        this.setPopupPositionWhenOpen();
        this.handleEscapeDown(event.key);
        this.handleArrowKeysDown(event.key, options);
    }
    processCheckboxChecked(checkboxElement, highlightedOption, options) {
        checkboxElement.checked = !checkboxElement.checked;
        const index = options.indexOf(highlightedOption);
        if (checkboxElement.checked) {
            this.selected = [...this.selected, this.highlightedId];
            this.select.options[index].selected = true;
        }
        else {
            const selectedIndex = this.selected.indexOf(this.highlightedId);
            this.selected = this.selected.filter((_, i) => i !== selectedIndex);
            this.select.options[index].selected = false;
        }
    }
    emitComponentEvents() {
        this.select.dispatchEvent(new Event('change'));
        const firstPart = `בחרת`;
        this.value = this.selected.length
            ? `${firstPart} ${this.selected.length} ${this.label}`
            : '';
        this.emit(IGDS_EVENTS.keydown, this.value);
        this.setFormValue();
    }
    handleEnterOrSpaceDownForMultipleChoicesDropdown(event) {
        if (![" " /* IGDS_EVENT_KEYS.Space */, "Enter" /* IGDS_EVENT_KEYS.Enter */].includes(event.key)) {
            return;
        }
        if (!this.highlightedId) {
            this.isPopupOpen = !this.isPopupOpen;
            return;
        }
        event.stopPropagation();
        event.preventDefault();
        const options = this.getDropdownOptions();
        if (!options?.length)
            return;
        const highlightedOption = options.find((option) => option.id === this.highlightedId);
        if (!highlightedOption)
            return;
        const checkboxElement = highlightedOption.querySelector(IGDS_TAGS.checkbox);
        if (!checkboxElement)
            return;
        this.processCheckboxChecked(checkboxElement, highlightedOption, options);
        this.emitComponentEvents();
    }
    handleArrowsDownForMultipleChoiceDropdown(key) {
        if (![
            "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
            "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
            "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
            "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
        ].includes(key)) {
            return;
        }
        const options = this.getDropdownOptions();
        if (!options)
            return;
        const highlightedOption = options.find((option) => option.classList.contains('dropdown-popup__option--highlighted'));
        const increment = this.calculateIndexIncrement(key);
        let index = highlightedOption
            ? options.indexOf(highlightedOption) + increment
            : 0;
        if (index < 0) {
            index = options.length - 1;
        }
        if (index > options.length - 1) {
            index = 0;
        }
        options.forEach((option) => {
            if (option.classList.contains('dropdown-popup__option--highlighted')) {
                option.classList.remove('dropdown-popup__option--highlighted');
            }
        });
        options[index].classList.add('dropdown-popup__option--highlighted');
        options[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        });
        this.highlightedId = options[index].id;
    }
    onKeyDownForMultipleChoicesDropdown(event) {
        this.handleEnterOrSpaceDownForMultipleChoicesDropdown(event);
        this.handleEscapeDown(event.key);
        this.setPopupPositionWhenOpen();
        this.handleArrowsDownForMultipleChoiceDropdown(event.key);
    }
    handleEnterOrSpaceDownForTreeViewDropdown(event) {
        if (![" " /* IGDS_EVENT_KEYS.Space */, "Enter" /* IGDS_EVENT_KEYS.Enter */].includes(event.key)) {
            return;
        }
        event.stopPropagation();
        event.preventDefault();
        this.isPopupOpen = !this.isPopupOpen;
        if (!this.isPopupOpen && this.highlightedId) {
            const option = this.treeNodes?.find((item) => item.id === this.highlightedId);
            if (option) {
                this.selected = [this.highlightedId];
                this.value = option?.label ?? '';
                this.select.dispatchEvent(new Event('change'));
                this.setFormValue(this.value);
                this.emit(IGDS_EVENTS.keydown, this.value);
            }
        }
    }
    onKeyDownForTreeViewDropdown(event) {
        this.handleEnterOrSpaceDownForTreeViewDropdown(event);
        this.handleEscapeDown(event.key);
        this.setPopupPositionWhenOpen();
        if (!this.isPopupOpen) {
            return;
        }
        if (event.key === "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */) {
            this.treeFocusedIndex += 1;
        }
        if (event.key === "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */) {
            this.treeFocusedIndex -= 1;
        }
        if (event.key === "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */) {
            this.treeExpandedId = this.highlightedId ?? '';
        }
        if (event.key === "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */) {
            this.treeCollapsedId = this.highlightedId ?? '';
        }
    }
    scrollToIndexWhenMoveDown(index) {
        if ((index - 5) * MENU_ITEM_HEIGHT - this.listElement.scrollTop < 0) {
            return;
        }
        this.listElement.scrollTo(0, (index - 4) * MENU_ITEM_HEIGHT);
    }
    scrollToIndexWhenMoveUp(index) {
        if (index * MENU_ITEM_HEIGHT - this.listElement.scrollTop > 0) {
            return;
        }
        this.listElement.scrollTo(0, index * MENU_ITEM_HEIGHT);
    }
    handleEnterOrSpaceDownForSingleChoiceDropdown(key) {
        if ([" " /* IGDS_EVENT_KEYS.Space */, "Enter" /* IGDS_EVENT_KEYS.Enter */].includes(key)) {
            this.isPopupOpen = !this.isPopupOpen;
        }
    }
    findSingleChoiceIndex(options, key) {
        const selectedOption = options.find((option) => option.classList.contains('dropdown-popup__option--selected'));
        const increment = this.calculateIndexIncrement(key);
        let index = selectedOption
            ? options.indexOf(selectedOption) + increment
            : 0;
        if (index < 0) {
            index = options.length - 1;
        }
        if (index > options.length - 1) {
            index = 0;
        }
        return index;
    }
    processSingleChoiceDropdownOptions(options, index) {
        options.forEach((option) => {
            option.classList.remove('dropdown-popup__option--selected');
        });
        options[index].classList.add('dropdown-popup__option--selected');
        options[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        });
        this.selected = [options[index].id];
        Array.from(this.select.options).forEach((_, i) => (this.select.options[i].selected = false));
        this.select.options[index].selected = true;
        const option = this.getOptions().find((option) => option.id === this.selected[0]);
        this.value = option?.label ?? '';
        this.valueIcon = option?.icon ?? null;
        this.select.dispatchEvent(new Event('change'));
        this.filterText = this.filterable ? this.value : '';
    }
    handleArrowsDownForSingleChoiceDropdown(key) {
        if (![
            "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
            "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
            "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
            "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
        ].includes(key)) {
            return;
        }
        const options = this.getDropdownOptions();
        if (!options) {
            return;
        }
        const index = this.findSingleChoiceIndex(options, key);
        this.processSingleChoiceDropdownOptions(options, index);
        this.emit(IGDS_EVENTS.keydown, this.value);
    }
    onKeyDownForSingleChoiceDropdown(event) {
        this.handleEnterOrSpaceDownForSingleChoiceDropdown(event.key);
        if (this.isPopupOpen) {
            this.setPopupPosition();
        }
        this.handleEscapeDown(event.key);
        this.handleArrowsDownForSingleChoiceDropdown(event.key);
        if (this.selected && this.value) {
            this.setFormValue(this.value);
        }
    }
    async setPopupPosition() {
        if (!this.trigger)
            return;
        const popupElement = this.shadowRoot?.getElementById('popup');
        if (!popupElement)
            return;
        const triggerWidth = this.trigger.clientWidth;
        const { x, y } = await computePosition(this.trigger, popupElement, {
            placement: 'bottom-start',
            strategy: 'fixed',
            middleware: [
                offset(2),
                size({
                    apply() {
                        Object.assign(popupElement.style, {
                            width: `${triggerWidth}px`,
                            maxHeight: `${DROPDOWN_POPUP_MAX_HEIGHT}px`,
                        });
                    },
                    padding: 5,
                }),
            ],
        });
        Object.assign(popupElement.style, {
            left: `${x}px`,
            top: `${y}px`,
        });
    }
    setPopupPositionWhenOpen() {
        if (this.isPopupOpen) {
            this.setPopupPosition();
        }
    }
    getDropdownOptions() {
        return this.dropdownOptionElements
            ? [...this.dropdownOptionElements]
            : null;
    }
    setFilterText(event) {
        const input = event.target;
        this.filterText = input.value;
        this.value = this.filterText;
    }
    onBlur(event) {
        const input = event.target;
        const value = input.value;
        this.emit(IGDS_EVENTS.blur, value);
    }
    onFocus(event) {
        const input = event.target;
        const value = input.value;
        this.emit(IGDS_EVENTS.focus, value);
    }
    onChangeHandler(event) {
        const input = event.target;
        const value = input.value;
        this.emit(IGDS_EVENTS.change, this.multiple ? this.selected : value);
        this.onChange?.(event);
    }
    calculateIndexIncrement(eventKey) {
        if (["ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */, "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */].includes(eventKey)) {
            return -1;
        }
        else if (["ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */, "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */].includes(eventKey)) {
            return 1;
        }
        return 0;
    }
    getPopupActions() {
        return html `
      ${when(this.multiple && this.getOptions().length, () => html `
          <div class="dropdown-popup__actions-box">
            <igds-button
              type=${IGDS_BUTTON_TYPES.button}
              variant=${IGDS_BUTTON_VARIANTS.link}
              size=${IGDS_BUTTON_SIZES.medium}
              @igds-click=${this.selectAllHandler}
            >
              בחירת הכל
            </igds-button>
            <igds-button
              type=${IGDS_BUTTON_TYPES.button}
              variant=${IGDS_BUTTON_VARIANTS.link}
              size=${IGDS_BUTTON_SIZES.medium}
              @igds-click=${this.resetAllHandler}
            >
              הסרת הכל
            </igds-button>
          </div>
          <igds-divider></igds-divider>
        `)}
    `;
    }
    selectAllHandler() {
        const options = this.getDropdownOptions();
        if (!options) {
            return;
        }
        const newSelected = [...this.selected];
        options.forEach((option, index) => {
            const checkboxElement = option.querySelector(IGDS_TAGS.checkbox);
            if (checkboxElement &&
                !checkboxElement.checked &&
                !checkboxElement.disabled) {
                checkboxElement.checked = true;
                this.select.options[index].selected = true;
                newSelected.push(option.id);
            }
            return option;
        });
        this.selected = newSelected;
        this.select.dispatchEvent(new Event('change'));
        const firstPart = 'בחרת';
        this.value = `${firstPart} ${this.selected.length} ${this.label}`;
        this.setFormValue();
    }
    getFormValue(value) {
        if (typeof value === 'string') {
            return value;
        }
        const formData = new FormData();
        value.forEach((v) => {
            formData.append(this.name, v);
        });
        return formData;
    }
    resetAllHandler() {
        const options = this.getDropdownOptions();
        if (!options) {
            return;
        }
        options.forEach((option, i) => {
            const checkboxElement = option.querySelector(IGDS_TAGS.checkbox);
            if (checkboxElement && checkboxElement.checked) {
                checkboxElement.checked = false;
                this.select.options[i].selected = false;
            }
            return option;
        });
        this.selected = [];
        this.select.dispatchEvent(new Event('change'));
        this.value = '';
        this.setFormValue(null);
    }
    renderDropdownOptions() {
        return html `
      ${when(this.getOptions().length && !this.treeNodes?.length, () => html `
          <div
            role="list"
            class="dropdown-popup__options-list"
            part="scrollable"
          >
            ${repeat(this.getOptions(), (option) => option.id, (option, index) => html `
                <div
                  id=${option.id}
                  role="option"
                  aria-selected=${this.selected.includes(option.id)}
                  class=${classMap({
            'dropdown-popup__option': true,
            'dropdown-popup__option--selected': !this.multiple &&
                this.selected &&
                this.selected[0] === option.id,
            'dropdown-popup__option--disabled': option.disabled ?? false,
        })}
                  aria-disabled=${option.disabled ?? false}
                  @click=${() => this.onSelect(option, index)}
                  @keydown=${() => { }}
                >
                  ${when(this.multiple, () => html `
                      <igds-checkbox
                        ?checked=${option.checked}
                        ?disabled=${option.disabled}
                        class="dropdown-popup__option-checkbox"
                      >
                      </igds-checkbox>
                    `)}
                  ${when(option.icon, () => html `
                      <igds-icon
                        node=${option.icon}
                        aria-hidden=${!option.icon}
                        class=${classMap({
            'dropdown-popup__option-icon': true,
            'dropdown-popup__option-icon--disabled': option.disabled ?? false,
        })}
                      >
                      </igds-icon>
                    `)}
                  <span
                    class=${classMap({
            'dropdown-popup__option-label': true,
            'dropdown-popup__option-label--disabled': option.disabled ?? false,
        })}
                  >
                    ${option.label}
                  </span>
                </div>
              `)}
          </div>
        `, () => html `${this.renderDropdownTreeView()}`)}
    `;
    }
    renderDropdownTreeView() {
        return html `
      ${when(this.treeNodes?.length, () => html `
          <div
            role="list"
            class="dropdown-popup__options-list"
            part="scrollable"
          >
            <igds-tree-view
              .nodes=${this.treeNodes}
              selected-node-id=${this.selected[0]}
              focused-index=${this.treeFocusedIndex}
              collapsed-id=${this.treeCollapsedId ?? ''}
              expanded-id=${this.treeExpandedId ?? ''}
              @igds-click=${this.onTreeNodeClick}
              @igds-focused-item-changed=${this.onTreeNodeFocusChanged}
              @igds-collapsed-item-changed=${this.resetTreeCollapsedIds}
            ></igds-tree-view>
          </div>
        `)}
    `;
    }
    renderNoOptions() {
        return html `
      ${when(!this.getOptions().length && this.treeNodes?.length === 0, () => html `
          <div class="dropdown-popup__no-options">לא נמצאו אפשרויות</div>
        `)}
    `;
    }
    getOptions() {
        return this.filterable ? this.filteredOptions : this.options;
    }
    get filteredOptions() {
        if (!this.filterText) {
            this.noOptions = false;
            return this.options;
        }
        const filteredOptions = this.options.filter((option) => option.label.includes(this.filterText));
        if (!filteredOptions.length) {
            this.noOptions = true;
        }
        return filteredOptions;
    }
    onSelect(option, index) {
        if (option.disabled) {
            return;
        }
        if (this.multiple) {
            this.onMultiSelect(option, index);
        }
        else {
            this.onSingleSelect(option, index);
        }
        if (this.value && !this.multiple) {
            this.emit(IGDS_EVENTS.change, this.value);
        }
        if (this.multiple) {
            this.emit(IGDS_EVENTS.change, this.selected);
        }
    }
    onMultiSelect(option, index) {
        const dropdownOptionElements = this.getDropdownOptions();
        if (dropdownOptionElements) {
            const dropdownOptionElement = dropdownOptionElements[index];
            const checkboxElement = dropdownOptionElement.querySelector(IGDS_TAGS.checkbox);
            if (checkboxElement) {
                checkboxElement.checked = !checkboxElement.checked;
            }
        }
        const existOptionIndex = this.selected.indexOf(option.id);
        if (existOptionIndex === -1) {
            this.selected = [...this.selected, option.id];
        }
        else {
            this.selected = this.selected.filter((_, i) => i !== existOptionIndex);
        }
        this.select.options[index].selected = !this.select.options[index].selected;
        this.select.dispatchEvent(new Event('change'));
        const firstPart = 'בחרת';
        this.value = this.selected.length
            ? `${firstPart} ${this.selected.length} ${this.label}`
            : '';
        this.setFormValue();
    }
    setFormValue(value) {
        if (value !== undefined) {
            this._internals.setFormValue(value);
            return;
        }
        if (this.selected.length > 0) {
            this._internals.setFormValue(this.getFormValue(this.selected));
        }
        else {
            this._internals.setFormValue(null);
        }
    }
    onSingleSelect(option, index) {
        Array.from(this.select.options).forEach((_, optionIndex) => {
            this.select.options[optionIndex].selected = false;
        });
        this.select.options[index].selected = true;
        this.selected = [option.id];
        this.value = option.label;
        this.valueIcon = option.icon ?? null;
        this.select.dispatchEvent(new Event('change'));
        this.filterText = this.value;
        this.setFormValue(this.value);
        this.isPopupOpen = false;
    }
    onTreeNodeClick(event) {
        const nodeValue = event.detail.value.label;
        this.selected = event.detail.value.id;
        this.value = nodeValue;
        this.setFormValue(this.value);
        this.isPopupOpen = false;
        if (this.value) {
            this.emit(IGDS_EVENTS.change, this.value);
        }
    }
    onTreeNodeFocusChanged(event) {
        this.highlightedId = event.detail.value.id;
        if (event.detail.value.index < 1) {
            this.treeFocusedIndex = 0;
        }
        if (event.detail.value.index >= event.detail.value.maxItems) {
            this.treeFocusedIndex = event.detail.value.maxItems - 1;
        }
        if (event.detail.value.direction === 'down') {
            this.scrollToIndexWhenMoveDown(event.detail.value.index);
        }
        else {
            this.scrollToIndexWhenMoveUp(event.detail.value.index);
        }
    }
    resetTreeCollapsedIds() {
        this.treeCollapsedId = '';
        this.treeExpandedId = '';
    }
    getError() {
        return html `
      ${when(this.invalid && this.error, () => html `
          <igds-default-error-box
            id="dropdown-error"
            class="dropdown__error"
            errormessage=${ifDefined(this.error)}
          >
          </igds-default-error-box>
        `)}
    `;
    }
    getHelpContainer() {
        return html `${when(!this.error && (this.helpIcon || this.helpText), () => html `
        <div id="dropdown-help-message" class="dropdown__help-message">
          ${this.getHelpIcon()} ${this.getHelpText()}
        </div>
      `)}`;
    }
    getHelpIcon() {
        return html `${when(this.helpIcon, () => html `
        <igds-icon
          node=${this.helpIcon}
          aria-hidden=${!this.helpIcon}
          class=${classMap({
            'dropdown__help-icon': true,
            'dropdown__help-icon--disabled': this.disabled,
        })}
        >
        </igds-icon>
      `)}`;
    }
    getHelpText() {
        return html `
      ${when(this.helpText, () => html `<span
            class=${classMap({
            'dropdown__help-text': true,
            'dropdown__help-text--disabled': this.disabled,
        })}
            >${this.helpText}</span
          >`)}
    `;
    }
};
Dropdown.formAssociated = true;
Dropdown.styles = [unsafeCSS(styles), unsafeCSS(dropdownPopupStyles)];
__decorate([
    query('.dropdown__input')
], Dropdown.prototype, "trigger", void 0);
__decorate([
    query('#dropdown')
], Dropdown.prototype, "select", void 0);
__decorate([
    queryAll('.dropdown-popup__option')
], Dropdown.prototype, "dropdownOptionElements", void 0);
__decorate([
    query('.dropdown-popup__options-list')
], Dropdown.prototype, "listElement", void 0);
__decorate([
    state()
], Dropdown.prototype, "isPopupOpen", void 0);
__decorate([
    state()
], Dropdown.prototype, "noOptions", void 0);
__decorate([
    state()
], Dropdown.prototype, "filterText", void 0);
__decorate([
    state()
], Dropdown.prototype, "highlightedId", void 0);
__decorate([
    state()
], Dropdown.prototype, "treeCollapsedId", void 0);
__decorate([
    state()
], Dropdown.prototype, "treeExpandedId", void 0);
__decorate([
    state()
], Dropdown.prototype, "treeFocusedIndex", void 0);
__decorate([
    state()
], Dropdown.prototype, "valueIcon", void 0);
__decorate([
    property({ type: String })
], Dropdown.prototype, "label", void 0);
__decorate([
    property({ type: String, attribute: 'label-icon' })
], Dropdown.prototype, "labelIcon", void 0);
__decorate([
    property({ type: String })
], Dropdown.prototype, "name", void 0);
__decorate([
    property({ type: Boolean })
], Dropdown.prototype, "multiple", void 0);
__decorate([
    property({ type: Boolean })
], Dropdown.prototype, "treeView", void 0);
__decorate([
    property({ type: String })
], Dropdown.prototype, "form", void 0);
__decorate([
    property({
        type: Array,
        converter: (value) => {
            if (Array.isArray(value)) {
                return value;
            }
            return value ? JSON.parse(value) : [];
        },
    })
], Dropdown.prototype, "selected", void 0);
__decorate([
    property({ type: String })
], Dropdown.prototype, "defaultValue", void 0);
__decorate([
    property({ type: String })
], Dropdown.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean })
], Dropdown.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Dropdown.prototype, "required", void 0);
__decorate([
    property({ type: Array })
], Dropdown.prototype, "options", null);
__decorate([
    property({ type: Boolean })
], Dropdown.prototype, "filterable", void 0);
__decorate([
    property({ type: String, attribute: 'help-text' })
], Dropdown.prototype, "helpText", void 0);
__decorate([
    property({ type: String, attribute: 'help-icon' })
], Dropdown.prototype, "helpIcon", void 0);
__decorate([
    property({ type: String })
], Dropdown.prototype, "tooltip", void 0);
__decorate([
    property({ type: String, attribute: 'tooltip-question' })
], Dropdown.prototype, "tooltipQuestion", void 0);
__decorate([
    property({ type: Boolean, attribute: 'tooltip-icon' })
], Dropdown.prototype, "tooltipIcon", void 0);
__decorate([
    property({ type: Boolean })
], Dropdown.prototype, "invalid", void 0);
__decorate([
    property({ type: String })
], Dropdown.prototype, "error", void 0);
__decorate([
    property({ type: String })
], Dropdown.prototype, "dir", void 0);
__decorate([
    property({ attribute: false })
], Dropdown.prototype, "onChange", void 0);
__decorate([
    property({ type: Array })
], Dropdown.prototype, "treeNodes", void 0);
Dropdown = __decorate([
    customElement(IGDS_TAGS.dropdown)
], Dropdown);
export { Dropdown };
