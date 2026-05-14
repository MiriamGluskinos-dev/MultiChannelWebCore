var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { consume } from '@lit/context';
import { property, customElement, query } from 'lit/decorators.js';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { igdsListContext } from './list-context';
import { IGDS_LIST_VARIANTS } from './constants';
let ListItem = class ListItem extends IGDSElement {
    constructor() {
        super(...arguments);
        this.draggableItem = true;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        if (this.context?.getVariant() !== IGDS_LIST_VARIANTS.data) {
            const childNodes = this.itemSlot.assignedNodes();
            this.context?.registerItem(childNodes, this.itemId);
            return;
        }
        this.context?.registerItem({
            header: this.header,
            subheader: this.subheader,
            iconName: this.icon,
            moreText: this.moreText,
            moreInfo: this.moreInfo ?? this.itemSlot.assignedNodes(),
            imageSrc: this.imageSrc,
            imageAlt: this.imageAlt,
            draggable: this.draggableItem,
        }, this.itemId);
    }
    render() {
        return html `<slot></slot>`;
    }
};
__decorate([
    property({ type: String })
], ListItem.prototype, "header", void 0);
__decorate([
    property({ type: String })
], ListItem.prototype, "subheader", void 0);
__decorate([
    property({ type: String, attribute: 'more-text' })
], ListItem.prototype, "moreText", void 0);
__decorate([
    property({ type: String, attribute: 'id' })
], ListItem.prototype, "itemId", void 0);
__decorate([
    property({ type: String, attribute: 'more-info' })
], ListItem.prototype, "moreInfo", void 0);
__decorate([
    property({ type: String })
], ListItem.prototype, "icon", void 0);
__decorate([
    property({
        type: String,
        attribute: 'draggable',
        converter: {
            fromAttribute(value) {
                return value !== 'false';
            },
        },
    })
], ListItem.prototype, "draggableItem", void 0);
__decorate([
    property({ type: String, attribute: 'image-src' })
], ListItem.prototype, "imageSrc", void 0);
__decorate([
    property({ type: String, attribute: 'image-alt' })
], ListItem.prototype, "imageAlt", void 0);
__decorate([
    consume({ context: igdsListContext })
], ListItem.prototype, "context", void 0);
__decorate([
    query('slot')
], ListItem.prototype, "itemSlot", void 0);
ListItem = __decorate([
    customElement(IGDS_TAGS.listItem)
], ListItem);
export { ListItem };
