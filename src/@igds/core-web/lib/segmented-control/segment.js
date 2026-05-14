var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property, state, query } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_TAGS, DELAY_BEFORE_CHECKING_TRUNCATED } from '../constants';
import { IGDSElement } from '../abstractions';
import { segmentContext } from './context';
import { generateId, throttle } from '../utils';
import styles from './segment.scss?inline';
let Segment = class Segment extends IGDSElement {
    constructor() {
        super(...arguments);
        this.isFirstRender = true;
        this.id = generateId();
        this.isOverflowed = false;
        this.resizeHandler = throttle(() => {
            this.checkTruncated();
        }, DELAY_BEFORE_CHECKING_TRUNCATED);
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        window.addEventListener('resize', this.resizeHandler);
        setTimeout(() => {
            this.checkTruncated();
        }, DELAY_BEFORE_CHECKING_TRUNCATED);
    }
    update(changedProperties) {
        super.update(changedProperties);
        if (!changedProperties.has('selected')) {
            return;
        }
        if (this.isFirstRender) {
            this.contextData?.updateSelectedId(this.id, { skipEvent: true });
            this.isFirstRender = false;
        }
        else {
            this.contextData?.updateSelectedId(this.id);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.contextData?.selectedId === this.id) {
            this.contextData?.updateSelectedId(undefined, { skipEvent: true });
        }
        window.removeEventListener('resize', this.resizeHandler);
    }
    checkTruncated() {
        this.isOverflowed = this.label.scrollWidth > this.label.clientWidth;
    }
    handleClick() {
        this.contextData?.updateSelectedId(this.contextData?.selectedId === this.id ? undefined : this.id);
    }
    handleChangeIcon(e) {
        if (!e.target) {
            return;
        }
        const childNodes = e.target.assignedNodes({ flatten: true });
        this.hasIcon = childNodes.length > 0;
    }
    handleChangeText(e) {
        if (!e.target) {
            return;
        }
        const childNodes = e.target.assignedNodes({ flatten: true });
        const text = childNodes.reduce((result, item) => {
            return result + item.textContent?.trim();
        }, '');
        this.labelText = text;
        this.contextData?.reportAboutTextSegment(this.id, text !== '');
        this.hasNoText = text === '';
    }
    showTooltip() {
        if (!this.isOverflowed) {
            return;
        }
        this.tooltip.setAttribute('shown', 'true');
    }
    hideTooltip() {
        if (!this.isOverflowed) {
            return;
        }
        this.tooltip.removeAttribute('shown');
    }
    render() {
        return html `
      <button
        aria-pressed=${Boolean(this.selected)}
        ?disabled=${Boolean(this.disabled) || this.contextData?.disabled}
        class=${classMap({
            segment: true,
            [`segment--${this.contextData?.size}`]: true,
            'segment--selected': this.contextData?.selectedId === this.id,
        })}
        @click=${() => this.handleClick()}
        @mouseenter=${this.showTooltip}
        @mouseleave=${this.hideTooltip}
        @focus=${this.showTooltip}
        @blur=${this.hideTooltip}
      >
        <div
          class=${classMap({
            segment__icon: true,
            'segment__icon--shown': Boolean(this.hasIcon),
        })}
        >
          <slot name="icon" @slotchange=${this.handleChangeIcon}></slot>
        </div>
        <div
          class=${classMap({
            segment__label: true,
            'segment__label--no-text': Boolean(this.hasNoText),
        })}
        >
          <slot @slotchange=${this.handleChangeText}></slot>
        </div>
      </button>
      <igds-tooltip
        class="segment__tooltip"
        content=${this.labelText}
        placement="bottom"
      ></igds-tooltip>
    `;
    }
};
Segment.styles = unsafeCSS(styles);
__decorate([
    property({ type: Boolean })
], Segment.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean })
], Segment.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], Segment.prototype, "id", void 0);
__decorate([
    consume({ context: segmentContext, subscribe: true })
], Segment.prototype, "contextData", void 0);
__decorate([
    state()
], Segment.prototype, "hasIcon", void 0);
__decorate([
    state()
], Segment.prototype, "hasNoText", void 0);
__decorate([
    state()
], Segment.prototype, "isOverflowed", void 0);
__decorate([
    state()
], Segment.prototype, "labelText", void 0);
__decorate([
    query('.segment__label')
], Segment.prototype, "label", void 0);
__decorate([
    query('igds-tooltip')
], Segment.prototype, "tooltip", void 0);
Segment = __decorate([
    customElement(IGDS_TAGS.segment)
], Segment);
export { Segment };
