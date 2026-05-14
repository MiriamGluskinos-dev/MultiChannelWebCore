var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { provide } from '@lit/context';
import { customElement, property, query, queryAll, state, } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { igdsBreadcrumbsContext, IgdsBreadcrumbsContext, } from './breadcrumb-context';
import { IGDSElement } from '../abstractions';
import { throttle, getCssValue } from '../utils';
import { START_BLOCK_LIMIT, END_BLOCK_LIMIT } from './constants';
import { chevronLeft } from '@igds/icons';
import styles from './breadcrumbs.scss?inline';
import '../icon';
import '../popup-menu';
const REPLACER = '...';
const DELAY_BEFORE_RECALCULATE_OVERFLOWING = 250;
const MENU_WIDTH = 180;
const CSS_QUERY = `(max-width: ${getCssValue("--igds-light-ref-device-width-mobile-l" /* IGDS_BREAKPOINT_VARS.mobileL */, '425px')})`;
let Breadcrumbs = class Breadcrumbs extends IGDSElement {
    get isMobile() {
        return this._mediaQueryObserver.matches;
    }
    constructor() {
        super();
        this.isCollapsible = false;
        this.isOverflowed = false;
        this.numberOfHiddenItems = 0;
        this.expandButtonWidth = 40;
        this.label = 'Breadcrumbs';
        this.preventDefault = false;
        this.context = new IgdsBreadcrumbsContext();
        this.items = [];
        this.middleSectionWidth = 'auto';
        this.resizeHandler = throttle(() => {
            this.checkOverflowing();
        }, DELAY_BEFORE_RECALCULATE_OVERFLOWING);
        this._mediaQueryObserver = window.matchMedia(CSS_QUERY);
        this.handleChangeDevice = this.handleChangeDevice.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.context.onChange = () => {
            this.items = this.context.getItems();
            this.isCollapsible =
                this.items.length > START_BLOCK_LIMIT + END_BLOCK_LIMIT;
        };
        const expandButtonWidth = getCssValue('--igds-light-ref-space-800', `40px`);
        const intValue = Number.parseInt(expandButtonWidth);
        this.expandButtonWidth = isNaN(intValue) ? 40 : intValue;
        this._mediaQueryObserver.addEventListener('change', this.handleChangeDevice);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', this.resizeHandler);
        this._mediaQueryObserver.removeEventListener('change', this.handleChangeDevice);
    }
    handleChangeDevice() {
        this.shownOnMobile = this.isMobile;
    }
    handleExpand() {
        this.emit(IGDS_EVENTS.expand);
    }
    handleItemClick(event, id) {
        if (this.preventDefault) {
            event.preventDefault();
        }
        this.context?.emit(id);
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        window.addEventListener('resize', this.resizeHandler);
        this.handleChangeDevice();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        this.checkOverflowing();
    }
    shouldSkipOverflowingCheck() {
        return (this.isMobile ||
            !this.isCollapsible ||
            !this.breadcrumbsElement ||
            !this.startElement ||
            !this.middleElement ||
            !this.endElement ||
            !this.middleItems ||
            this.middleItems.length === 0);
    }
    checkOverflowing() {
        if (this.shouldSkipOverflowingCheck()) {
            return;
        }
        if (this.itemGap === undefined &&
            this.boxGap === undefined &&
            this.boxLeftPadding === undefined &&
            this.boxRightPadding === undefined) {
            this.itemGap = this.measureCssProperty(this.middleElement, 'gap', 8);
            this.boxGap = this.measureCssProperty(this.breadcrumbsElement, 'gap', 8);
            this.boxLeftPadding = this.measureCssProperty(this.breadcrumbsElement, 'padding-left', 4);
            this.boxRightPadding = this.measureCssProperty(this.breadcrumbsElement, 'padding-right', 4);
        }
        if (this.middleItemsSizeMap === undefined) {
            this.middleItemsSizeMap = Array.from(this.middleItems)
                .reduce((result, item, index) => {
                if (index === 0) {
                    return [Math.ceil(item.getBoundingClientRect().width)];
                }
                return [
                    ...result,
                    result[index - 1] +
                        this.itemGap +
                        Math.ceil(item.getBoundingClientRect().width),
                ];
            }, [])
                .reverse();
        }
        const availableWidthForMiddleItems = this.breadcrumbsElement.offsetWidth -
            this.startElement.offsetWidth -
            this.endElement.offsetWidth -
            2 * this.boxGap -
            this.boxLeftPadding -
            this.boxRightPadding -
            this.expandButtonWidth;
        [this.isOverflowed, this.middleSectionWidth, this.numberOfHiddenItems] =
            this.getMiddleSectionWidth(availableWidthForMiddleItems);
    }
    measureCssProperty(element, property, defaultValue) {
        const cssValue = window
            .getComputedStyle(element)
            .getPropertyValue(property);
        const intValue = Number.parseInt(cssValue);
        return isNaN(intValue) ? defaultValue : intValue;
    }
    getMiddleSectionWidth(availableWidth) {
        if (!this.middleItemsSizeMap) {
            return [false, 'auto', 0];
        }
        if (availableWidth <
            this.middleItemsSizeMap[this.middleItemsSizeMap.length - 1]) {
            return [true, '0', this.middleItemsSizeMap.length];
        }
        const possibleWidthIndex = this.middleItemsSizeMap.findIndex((width) => {
            return width <= availableWidth;
        });
        if (possibleWidthIndex < 1) {
            return [false, 'auto', 0];
        }
        return [
            true,
            `${this.middleItemsSizeMap[possibleWidthIndex] + this.expandButtonWidth}px`,
            possibleWidthIndex,
        ];
    }
    navigateTo(id, href, target) {
        if (!this.preventDefault) {
            this.emulateDefaultLinkClickBehavior(href, target);
        }
        this.context?.emit(id);
    }
    emulateDefaultLinkClickBehavior(href, target) {
        switch (target) {
            case '_blank':
                window.open(href, '_blank');
                break;
            case '_parent':
                if (window.parent !== window) {
                    window.parent.location.href = href;
                }
                else {
                    window.location.href = href;
                }
                break;
            case '_top':
                if (window.top && window.top !== window) {
                    window.top.location.href = href;
                }
                else {
                    window.location.href = href;
                }
                break;
            case '_self':
            default:
                window.location.href = href;
        }
    }
    renderItemContent(isFirstItem, label) {
        return html `
      ${when(!isFirstItem, () => html `
          <igds-icon
            node=${chevronLeft}
            class="breadcrumbs__separator"
          ></igds-icon>
        `)}
      <span class="breadcrumbs__text-label">${label}</span>
    `;
    }
    // eslint-disable-next-line complexity
    renderItem(item, isFirstItem, isLastItem, props) {
        if (isLastItem) {
            return html `
        <div
          aria-current="page"
          rel=${ifDefined(item.rel ? item.rel : undefined)}
          class="breadcrumbs__item breadcrumbs__item--current-page"
        >
          ${this.renderItemContent(isFirstItem, item.label)}
        </div>
      `;
        }
        const isHiddenItem = props !== undefined &&
            props.index !== undefined &&
            props.visibleItemsCount !== undefined &&
            props.index + 1 > props.visibleItemsCount;
        return html `
      <a
        @click=${(event) => this.handleItemClick(event, item.id)}
        href="${item.href}"
        target="${ifDefined(item.target ? item.target : undefined)}"
        rel=${ifDefined(item.rel ? item.rel : undefined)}
        class=${classMap({
            breadcrumbs__item: true,
            'breadcrumbs__item--first': isFirstItem,
            'breadcrumbs__item--hidden': isHiddenItem,
            'breadcrumbs__item--penultimate': Boolean(props?.penultimate),
        })}
      >
        ${this.renderItemContent(isFirstItem, item.label)}
      </a>
    `;
    }
    get formattedItems() {
        return this.items.reduce((result, item, index) => {
            return {
                ...result,
                ...(index < START_BLOCK_LIMIT
                    ? { start: [...result.start, item] }
                    : {}),
                ...(index >= START_BLOCK_LIMIT &&
                    index < this.items.length - END_BLOCK_LIMIT
                    ? { middle: [...result.middle, item] }
                    : {}),
                ...(index >= this.items.length - END_BLOCK_LIMIT
                    ? { end: [...result.end, item] }
                    : {}),
            };
        }, { start: [], middle: [], end: [] });
    }
    get invisibleItems() {
        return this.formattedItems.middle.slice(this.formattedItems.middle.length - this.numberOfHiddenItems, this.formattedItems.middle.length);
    }
    renderStandardBreadcrumbs() {
        return html `
      <nav
        aria-label=${this.label}
        class=${classMap({
            breadcrumbs: true,
            'breadcrumbs--standard': true,
            'breadcrumbs--mobile': Boolean(this.shownOnMobile),
        })}
      >
        ${repeat(this.items, ({ id }) => id, (item, index) => {
            const isFirstItem = index === 0;
            const isLastItem = index === this.items.length - 1;
            return html `
              ${this.renderItem(item, isFirstItem, isLastItem, {
                penultimate: index === this.items.length - 2,
            })}
            `;
        })}
      </nav>
    `;
    }
    render() {
        if (this.isCollapsible) {
            return html `
        <nav
          aria-label=${this.label}
          class=${classMap({
                breadcrumbs: true,
                'breadcrumbs--overflowed': true,
                'breadcrumbs--truncated': this.middleSectionWidth === '0',
                'breadcrumbs--mobile': Boolean(this.shownOnMobile),
            })}
        >
          <section class="breadcrumbs__section breadcrumbs__section--start">
            ${repeat(this.formattedItems.start, ({ id }) => id, (item, index) => {
                return html ` ${this.renderItem(item, index === 0, false)} `;
            })}
          </section>
          <section
            class=${classMap({
                breadcrumbs__section: true,
                'breadcrumbs__section--middle': true,
                'breadcrumbs__section--overflowed': this.isOverflowed,
            })}
            style=${styleMap({
                width: this.middleSectionWidth,
            })}
          >
            ${repeat(this.formattedItems.middle, ({ id }) => id, (item, index) => {
                return html `
                  ${this.renderItem(item, false, false, {
                    index,
                    visibleItemsCount: this.formattedItems.middle.length -
                        this.numberOfHiddenItems,
                })}
                `;
            })}
            ${when(this.isOverflowed, () => html `
                <igds-popup-menu
                  offset=${0}
                  min-width=${MENU_WIDTH}
                  @igds-open=${this.handleExpand}
                >
                  <button
                    slot="trigger"
                    type="button"
                    class="breadcrumbs__item breadcrumbs__expand-button"
                  >
                    ${this.renderItemContent(false, REPLACER)}
                  </button>
                  ${repeat(this.invisibleItems, (item) => html `
                      <igds-popup-menu-item
                        id="${item.id}"
                        @igds-select=${() => this.navigateTo(item.id, item.href, item.target)}
                      >
                        ${item.label}
                      </igds-popup-menu-item>
                    `)}
                </igds-popup-menu>
              `)}
          </section>
          <section class="breadcrumbs__section breadcrumbs__section--end">
            ${repeat(this.formattedItems.end, ({ id }) => id, (item, index) => {
                return html `
                  ${this.renderItem(item, false, index === this.formattedItems.end.length - 1)}
                `;
            })}
          </section>
        </nav>
        <slot></slot>
      `;
        }
        return this.renderStandardBreadcrumbs();
    }
};
Breadcrumbs.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], Breadcrumbs.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, attribute: 'prevent-default' })
], Breadcrumbs.prototype, "preventDefault", void 0);
__decorate([
    provide({ context: igdsBreadcrumbsContext })
], Breadcrumbs.prototype, "context", void 0);
__decorate([
    state()
], Breadcrumbs.prototype, "items", void 0);
__decorate([
    state()
], Breadcrumbs.prototype, "middleSectionWidth", void 0);
__decorate([
    state()
], Breadcrumbs.prototype, "shownOnMobile", void 0);
__decorate([
    query('.breadcrumbs')
], Breadcrumbs.prototype, "breadcrumbsElement", void 0);
__decorate([
    query('.breadcrumbs__section--start')
], Breadcrumbs.prototype, "startElement", void 0);
__decorate([
    query('.breadcrumbs__section--middle')
], Breadcrumbs.prototype, "middleElement", void 0);
__decorate([
    query('.breadcrumbs__section--end')
], Breadcrumbs.prototype, "endElement", void 0);
__decorate([
    queryAll('.breadcrumbs__section--middle a.breadcrumbs__item')
], Breadcrumbs.prototype, "middleItems", void 0);
Breadcrumbs = __decorate([
    customElement(IGDS_TAGS.breadcrumbs)
], Breadcrumbs);
export { Breadcrumbs };
