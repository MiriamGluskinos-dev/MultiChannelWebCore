var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { computePosition, offset, size } from '@floating-ui/dom';
import { customElement, property, query, queryAll, state, } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { repeat } from 'lit/directives/repeat.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDSElement } from '../abstractions';
import { throttle } from '../utils';
import { IGDS_ICON_SIZES } from '../icon';
import { IGDS_DIVIDER_ORIENTATIONS } from '../divider';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { DELAY_BEFORE_RECALCULATE_POPUP_POSITION, IGDS_SEARCH_FIELD_VARIANTS, SEARCH_FIELD_POPUP_MAX_HEIGHT, } from './constants';
import styles from './search-field.scss?inline';
import popupStyles from './search-field-popup.scss?inline';
import '../icon/icon';
import '../input/input';
import '../button/button';
import { search, close, optionsHoriz, chevronUp, chevronDown } from '@igds/icons';
import '../divider/divider';
import '../filters/filter';
let SearchField = class SearchField extends IGDSElement {
    constructor() {
        super();
        this.isPopupOpen = false;
        this.isFilterPopupOpen = false;
        this.isFirstInputToggled = false;
        this.firstInputValue = '';
        this.lastInputValue = '';
        this.highlightedId = null;
        this.value = '';
        this.filterPlaceholder = 'כל הגופים';
        this.variant = IGDS_SEARCH_FIELD_VARIANTS.default;
        this.disabled = false;
        this.clearable = true;
        this.voiceSearch = false;
        this.dir = 'rtl';
        this.filters = [];
        this.showEmptyResultsMessage = true;
        this._suggestions = [];
        this._filterSuggestions = [];
        this._suggestionsProvided = false;
        this.resizeHandler = throttle(() => {
            if (this.isPopupOpen || this.isFilterPopupOpen) {
                this.setPopupPosition(this.isFilterPopupOpen ? 'filter-popup' : 'popup');
            }
        }, DELAY_BEFORE_RECALCULATE_POPUP_POSITION);
        this._scrollHandler = () => {
            if (this.isPopupOpen || this.isFilterPopupOpen) {
                this.setPopupPosition(this.isFilterPopupOpen ? 'filter-popup' : 'popup');
            }
        };
        this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
        this.onLastInputSearch = this.onLastInputSearch.bind(this);
    }
    set suggestions(value) {
        if (!value) {
            this._suggestions = [];
            this._suggestionsProvided = false;
            return;
        }
        this._suggestionsProvided = true;
        this._suggestions = value.map((suggestion) => ({
            id: suggestion.id.toString() ?? '',
            label: suggestion.label ?? '',
            icon: suggestion.icon,
            value: suggestion.value ?? '',
            disabled: suggestion.disabled ?? false,
        }));
    }
    get suggestions() {
        return this._suggestions;
    }
    set filterSuggestions(value) {
        if (!value) {
            this._filterSuggestions = [];
            return;
        }
        this._filterSuggestions = value.map((suggestion) => ({
            id: suggestion.id.toString() ?? '',
            label: suggestion.label ?? '',
            icon: suggestion.icon,
            value: suggestion.value ?? '',
            disabled: suggestion.disabled ?? false,
        }));
    }
    get filterSuggestions() {
        return this._filterSuggestions;
    }
    handleDocumentMouseDown(event) {
        // Close when clicking outside the containing element
        const path = event.composedPath();
        if (this && !path.includes(this)) {
            this.isPopupOpen = false;
            this.isFilterPopupOpen = false;
            window.removeEventListener('resize', this.resizeHandler);
            this.stopScrollListener();
            if (this.variant === IGDS_SEARCH_FIELD_VARIANTS.dividedSearch) {
                this.isFirstInputToggled = false;
            }
        }
    }
    onAudioRecorderStop(event) {
        if (!(event instanceof CustomEvent)) {
            return;
        }
        this.playAudio(event.detail.audio);
    }
    playAudio(audioFile) {
        if (!this.audioElement || !this.sourceElement)
            return;
        const reader = new FileReader();
        reader.onload = (event) => {
            const base64URL = event.target.result;
            this.sourceElement.src = base64URL;
            this.sourceElement.type = audioFile.type;
            this.audioElement.load();
            this.audioElement.play.call(this.audioElement);
        };
        reader.readAsDataURL(audioFile);
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
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('click', this.handleDocumentMouseDown);
        window.removeEventListener('resize', this.resizeHandler);
        this.stopScrollListener();
    }
    render() {
        return html `
      <div class="search" role="search">
        ${when(this.variant === IGDS_SEARCH_FIELD_VARIANTS.dividedSearch, () => this.renderDividedSearchField(), () => this.renderDefaultOrHeroSearchField())}
        <div
          id="popup"
          class=${classMap({
            'search-popup': true,
            'search-popup--open': this.isPopupOpen,
        })}
          role="listbox"
          aria-live="polite"
          aria-label="search-popup"
          part="scrollable"
        >
          ${this.renderSuggestions()}
        </div>
        ${when(this.variant === IGDS_SEARCH_FIELD_VARIANTS.searchFilter, () => html `
            <igds-horizontal-filter
              dir=${ifDefined(this.dir)}
              id="filter-popup"
              class=${classMap({
            'search-popup': true,
            'search-popup--filter': true,
            'search-popup--open': this.isFilterPopupOpen,
        })}
              apply-label="החל סינון"
              .filters=${this.filters}
              @igds-apply=${this.onApply}
            ></igds-horizontal-filter>
          `)}
      </div>
    `;
    }
    onApply(event) {
        this.isFilterPopupOpen = false;
        event.preventDefault();
        window.removeEventListener('resize', this.resizeHandler);
        this.stopScrollListener();
    }
    getInputIcon() {
        return this.isFirstInputToggled && this.isPopupOpen
            ? chevronUp
            : chevronDown;
    }
    getInputCssClasses() {
        return classMap({
            'search__positioned-input': true,
            'search__positioned-input--disabled': this.disabled,
            'search__input--divided-with-extra-double-end-padding': this.clearable &&
                this.firstInputValue &&
                (this.dir === 'rtl' || !this.dir),
            'search__input--divided-with-extra-double-end-padding-ltr': this.clearable && this.firstInputValue && this.dir === 'ltr',
            'search__input--disabled-transparent-border': this.disabled,
        });
    }
    renderClearIcon({ ariaLabel, onClick, onKeyDown, tabIndex = 0, }) {
        return html `
      <igds-icon
        node=${close}
        size=${IGDS_ICON_SIZES.medium}
        role="button"
        tabindex="${tabIndex}"
        aria-label="${ariaLabel}"
        class=${classMap({
            'search__clear-icon': true,
            'search__clear-icon--disabled': this.disabled,
        })}
        @click=${onClick}
        @keydown=${onKeyDown}
      >
      </igds-icon>
    `;
    }
    renderFirstPart() {
        return html `
      <div class="search__part">
        <igds-input
          role="searchbox"
          aria-label="first-search-input"
          ?disabled=${this.disabled}
          dir=${ifDefined(this.dir)}
          placeholder=${this.filterPlaceholder}
          icon=${this.getInputIcon()}
          .value=${this.firstInputValue}
          @focus=${this.toggleSuggestionPopupByFirstInput}
          @keydown=${(event) => this.onKeyDown(event, true)}
          @igds-input=${this.onFirstInputChange}
          class=${this.getInputCssClasses()}
        >
        </igds-input>
        ${when(this.clearable && this.firstInputValue, () => html `
            <div class="search__icons-box search__icons-box--clear">
              ${this.renderClearIcon({
            ariaLabel: 'נקה את שדה הקלט הראשון',
            onClick: (event) => this.onClear(event, true),
            onKeyDown: (event) => this.onClearIconKeyDown(event, true),
        })}
            </div>
          `)}
      </div>
    `;
    }
    renderSecondPart() {
        return html `
      <div class="search__part">
        <igds-input
          id="search-last-input"
          role="searchbox"
          aria-label="last-search-input"
          ?disabled=${this.disabled}
          dir=${ifDefined(this.dir)}
          placeholder=${ifDefined(this.placeholder)}
          icon=${search}
          .value=${this.lastInputValue}
          @focus=${this.toggleSuggestionPopup}
          @keydown=${this.onKeyDown}
          @igds-input=${this.onLastInputChange}
          @igds-input-icon-click=${this.onLastInputSearch}
          class=${classMap({
            'search__positioned-input': true,
            'search__positioned-input--disabled': this.disabled,
            'search__input--divided-with-extra-double-end-padding': this.clearable &&
                this.lastInputValue &&
                (this.dir === 'rtl' || !this.dir),
            'search__input--divided-with-extra-double-end-padding-ltr': this.clearable && this.lastInputValue && this.dir === 'ltr',
            'search__input--disabled-transparent-border': this.disabled,
        })}
        >
        </igds-input>
        ${when(this.clearable && this.lastInputValue, () => html `
            <div class="search__icons-box search__icons-box--clear">
              ${this.renderClearIcon({
            ariaLabel: 'נקה את שדה הקלט האחרון',
            onClick: this.onClear,
            onKeyDown: this.onClearIconKeyDown,
        })}
            </div>
          `)}
      </div>
    `;
    }
    renderDividedSearchField() {
        return html `
      <div
        class=${classMap({
            'search--divided': true,
            'search--divided-disabled': this.disabled,
        })}
      >
        ${this.renderFirstPart()}
        <igds-divider
          class="search__divider"
          orientation=${IGDS_DIVIDER_ORIENTATIONS.vertical}
        >
        </igds-divider>
        ${this.renderSecondPart()}
      </div>
    `;
    }
    isLtrHero() {
        return (this.dir === 'ltr' && this.variant !== IGDS_SEARCH_FIELD_VARIANTS.hero);
    }
    isRtlHero() {
        return (this.variant === IGDS_SEARCH_FIELD_VARIANTS.hero &&
            (this.dir === 'rtl' || !this.dir));
    }
    isLtlHero() {
        return (this.variant === IGDS_SEARCH_FIELD_VARIANTS.hero && this.dir === 'ltr');
    }
    isRtlHeroWithDoubleEndPadding() {
        return (this.variant === IGDS_SEARCH_FIELD_VARIANTS.hero &&
            this.clearable &&
            !!this.value &&
            (this.dir === 'rtl' || !this.dir));
    }
    isLtlHeroWithDoubleEndPadding() {
        return (this.variant === IGDS_SEARCH_FIELD_VARIANTS.hero &&
            this.clearable &&
            this.dir === 'ltr');
    }
    hasExtraEndPadding() {
        return (((this.clearable && this.value) || this.voiceSearch) &&
            this.variant !== IGDS_SEARCH_FIELD_VARIANTS.hero);
    }
    hasExtraDoubleEndPadding(dir) {
        return this.clearable && this.value && this.voiceSearch && this.dir === dir;
    }
    renderDefaultOrHeroSearchField() {
        return html `
      <igds-input
        role="searchbox"
        aria-label="search-input"
        icon=${ifDefined(this.variant !== IGDS_SEARCH_FIELD_VARIANTS.hero ? search : undefined)}
        icon-position="right"
        ?disabled=${this.disabled}
        dir=${ifDefined(this.dir)}
        placeholder=${ifDefined(this.placeholder)}
        .value=${this.value}
        class=${classMap({
            search__input: true,
            'search__input--ltr': this.isLtrHero(),
            'search__input--large': this.isRtlHero(),
            'search__input--large-ltr': this.isLtlHero(),
            'search__input--large-with-extra-double-end-padding': this.isRtlHeroWithDoubleEndPadding(),
            'search__input--large-with-extra-double-end-padding-ltr': this.isLtlHeroWithDoubleEndPadding(),
            'search__input--with-extra-end-padding': this.hasExtraEndPadding(),
            'search__input--with-extra-double-end-padding': this.hasExtraDoubleEndPadding('rtl'),
            'search__input--with-extra-double-end-padding-ltr': this.hasExtraDoubleEndPadding('ltr'),
        })}
        @click=${this.toggleSuggestionPopup}
        @igds-input-icon-click=${this.onSearch}
        @keydown=${this.onKeyDown}
        @igds-input=${this.onInput}
      >
      </igds-input>
      ${this.getIconsAndAudioRecorderBox()}
    `;
    }
    isRelevantKey(key) {
        return [
            "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
            "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
            "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
            "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
            "Enter" /* IGDS_EVENT_KEYS.Enter */,
            "Escape" /* IGDS_EVENT_KEYS.Escape */,
            " " /* IGDS_EVENT_KEYS.Space */,
        ].includes(key);
    }
    // eslint-disable-next-line complexity
    handleEnterOrSpaceDown(key, isLeftInputFocused) {
        if (["Enter" /* IGDS_EVENT_KEYS.Enter */, " " /* IGDS_EVENT_KEYS.Space */].includes(key)) {
            this.isPopupOpen = !this.isPopupOpen;
            if (this.highlightedId) {
                const suggestions = this.getSuggestions();
                if (!suggestions?.length)
                    return true;
                const selectedSuggestion = suggestions?.find((suggestion) => suggestion.id === this.highlightedId);
                if (!selectedSuggestion)
                    return true;
                this.setValue(selectedSuggestion, isLeftInputFocused);
                this.highlightedId = null;
            }
            if (key === "Enter" /* IGDS_EVENT_KEYS.Enter */) {
                this.onSearch();
            }
            this.removeHighlightedClass();
            if (isLeftInputFocused) {
                this.isFirstInputToggled = !this.isFirstInputToggled;
            }
        }
        return false;
    }
    handleEscapeDown(key) {
        if (key === "Escape" /* IGDS_EVENT_KEYS.Escape */) {
            this.isPopupOpen = false;
            this.isFirstInputToggled = false;
            window.removeEventListener('resize', this.resizeHandler);
            this.stopScrollListener();
        }
    }
    getHighlightedIndex(key, suggestions, highlightedSuggestion) {
        const increment = this.calculateIndexIncrement(key);
        let index = highlightedSuggestion
            ? suggestions.indexOf(highlightedSuggestion) + increment
            : 0;
        if (index < 0) {
            index = suggestions.length - 1;
        }
        if (index > suggestions.length - 1) {
            index = 0;
        }
        return index;
    }
    processHighlightedIndex(suggestions, highlightedSuggestion, index) {
        this.removeHighlightedClass();
        suggestions[index].classList.add('search-popup__option--highlighted');
        suggestions[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        });
        const highlighted = highlightedSuggestion
            ? this.getSuggestions().find((_, suggestionIndex) => suggestionIndex === index)
            : this.getSuggestions()[0];
        if (!highlighted)
            return;
        this.highlightedId = highlighted.id;
    }
    handleArrowKeysDown(key) {
        if (![
            "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
            "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
            "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
            "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
        ].includes(key) ||
            !this.isPopupOpen) {
            return;
        }
        const suggestions = this.getSearchSuggestions();
        if (!suggestions?.length)
            return;
        const highlightedSuggestion = suggestions.find((suggestion) => suggestion.classList.contains('search-popup__option--highlighted'));
        const index = this.getHighlightedIndex(key, suggestions, highlightedSuggestion);
        this.processHighlightedIndex(suggestions, highlightedSuggestion, index);
    }
    onKeyDown(event, isLeftInputFocused) {
        if (!this.isRelevantKey(event.key) || this.disabled) {
            return;
        }
        if (this.handleEnterOrSpaceDown(event.key, isLeftInputFocused)) {
            return;
        }
        if (this.isPopupOpen) {
            this.setPopupPosition();
            setTimeout(() => {
                document.addEventListener('click', this.handleDocumentMouseDown, {
                    once: true,
                });
            });
        }
        this.handleEscapeDown(event.key);
        this.handleArrowKeysDown(event.key);
    }
    setValue(selectedSuggestion, isLeftInputFocused) {
        const value = (selectedSuggestion.value || selectedSuggestion.label) ?? '';
        if (this.variant !== IGDS_SEARCH_FIELD_VARIANTS.dividedSearch) {
            this.value = value;
            return;
        }
        if (isLeftInputFocused) {
            this.firstInputValue = value;
        }
        else {
            this.lastInputValue = value;
        }
    }
    getSearchSuggestions() {
        return this.searchPopupElements ? [...this.searchPopupElements] : null;
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
    removeHighlightedClass() {
        const suggestions = this.getSearchSuggestions();
        suggestions?.forEach((suggestion) => {
            if (suggestion.classList.contains('search-popup__option--highlighted')) {
                suggestion.classList.remove('search-popup__option--highlighted');
            }
        });
    }
    toggleSuggestionPopupByFirstInput() {
        this.toggleSuggestionPopup();
        this.isFirstInputToggled = !this.isFirstInputToggled;
    }
    toggleSuggestionPopup() {
        this.setPopupPosition();
        this.isFilterPopupOpen = false;
        this.isPopupOpen = true;
        if (this.isPopupOpen) {
            setTimeout(() => {
                document.addEventListener('click', this.handleDocumentMouseDown, {
                    once: true,
                });
            });
            window.addEventListener('resize', this.resizeHandler);
            this.startScrollListener();
        }
        this.isFirstInputToggled = false;
        this.removeHighlightedClass();
    }
    async setPopupPosition(popupId = 'popup') {
        const searchInputWidth = this.variant === IGDS_SEARCH_FIELD_VARIANTS.dividedSearch
            ? this.searchGroupElement.clientWidth
            : this.searchInputElement.clientWidth;
        const popupElement = this.shadowRoot?.getElementById(popupId);
        if (!popupElement)
            return;
        const { x, y } = await computePosition(this.variant === IGDS_SEARCH_FIELD_VARIANTS.dividedSearch
            ? this.searchGroupElement
            : this.searchInputElement, popupElement, {
            placement: 'bottom-start',
            strategy: 'fixed',
            middleware: [
                offset(2),
                size({
                    apply() {
                        Object.assign(popupElement.style, {
                            width: `${searchInputWidth}px`,
                            maxHeight: `${SEARCH_FIELD_POPUP_MAX_HEIGHT}px`,
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
    onInput(event) {
        const inputElement = event.target;
        this.value = inputElement.value;
        this.emit(IGDS_EVENTS.input, this.value);
    }
    onFirstInputChange(event) {
        const inputElement = event.target;
        this.firstInputValue = inputElement.value;
        this.emit(IGDS_EVENTS.input, this.firstInputValue);
    }
    onLastInputChange(event) {
        const inputElement = event.target;
        this.lastInputValue = inputElement.value;
        this.emit(IGDS_EVENTS.input, this.lastInputValue);
    }
    onSearch() {
        this.emit(IGDS_EVENTS.search, this.value);
    }
    onLastInputSearch() {
        this.emit(IGDS_EVENTS.search, this.lastInputValue);
    }
    getSuggestions() {
        if (this.variant !== IGDS_SEARCH_FIELD_VARIANTS.dividedSearch) {
            return this.getSearchedSuggestions(this.value);
        }
        if (this.filterSuggestions.length > 0 && this.isFirstInputToggled) {
            return this.getSearchedSuggestions(this.firstInputValue, 'filter');
        }
        return this.getSearchedSuggestions(this.isFirstInputToggled ? this.firstInputValue : this.lastInputValue);
    }
    getSearchedSuggestions(value, suggestionType = 'typical') {
        const _suggestion = suggestionType === 'typical' ? this.suggestions : this.filterSuggestions;
        if (!value) {
            return _suggestion;
        }
        return _suggestion.filter((suggestion) => suggestion.value?.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            suggestion.label?.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
    getIconsAndAudioRecorderBox() {
        return html `
      ${when(this.clearable ||
            this.voiceSearch ||
            this.variant === IGDS_SEARCH_FIELD_VARIANTS.hero, () => html `
          <div
            class=${classMap({
            'search__icons-box': true,
            'search__icons-box--ltr': this.dir === 'ltr',
        })}
          >
            ${this.getClearIcon()} ${this.getSearchIconButton()}
            ${this.getAudioRecorder()} ${this.getSettingsIcon()}
          </div>
        `)}
    `;
    }
    getClearIcon() {
        return html `
      ${when((this.clearable && this.value) || (this.clearable && this.showClear), () => this.renderClearIcon({
            ariaLabel: 'נקה',
            onClick: this.onClear,
            onKeyDown: this.onClearIconKeyDown,
            tabIndex: this.getIconTabIndex(),
        }))}
    `;
    }
    getSettingsIcon() {
        return html `
      ${when(this.variant === IGDS_SEARCH_FIELD_VARIANTS.searchFilter, () => html `
          <igds-icon
            node=${optionsHoriz}
            size=${IGDS_ICON_SIZES.medium}
            role="button"
            tabindex=${this.getSettingsIconTabIndex()}
            aria-label="Search filter"
            class=${classMap({
            'search__filter-icon': true,
            'search__filter-icon--disabled': this.disabled,
        })}
            @click=${this.onFilterToggle}
            @keydown=${this.onFilterIconKeyDown}
          >
          </igds-icon>
        `)}
    `;
    }
    onClearIconKeyDown(event, isFirstInputCleared) {
        if (event.key === "Enter" /* IGDS_EVENT_KEYS.Enter */) {
            this.onClear(event, isFirstInputCleared);
        }
    }
    onClear(event, isFirstInputCleared) {
        if (this.disabled) {
            return;
        }
        event.stopPropagation();
        if (this.variant === IGDS_SEARCH_FIELD_VARIANTS.dividedSearch) {
            if (isFirstInputCleared) {
                this.firstInputValue = '';
                this.emit(IGDS_EVENTS.clear, this.firstInputValue);
            }
            else {
                this.lastInputValue = '';
                this.emit(IGDS_EVENTS.clear, this.lastInputValue);
            }
        }
        else {
            this.value = '';
            this.emit(IGDS_EVENTS.clear, this.value);
        }
    }
    onFilterIconKeyDown(event) {
        if (event.key === "Enter" /* IGDS_EVENT_KEYS.Enter */) {
            this.onFilterToggle(event);
        }
    }
    onFilterToggle(event) {
        if (this.disabled) {
            return;
        }
        this.isPopupOpen = false;
        this.setPopupPosition('filter-popup');
        this.isFilterPopupOpen = !this.isFilterPopupOpen;
        if (this.isFilterPopupOpen) {
            document.addEventListener('click', this.handleDocumentMouseDown);
            window.addEventListener('resize', this.resizeHandler);
            this.startScrollListener();
        }
        else {
            window.removeEventListener('resize', this.resizeHandler);
            this.stopScrollListener();
        }
        event.stopPropagation();
    }
    getSearchIconButton() {
        return html `
      ${when(this.variant === IGDS_SEARCH_FIELD_VARIANTS.hero, () => html `
          <igds-button
            ?disabled=${this.disabled}
            class=${classMap({
            search__button: true,
            'search__button--disabled': this.disabled,
        })}
            @click=${this.onSearch}
            label="Search"
          >
            <igds-icon slot="icon" node=${search}></igds-icon>
          </igds-button>
        `)}
    `;
    }
    getAudioRecorder() {
        return html `
      ${when(this.voiceSearch && this.variant !== IGDS_SEARCH_FIELD_VARIANTS.hero, () => html `
          <igds-audio-recorder
            ?disabled=${this.disabled}
            class="search__audio-recorder"
            @igds-stop=${this.onAudioRecorderStop}
          >
          </igds-audio-recorder>
          <audio controls class="search__audio-element" hidden>
            <source class="search__source-element" />
          </audio>
        `)}
    `;
    }
    renderSuggestions() {
        return html `${when(this.getSuggestions().length, () => html `
        ${repeat(this.getSuggestions(), (suggestion) => suggestion.id, (suggestion) => html `
            <div
              id=${suggestion.id}
              role="option"
              aria-selected="false"
              class=${classMap({
            'search-popup__option': true,
            'search-popup__option--disabled': suggestion.disabled ?? false,
        })}
              aria-disabled=${suggestion.disabled ?? false}
              @click=${() => this.onSelect(suggestion)}
              @keydown=${() => { }}
            >
              ${when(suggestion.icon, () => html `
                  <igds-icon
                    class=${classMap({
            'search-popup__option-icon': true,
            'search-popup__option-icon--disabled': suggestion.disabled ?? false,
        })}
                    node=${ifDefined(suggestion.icon)}
                    aria-hidden=${!suggestion.icon}
                  >
                  </igds-icon>
                `)}
              <span class="search-popup__option-content">
                <span
                  class=${classMap({
            'search-popup__option-label': true,
            'search-popup__option-label--disabled': suggestion.disabled ?? false,
        })}
                >
                  ${suggestion.label}
                </span>
                ${when(suggestion.value, () => html `
                    <span
                      class=${classMap({
            'search-popup__option-value': true,
            'search-popup__option-value--disabled': suggestion.disabled ?? false,
        })}
                    >
                      ${suggestion.value}
                    </span>
                  `)}
              </span>
            </div>
          `)}
      `, () => this.showEmptyResultsMessage && this._suggestionsProvided
            ? html `
              <div class="search-popup__no-options">לא נמצאו אפשרויות</div>
            `
            : html ``)}`;
    }
    setDividedSearchInputValue(suggestion) {
        if (this.isFirstInputToggled) {
            this.firstInputValue = suggestion.value
                ? suggestion.value
                : suggestion.label ?? '';
            this.isFirstInputToggled = false;
        }
        else {
            this.lastInputValue = suggestion.value
                ? suggestion.value
                : suggestion.label ?? '';
        }
    }
    onSelect(suggestion) {
        if (suggestion.disabled) {
            return;
        }
        if (this.variant === IGDS_SEARCH_FIELD_VARIANTS.dividedSearch) {
            this.setDividedSearchInputValue(suggestion);
        }
        else {
            this.value = (suggestion.value || suggestion.label) ?? '';
        }
        this.emit(IGDS_EVENTS.select, {
            label: suggestion.label,
            id: suggestion.id,
            value: suggestion.value,
        });
        this.isPopupOpen = false;
        window.removeEventListener('resize', this.resizeHandler);
        this.stopScrollListener();
    }
    getSettingsIconTabIndex() {
        return this.disabled ? -1 : 0;
    }
    getIconTabIndex() {
        return this.disabled ? -1 : 0;
    }
};
SearchField.styles = [unsafeCSS(styles), unsafeCSS(popupStyles)];
__decorate([
    query('.search__input')
], SearchField.prototype, "searchInputElement", void 0);
__decorate([
    query('.search--divided')
], SearchField.prototype, "searchGroupElement", void 0);
__decorate([
    query('.search__audio-element')
], SearchField.prototype, "audioElement", void 0);
__decorate([
    query('.search__source-element')
], SearchField.prototype, "sourceElement", void 0);
__decorate([
    queryAll('.search-popup__option')
], SearchField.prototype, "searchPopupElements", void 0);
__decorate([
    state()
], SearchField.prototype, "isPopupOpen", void 0);
__decorate([
    state()
], SearchField.prototype, "isFilterPopupOpen", void 0);
__decorate([
    state()
], SearchField.prototype, "isFirstInputToggled", void 0);
__decorate([
    state()
], SearchField.prototype, "firstInputValue", void 0);
__decorate([
    state()
], SearchField.prototype, "lastInputValue", void 0);
__decorate([
    state()
], SearchField.prototype, "highlightedId", void 0);
__decorate([
    property({ type: String })
], SearchField.prototype, "value", void 0);
__decorate([
    property({ type: Array })
], SearchField.prototype, "suggestions", null);
__decorate([
    property({ type: Array, attribute: 'filter-suggestions' })
], SearchField.prototype, "filterSuggestions", null);
__decorate([
    property({ type: String })
], SearchField.prototype, "placeholder", void 0);
__decorate([
    property({ type: String, attribute: 'filter-placeholder' })
], SearchField.prototype, "filterPlaceholder", void 0);
__decorate([
    property({ type: String })
], SearchField.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean })
], SearchField.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, attribute: 'show-clear' })
], SearchField.prototype, "showClear", void 0);
__decorate([
    property({ type: Boolean })
], SearchField.prototype, "clearable", void 0);
__decorate([
    property({ type: Boolean, attribute: 'voice-search' })
], SearchField.prototype, "voiceSearch", void 0);
__decorate([
    property({ type: String, reflect: true })
], SearchField.prototype, "dir", void 0);
__decorate([
    property({ type: Array })
], SearchField.prototype, "filters", void 0);
__decorate([
    property({ type: Boolean, attribute: 'show-empty-results-message' })
], SearchField.prototype, "showEmptyResultsMessage", void 0);
SearchField = __decorate([
    customElement(IGDS_TAGS.searchField)
], SearchField);
export { SearchField };
