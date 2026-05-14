var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IGDS_BADGE_ICONS, IGDS_BADGE_VARIANT, IGDS_NOTIFICATION_BUTTON_SIZES, IGDS_NOTIFICATION_BUTTON_VARIANTS, } from './constants';
import { notifications } from '@igds/icons';
import styles from './badge.scss?inline';
let Badge = class Badge extends IGDSElement {
    constructor() {
        super(...arguments);
        this.variant = IGDS_BADGE_VARIANT.default;
        this.label = '';
        this.notification = false;
        this.notificationButton = false;
        this.notificationButtonSize = IGDS_NOTIFICATION_BUTTON_SIZES.medium;
        this.notificationButtonVariant = IGDS_NOTIFICATION_BUTTON_VARIANTS.primary;
    }
    isNumeric() {
        return typeof this.counter === 'number';
    }
    getValue() {
        return this.isNumeric() ? String(this.counter) : this.label;
    }
    getRole() {
        const alertVariants = [
            IGDS_BADGE_VARIANT.warning,
            IGDS_BADGE_VARIANT.failure,
        ];
        return when(this.isNumeric(), () => (this.notification ? 'alert' : 'status'), () => (alertVariants.includes(this.variant) ? 'alert' : 'status'));
    }
    getBadgeClass() {
        return when(this.isNumeric(), () => classMap({
            badge: true,
            'badge--numeric': true,
            'badge--notification': !!this.notification,
        }), () => classMap({
            badge: true,
            'badge--regular': true,
            'badge--informative': this.variant === IGDS_BADGE_VARIANT.informative,
            'badge--in-progress': this.variant === IGDS_BADGE_VARIANT.inProgress,
            'badge--success': this.variant === IGDS_BADGE_VARIANT.success,
            'badge--warning': this.variant === IGDS_BADGE_VARIANT.warning,
            'badge--failure': this.variant === IGDS_BADGE_VARIANT.failure,
            'badge--has-icon': Boolean(this.icon || IGDS_BADGE_ICONS[this.variant]) &&
                !this.isNumeric(),
        }));
    }
    getIcon() {
        const iconName = this.icon || IGDS_BADGE_ICONS[this.variant];
        return when(iconName && !this.isNumeric(), () => html `<igds-icon node=${iconName} class="badge__icon"></igds-icon>`);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const isNeedEmitEvent = typeof changedProperties.get('counter') === 'number' ||
            typeof changedProperties.get('label') === 'string';
        if (!isNeedEmitEvent) {
            return;
        }
        this.emit(IGDS_EVENTS.change, this.getValue());
    }
    handleNotificationClick(e) {
        e.stopPropagation();
        this.emit(IGDS_EVENTS.click, 'button clicked');
    }
    render() {
        return html `
      ${when(this.notificationButton, () => html `
          <div class="notification-button">
            <igds-button
              class=${classMap({
            'notification-button__button': true,
            'notification-button__button--medium': this.notificationButtonSize ===
                IGDS_NOTIFICATION_BUTTON_SIZES.medium,
        })}
              .variant=${this.notificationButtonVariant}
              .size=${this.notificationButtonSize}
              @igds-click=${this.handleNotificationClick}
            >
              <igds-icon slot="icon" node=${notifications}></igds-icon>
            </igds-button>

            <span
              class=${classMap({
            badge: true,
            'notification-button__notifier': true,
            'notification-button__notifier--small-link': this.notificationButtonVariant ===
                IGDS_NOTIFICATION_BUTTON_VARIANTS.link &&
                this.notificationButtonSize ===
                    IGDS_NOTIFICATION_BUTTON_SIZES.small,
            'notification-button__notifier--medium': this.notificationButtonSize ===
                IGDS_NOTIFICATION_BUTTON_SIZES.medium,
            'notification-button__notifier--large': this.notificationButtonSize ===
                IGDS_NOTIFICATION_BUTTON_SIZES.large,
            'notification-button__notifier--large-link': this.notificationButtonSize ===
                IGDS_NOTIFICATION_BUTTON_SIZES.large &&
                this.notificationButtonVariant ===
                    IGDS_NOTIFICATION_BUTTON_VARIANTS.link,
            'badge--numeric': true,
            'badge--notification': !!this.notification,
        })}
              role=${this.getRole()}
              aria-live="polite"
            >
              <span class="badge__text"> ${this.label} </span>
            </span>
          </div>
        `, () => html `
          <span
            class=${this.getBadgeClass()}
            role=${this.getRole()}
            aria-live="polite"
          >
            ${this.getIcon()}
            <span class="badge__text">${this.getValue()}</span>
          </span>
        `)}
    `;
    }
};
Badge.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, reflect: true })
], Badge.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], Badge.prototype, "label", void 0);
__decorate([
    property({ type: String })
], Badge.prototype, "icon", void 0);
__decorate([
    property({ type: Number })
], Badge.prototype, "counter", void 0);
__decorate([
    property({ type: Boolean })
], Badge.prototype, "notification", void 0);
__decorate([
    property({ type: Boolean, attribute: 'notification-button' })
], Badge.prototype, "notificationButton", void 0);
__decorate([
    property({ type: String, attribute: 'notification-button-size' })
], Badge.prototype, "notificationButtonSize", void 0);
__decorate([
    property({ type: String, attribute: 'notification-button-variant' })
], Badge.prototype, "notificationButtonVariant", void 0);
Badge = __decorate([
    customElement(IGDS_TAGS.badge)
], Badge);
export { Badge };
