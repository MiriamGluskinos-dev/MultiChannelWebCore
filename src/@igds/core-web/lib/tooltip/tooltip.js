var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { IGDSElement } from '../abstractions';
import { customElement, property, query, state, queryAssignedNodes, } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { computePosition, flip, offset, shift, arrow, } from '@floating-ui/dom';
import { IGDS_EVENTS, IGDS_PLACEMENTS, IGDS_TAGS } from '../constants';
import { IGDS_TOOLTIP_TYPE, DELAY_BEFORE_CLOSE_TOOLTIP, DELAY_BEFORE_RECALCULATE_TOOLTIP_POSITION, TOOLTIP_MAX_WIDTH, ARROW_WIDTH, } from './constant';
import { getDirection, throttle } from '../utils';
import '../icon';
import { close } from '@igds/icons';
import styles from './tooltip.scss?inline';
let Tooltip = class Tooltip extends IGDSElement {
    async initPosition() {
        if (!this.tooltipTrigger || !this.tooltipElement) {
            return;
        }
        const { x, y, placement, middlewareData } = await computePosition(this.tooltipTrigger, this.tooltipElement, {
            strategy: 'fixed',
            placement: this.getPlacement(this.placement),
            middleware: [
                offset(9),
                flip(),
                shift(),
                arrow({ element: this.tooltipArrow, padding: { top: 8, bottom: 8 } }),
            ],
        });
        this.fitToScreen(placement);
        Object.assign(this.tooltipElement.style, {
            left: `${x}px`,
            top: `${y}px`,
        });
        if (!middlewareData.arrow) {
            return;
        }
        const arrowX = middlewareData.arrow.x;
        const arrowY = middlewareData.arrow.y;
        const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
        }[placement.split('-')[0]];
        Object.assign(this.tooltipArrow.style, {
            left: arrowX != null ? `${arrowX}px` : '',
            top: arrowY != null ? `${arrowY}px` : '',
            right: '',
            bottom: '',
            [staticSide]: '-6px',
        });
    }
    initEventListeners() {
        if (!this.hostElement) {
            return;
        }
        window.addEventListener('resize', this.resizeHandler);
        document.addEventListener('keyup', this.closeByEsc);
        if (this.type === IGDS_TOOLTIP_TYPE.popup) {
            this.hostElement.addEventListener('click', this.openByClick);
            this.hostElement.addEventListener('focusin', this.saveFocusedElement);
            return;
        }
        this.hostElement.addEventListener('mouseenter', this.open);
        this.hostElement.addEventListener('mouseleave', this.close);
        this.hostElement.addEventListener('focusin', this.open);
        this.hostElement.addEventListener('focusout', this.close);
    }
    removeEventListeners() {
        window.removeEventListener('resize', this.resizeHandler);
        document.removeEventListener('keyup', this.closeByEsc);
        if (!this.hostElement) {
            return;
        }
        if (this.type === IGDS_TOOLTIP_TYPE.popup) {
            this.hostElement.removeEventListener('click', this.openByClick);
            this.hostElement.removeEventListener('focusin', this.saveFocusedElement);
            return;
        }
        this.hostElement.removeEventListener('mouseenter', this.open);
        this.hostElement.removeEventListener('mouseleave', this.close);
        this.hostElement.removeEventListener('focusin', this.open);
        this.hostElement.removeEventListener('focusout', this.close);
    }
    getPlacement(placement) {
        if (placement === IGDS_PLACEMENTS.top ||
            placement === IGDS_PLACEMENTS.topStart ||
            placement === IGDS_PLACEMENTS.topEnd ||
            placement === IGDS_PLACEMENTS.bottom ||
            placement === IGDS_PLACEMENTS.bottomStart ||
            placement === IGDS_PLACEMENTS.bottomEnd) {
            return placement;
        }
        const { leftSide, rightSide } = getDirection(this.tooltipElement) === 'rtl'
            ? { leftSide: 'right', rightSide: 'left' }
            : { leftSide: 'left', rightSide: 'right' };
        const placementMap = {
            [IGDS_PLACEMENTS.insetInlineStart]: `${leftSide}`,
            [IGDS_PLACEMENTS.insetInlineStartTop]: `${leftSide}-start`,
            [IGDS_PLACEMENTS.insetInlineStartBottom]: `${leftSide}-end`,
            [IGDS_PLACEMENTS.insetInlineEnd]: `${rightSide}`,
            [IGDS_PLACEMENTS.insetInlineEndTop]: `${rightSide}-start`,
            [IGDS_PLACEMENTS.insetInlineEndBottom]: `${rightSide}-end`,
        };
        return placementMap[placement];
    }
    open() {
        if (this.timerId !== undefined) {
            clearTimeout(this.timerId);
            this.timerId = undefined;
        }
        this.show();
    }
    close() {
        if (!this.content) {
            // Probably the tooltip contains HTML and should be accessible for user interaction
            this.timerId = setTimeout(() => {
                this.hide();
            }, DELAY_BEFORE_CLOSE_TOOLTIP);
            return;
        }
        this.hide();
    }
    hide() {
        this.shown = false;
        this.emit(IGDS_EVENTS.hide, 'hidden');
    }
    show() {
        this.shown = true;
        this.emit(IGDS_EVENTS.show, 'shown');
    }
    openByClick() {
        this.show();
        setTimeout(() => {
            if (this.shown) {
                document.addEventListener('click', this.hide, { once: true });
            }
        });
    }
    closeByEsc(key) {
        if (!this.shown || key.code !== 'Escape') {
            return;
        }
        this.hide();
        document.removeEventListener('click', this.hide);
        if (this.type === IGDS_TOOLTIP_TYPE.popup) {
            this.returnFocusBack();
        }
    }
    saveFocusedElement(e) {
        if (!this.shown) {
            this.lastFocusedElement = e.target;
        }
    }
    returnFocusBack() {
        if (this.lastFocusedElement !== undefined) {
            this.lastFocusedElement.focus();
        }
    }
    handleCloseClick() {
        this.hide();
        this.returnFocusBack();
    }
    fitToScreen(placement) {
        const isLeft = placement.indexOf('left') !== -1;
        const isRight = placement.indexOf('right') !== -1;
        const { left, right } = this.getBoundingClientRect();
        const screenSize = window.innerWidth;
        if (!isLeft && !isRight) {
            return;
        }
        if ((isLeft && left > TOOLTIP_MAX_WIDTH) ||
            (isRight && screenSize - right > TOOLTIP_MAX_WIDTH)) {
            this.width = undefined;
            return;
        }
        if (isLeft) {
            this.width = left - ARROW_WIDTH;
            return;
        }
        this.width = window.innerWidth - right - ARROW_WIDTH;
    }
    constructor() {
        super();
        this._rendered = false;
        this.isListenersAlreadyInitialized = false;
        this.content = '';
        this.placement = IGDS_PLACEMENTS.top;
        this.type = IGDS_TOOLTIP_TYPE.standard;
        this.disabled = false;
        this.inverted = false;
        this.shown = false;
        this.isPopoverClosing = false;
        this.resizeHandler = throttle(() => {
            this.initPosition();
        }, DELAY_BEFORE_RECALCULATE_TOOLTIP_POSITION);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.hide = this.hide.bind(this);
        this.openByClick = this.openByClick.bind(this);
        this.closeByEsc = this.closeByEsc.bind(this);
        this.saveFocusedElement = this.saveFocusedElement.bind(this);
        this.resizeHandler = this.resizeHandler.bind(this);
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this._rendered = true;
    }
    cancelPopoverCloseAnimation() {
        this.popoverCloseCleanup?.();
        this.popoverCloseCleanup = undefined;
    }
    openPopover() {
        if (!this.tooltipElement) {
            return;
        }
        this.tooltipElement.showPopover();
    }
    schedulePopoverHideAfterCloseAnimation() {
        if (!this.tooltipElement || !this.isPopoverClosing || this.shown) {
            return;
        }
        this.cancelPopoverCloseAnimation();
        let finished = false;
        const finish = () => {
            if (finished) {
                return;
            }
            finished = true;
            this.popoverCloseCleanup = undefined;
            this.tooltipElement.removeEventListener('transitionend', onTransitionEnd);
            clearTimeout(fallbackId);
            this.tooltipElement.hidePopover();
            this.isPopoverClosing = false;
        };
        const onTransitionEnd = (e) => {
            if (e.target !== this.tooltipElement || e.propertyName !== 'opacity') {
                return;
            }
            finish();
        };
        this.tooltipElement.addEventListener('transitionend', onTransitionEnd);
        const fallbackId = window.setTimeout(finish, 350);
        this.popoverCloseCleanup = () => {
            this.tooltipElement.removeEventListener('transitionend', onTransitionEnd);
            clearTimeout(fallbackId);
        };
    }
    // eslint-disable-next-line complexity
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('shown')) {
            if (this.shown) {
                this.cancelPopoverCloseAnimation();
                this.isPopoverClosing = false;
                this.openPopover();
            }
            else if (this.tooltipElement?.matches(':popover-open')) {
                this.isPopoverClosing = true;
            }
            else {
                this.isPopoverClosing = false;
            }
        }
        if (changedProperties.has('isPopoverClosing') &&
            this.isPopoverClosing &&
            !this.shown) {
            requestAnimationFrame(() => this.schedulePopoverHideAfterCloseAnimation());
        }
        if ((changedProperties.has('shown') && this.shown) ||
            (this.shown &&
                changedProperties.has('content') &&
                changedProperties.get('content')) ||
            (this.shown &&
                changedProperties.has('placement') &&
                changedProperties.get('placement'))) {
            this.initPosition();
        }
        this.manageListeners(changedProperties);
        this.isListenersAlreadyInitialized = true;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.isListenersAlreadyInitialized) {
            this.initEventListeners();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListeners();
        this.cancelPopoverCloseAnimation();
        this.isPopoverClosing = false;
        this.tooltipElement.hidePopover();
    }
    manageListeners(changedProperties) {
        if (!changedProperties.has('disabled')) {
            return;
        }
        if (this.disabled) {
            this.removeEventListeners();
        }
        else {
            this.initEventListeners();
        }
    }
    get isTopPlacement() {
        return (this.placement == IGDS_PLACEMENTS.top ||
            this.placement == IGDS_PLACEMENTS.topStart ||
            this.placement == IGDS_PLACEMENTS.topEnd);
    }
    get isBottomPlacement() {
        return (this.placement == IGDS_PLACEMENTS.bottom ||
            this.placement == IGDS_PLACEMENTS.bottomStart ||
            this.placement == IGDS_PLACEMENTS.bottomEnd);
    }
    get isStartPlacement() {
        return (this.placement == IGDS_PLACEMENTS.insetInlineStart ||
            this.placement == IGDS_PLACEMENTS.insetInlineStartTop ||
            this.placement == IGDS_PLACEMENTS.insetInlineStartBottom);
    }
    get isEndPlacement() {
        return (this.placement == IGDS_PLACEMENTS.insetInlineEnd ||
            this.placement == IGDS_PLACEMENTS.insetInlineEndTop ||
            this.placement == IGDS_PLACEMENTS.insetInlineEndBottom);
    }
    render() {
        return html `
      <div
        class=${classMap({
            tooltip: true,
            'tooltip--top': this.isTopPlacement,
            'tooltip--bottom': this.isBottomPlacement,
            'tooltip--inset-inline-start': this.isStartPlacement,
            'tooltip--inset-inline-end': this.isEndPlacement,
            'tooltip--inverted': this.inverted,
            'tooltip--disabled': this.disabled,
            'tooltip--standard': this.type === IGDS_TOOLTIP_TYPE.standard,
            'tooltip--popup': this.type === IGDS_TOOLTIP_TYPE.popup,
            'tooltip--without-trigger': this._rendered && this.slotNodes.length === 0,
        })}
        role="tooltip"
        aria-live="polite"
        aria-labelledby="tooltip-text"
      >
        <section class="tooltip__trigger">
          <slot></slot>
        </section>
        <section
          class=${classMap({
            tooltip__body: true,
            'tooltip__body--closing': this.isPopoverClosing,
        })}
          id="tooltip-text"
          popover="manual"
          style=${styleMap({
            width: this.width !== undefined ? `${this.width}px` : 'auto',
        })}
        >
          ${when(this.type === IGDS_TOOLTIP_TYPE.popup, () => html `
              <button
                class="tooltip__button-close"
                type="button"
                tabindex=${ifDefined(this.shown ? undefined : -1)}
                @click=${this.handleCloseClick}
                aria-label="Close tooltip"
              >
                <igds-icon
                  node=${close}
                  class="tooltip__icon-close"
                ></igds-icon>
              </button>
            `)}
          ${when(this.content, () => this.content, () => html `
              <slot
                name="content"
                tabindex=${ifDefined(this.shown ? undefined : -1)}
              ></slot>
            `)}
          <section class="tooltip__arrow"></section>
        </section>
      </div>
    `;
    }
};
Tooltip.styles = [unsafeCSS(styles)];
__decorate([
    property({ type: String })
], Tooltip.prototype, "content", void 0);
__decorate([
    property({ type: String })
], Tooltip.prototype, "placement", void 0);
__decorate([
    property({ type: String })
], Tooltip.prototype, "type", void 0);
__decorate([
    property({ type: Boolean })
], Tooltip.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Tooltip.prototype, "inverted", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Tooltip.prototype, "shown", void 0);
__decorate([
    state()
], Tooltip.prototype, "width", void 0);
__decorate([
    state()
], Tooltip.prototype, "isPopoverClosing", void 0);
__decorate([
    query('.tooltip')
], Tooltip.prototype, "hostElement", void 0);
__decorate([
    query('.tooltip__body', true)
], Tooltip.prototype, "tooltipElement", void 0);
__decorate([
    query('.tooltip__arrow')
], Tooltip.prototype, "tooltipArrow", void 0);
__decorate([
    query('.tooltip__trigger')
], Tooltip.prototype, "tooltipTrigger", void 0);
__decorate([
    queryAssignedNodes({ flatten: true })
], Tooltip.prototype, "slotNodes", void 0);
Tooltip = __decorate([
    customElement(IGDS_TAGS.tooltip)
], Tooltip);
export { Tooltip };
