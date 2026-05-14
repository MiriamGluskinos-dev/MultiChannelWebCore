var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { tabsContext } from './context';
let Tab = class Tab extends IGDSElement {
    constructor() {
        super(...arguments);
        this.id = '';
        this.label = '';
        this.disabled = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.registerTab();
    }
    registerTab() {
        if (!this.id) {
            return;
        }
        this.context?.registerTab({
            id: this.id,
            label: this.label,
            icon: this.icon,
            badge: this.badge,
            disabled: this.disabled,
        });
    }
    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has('id') ||
            changedProperties.has('label') ||
            changedProperties.has('icon') ||
            changedProperties.has('badge') ||
            changedProperties.has('disabled')) {
            this.registerTab();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.context?.unregisterTab(this.id);
    }
    render() {
        return null;
    }
};
__decorate([
    consume({ context: tabsContext })
], Tab.prototype, "context", void 0);
__decorate([
    property({ type: String })
], Tab.prototype, "id", void 0);
__decorate([
    property({ type: String })
], Tab.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], Tab.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], Tab.prototype, "icon", void 0);
__decorate([
    property({ type: Number })
], Tab.prototype, "badge", void 0);
Tab = __decorate([
    customElement(IGDS_TAGS.tab)
], Tab);
export { Tab };
