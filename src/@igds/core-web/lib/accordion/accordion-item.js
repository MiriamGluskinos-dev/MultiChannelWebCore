var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { chevronDown } from '@igds/icons';
import styles from './accordion-item.scss?inline';
let AccordionItem = class AccordionItem extends IGDSElement {
    constructor() {
        super(...arguments);
        this.open = false;
        this.disabled = false;
        this.onToggle = null;
    }
    detailsToggleHandler(event) {
        this.open = this.details.open;
        this.emit(IGDS_EVENTS.toggle, event.newState);
        this.onToggle?.(event);
    }
    render() {
        return html `
      <details
        ?open=${this.open}
        ?inert=${this.disabled}
        @toggle=${this.detailsToggleHandler}
        aria-expanded=${ifDefined(this.open)}
        class="accordion-item"
      >
        <summary aria-label="Accordion item" class="accordion-item__header">
          ${this.icon &&
            html `<igds-icon
            node=${this.icon}
            class="accordion-item__icon"
          ></igds-icon>`}
          <span class="accordion-item__title">${this.header}</span>
          <igds-icon
            node=${chevronDown}
            class="accordion-item__arrow"
          ></igds-icon>
        </summary>
        <div
          role="region"
          aria-live="polite"
          aria-hidden=${ifDefined(!this.open)}
          class="accordion-item__content"
        >
          <slot class="accordion-item__content-slot"></slot>
        </div>
      </details>
    `;
    }
};
AccordionItem.styles = unsafeCSS(styles);
__decorate([
    property({ type: Boolean })
], AccordionItem.prototype, "open", void 0);
__decorate([
    property({ type: Boolean })
], AccordionItem.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], AccordionItem.prototype, "icon", void 0);
__decorate([
    property({ type: String })
], AccordionItem.prototype, "header", void 0);
__decorate([
    property({ type: Boolean, attribute: false })
], AccordionItem.prototype, "onToggle", void 0);
__decorate([
    query('details')
], AccordionItem.prototype, "details", void 0);
AccordionItem = __decorate([
    customElement(IGDS_TAGS.accordionItem)
], AccordionItem);
export { AccordionItem };
