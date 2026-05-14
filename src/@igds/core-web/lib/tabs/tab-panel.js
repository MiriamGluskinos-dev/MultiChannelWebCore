var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { tabsContext } from './context';
let TabPanel = class TabPanel extends IGDSElement {
    constructor() {
        super(...arguments);
        this.tab = '';
    }
    connectedCallback() {
        super.connectedCallback();
        this.context?.registerPanel(this.tab, this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.context?.unregisterPanel(this.tab);
    }
    handleSlotChange() {
        this.context?.updatePanel(this.tab, this);
    }
    render() {
        return html `<slot @slotchange=${this.handleSlotChange}></slot>`;
    }
};
__decorate([
    consume({ context: tabsContext })
], TabPanel.prototype, "context", void 0);
__decorate([
    property({ type: String })
], TabPanel.prototype, "tab", void 0);
TabPanel = __decorate([
    customElement(IGDS_TAGS.tabPanel)
], TabPanel);
export { TabPanel };
