var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDSElement } from '../abstractions';
import { generateId } from '../utils';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import { IGDS_TAG_SIZES } from './constants';
import { IGDS_ICON_SIZES } from '../icon';
import { close } from '@igds/icons';
import styles from './tag.scss?inline';
let Tag = class Tag extends IGDSElement {
    constructor() {
        super(...arguments);
        this.size = IGDS_TAG_SIZES.medium;
        this.icon = '';
        this.disabled = false;
        this.removable = false;
    }
    firstUpdated() {
        if (!this.id) {
            this.id = generateId();
        }
    }
    handleClick() {
        this.emit(IGDS_EVENTS.select, 'tag selected', { id: this.id });
    }
    handleRemove(e) {
        if (this.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        e.stopPropagation();
        if (this.removable) {
            this.emit(IGDS_EVENTS.remove, 'tag removed', { id: this.id });
        }
    }
    handleKeyDown(event) {
        if ([
            "Enter" /* IGDS_EVENT_KEYS.Enter */,
            " " /* IGDS_EVENT_KEYS.Space */,
            "Backspace" /* IGDS_EVENT_KEYS.Backspace */,
        ].includes(event.key)) {
            this.handleRemove(event);
            event.preventDefault();
        }
    }
    getRole() {
        return this.parentElement?.tagName.toLowerCase() === 'igds-tag-group'
            ? 'listitem'
            : undefined;
    }
    render() {
        return html `
      <div role="${ifDefined(this.getRole() ? this.getRole() : undefined)}">
        <button
          class=${classMap({
            tag: true,
            'tag--small': this.size === IGDS_TAG_SIZES.small,
        })}
          ?disabled=${this.disabled}
          @click="${this.handleClick}"
          @keydown="${this.handleKeyDown}"
        >
          ${when(this.icon, () => html `<igds-icon
                size=${IGDS_ICON_SIZES.large}
                class="tag__icon"
                node=${this.icon}
                aria-hidden="true"
              ></igds-icon>`)}
          <slot></slot>
          ${when(this.removable, () => html `
              <span
                class="tag__button"
                role="button"
                tabindex=${this.disabled ? '-1' : '0'}
                aria-label="Remove tag"
                @click="${this.handleRemove}"
                @keydown="${this.handleKeyDown}"
              >
                <igds-icon
                  size=${IGDS_ICON_SIZES.large}
                  node=${close}
                  class="tag__button-icon"
                  aria-hidden="true"
                ></igds-icon>
              </span>
            `)}
        </button>
      </div>
    `;
    }
};
Tag.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, reflect: true })
], Tag.prototype, "id", void 0);
__decorate([
    property({ type: String })
], Tag.prototype, "size", void 0);
__decorate([
    property({ type: String })
], Tag.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], Tag.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Tag.prototype, "removable", void 0);
Tag = __decorate([
    customElement(IGDS_TAGS.tag)
], Tag);
export { Tag };
