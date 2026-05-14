var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IGDS_TAGS } from '../constants';
import { IGDS_ICON_SIZES } from '../icon';
import { IGDS_DEFAULT_ERROR_MESSAGE } from './constants';
import { throttle } from '../utils';
import { alertCircleFilled } from '@igds/icons';
import styles from './default-error-box.scss?inline';
import '../icon/icon';
const DELAY_BEFORE_RECALCULATE_OVERFLOWING = 500;
let DefaultErrorBox = class DefaultErrorBox extends LitElement {
    constructor() {
        super(...arguments);
        this.errormessage = null;
        this.resizeHandler = throttle(() => {
            this.checkOverflowing();
        }, DELAY_BEFORE_RECALCULATE_OVERFLOWING);
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.checkOverflowing();
        window.addEventListener('resize', this.resizeHandler);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', this.resizeHandler);
    }
    checkOverflowing() {
        this.isOverflowed = this.message.scrollWidth > this.message.clientWidth;
    }
    render() {
        return html `
      <article class="default-error-box__wrapper">
        <slot name="error-message">
          <section class="default-error-box">
            <igds-icon
              node=${alertCircleFilled}
              size=${IGDS_ICON_SIZES.large}
              class="default-error-box__icon"
            >
            </igds-icon>
            <div
              class="default-error-box__message-text"
              title=${ifDefined(this.isOverflowed && this.errormessage
            ? this.errormessage
            : undefined)}
            >
              ${this.errormessage || IGDS_DEFAULT_ERROR_MESSAGE}
            </div>
          </section>
        </slot>
      </article>
    `;
    }
};
DefaultErrorBox.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, attribute: 'errormessage' })
], DefaultErrorBox.prototype, "errormessage", void 0);
__decorate([
    query('.default-error-box__message-text')
], DefaultErrorBox.prototype, "message", void 0);
__decorate([
    state()
], DefaultErrorBox.prototype, "isOverflowed", void 0);
DefaultErrorBox = __decorate([
    customElement(IGDS_TAGS.defaultErrorBox)
], DefaultErrorBox);
export { DefaultErrorBox };
