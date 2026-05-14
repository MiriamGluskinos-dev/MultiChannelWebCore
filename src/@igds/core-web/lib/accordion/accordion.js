var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { AccordionItem } from './accordion-item';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import styles from './accordion.scss?inline';
import { IGDSElement } from '../abstractions';
let Accordion = class Accordion extends IGDSElement {
    constructor() {
        super(...arguments);
        this.multiexpand = false;
        this.assignedAccordionItems = [];
    }
    setAssignedAccordionItems() {
        if (this.accordionItemsSlot) {
            this.assignedAccordionItems = this.accordionItemsSlot
                .assignedNodes()
                .filter((node) => node instanceof AccordionItem);
        }
    }
    accordionItemToggleActionHandler(event) {
        if (event.detail.value === 'closed') {
            return;
        }
        for (let i = 0; i < this.assignedAccordionItems.length; i++) {
            const currentAccordionItem = this.assignedAccordionItems[i];
            if (event.target !== currentAccordionItem) {
                currentAccordionItem.open = false;
            }
        }
    }
    applyAccordionItemOpenHandler() {
        this.addEventListener(IGDS_EVENTS.toggle, this.accordionItemToggleActionHandler);
    }
    removeAccordionItemOpenHandler() {
        this.removeEventListener(IGDS_EVENTS.toggle, this.accordionItemToggleActionHandler);
    }
    connectedCallback() {
        super.connectedCallback();
        this.applyAccordionItemOpenHandler();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeAccordionItemOpenHandler();
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.setAssignedAccordionItems();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('multiexpand')) {
            if (this.multiexpand) {
                this.removeAccordionItemOpenHandler();
            }
            else {
                this.applyAccordionItemOpenHandler();
            }
        }
    }
    render() {
        return html `<slot></slot>`;
    }
};
Accordion.styles = unsafeCSS(styles);
__decorate([
    property({ type: Boolean })
], Accordion.prototype, "multiexpand", void 0);
__decorate([
    query('slot')
], Accordion.prototype, "accordionItemsSlot", void 0);
__decorate([
    state()
], Accordion.prototype, "assignedAccordionItems", void 0);
Accordion = __decorate([
    customElement(IGDS_TAGS.accordion)
], Accordion);
export { Accordion };
