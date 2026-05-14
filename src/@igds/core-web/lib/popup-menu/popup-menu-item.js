var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { consume } from '@lit/context';
import { property, customElement, query } from 'lit/decorators.js';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import { IGDSElement } from '../abstractions';
import { igdsPopupMenuContext } from './popup-menu-context';
import { generateId } from '../utils';
import styles from './hidden.scss?inline';
let PopupMenuItem = class PopupMenuItem extends IGDSElement {
    constructor() {
        super();
        this.localId = generateId();
        this.label = '';
        this.id = generateId();
        this.emitEvent = this.emitEvent.bind(this);
    }
    update(changedProperties) {
        super.update(changedProperties);
        this.label = this.getText(this.itemSlot);
        this.context?.updateItem(this.localId, {
            id: this.id,
            icon: this.icon,
            label: this.label,
            iconVariant: this.iconVariant,
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.context?.subscribe(this.localId, this.emitEvent);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.context?.unsubscribe(this.localId);
        this.context?.deleteItem(this.localId);
    }
    handleSlotChange(e) {
        if (!e.target) {
            return;
        }
        const text = this.getText(e.target);
        if (this.label === text) {
            return;
        }
        this.label = text;
        this.context?.updateLabel(this.localId, text);
    }
    getText(element) {
        const childNodes = element.assignedNodes({ flatten: true });
        return childNodes.reduce((result, item) => {
            return result + item.textContent?.trim();
        }, '');
    }
    emitEvent({ id, label }) {
        this.emit(IGDS_EVENTS.select, { id, label });
    }
    render() {
        return html `<slot @slotchange=${this.handleSlotChange}></slot>`;
    }
};
PopupMenuItem.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], PopupMenuItem.prototype, "id", void 0);
__decorate([
    property({ type: String })
], PopupMenuItem.prototype, "icon", void 0);
__decorate([
    property({ type: String, attribute: 'icon-variant' })
], PopupMenuItem.prototype, "iconVariant", void 0);
__decorate([
    consume({ context: igdsPopupMenuContext })
], PopupMenuItem.prototype, "context", void 0);
__decorate([
    query('slot')
], PopupMenuItem.prototype, "itemSlot", void 0);
PopupMenuItem = __decorate([
    customElement(IGDS_TAGS.popupMenuItem)
], PopupMenuItem);
export { PopupMenuItem };
