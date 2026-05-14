var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import { igdsFooterNavigationContext, } from './context';
let FooterNavigationItem = class FooterNavigationItem extends IGDSElement {
    constructor() {
        super(...arguments);
        this.navLinkId = '';
        this.header = '';
        this.links = [];
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('navLinkId') ||
            changedProperties.has('header') ||
            changedProperties.has('links')) {
            this.registerNavLink();
        }
    }
    registerNavLink() {
        this.context?.registerNavLink({
            id: this.navLinkId,
            header: this.header,
            links: this.links,
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.context?.removeNavLink(this.navLinkId);
    }
};
__decorate([
    property({ type: String, attribute: 'id' })
], FooterNavigationItem.prototype, "navLinkId", void 0);
__decorate([
    property({ type: String })
], FooterNavigationItem.prototype, "header", void 0);
__decorate([
    property({ type: Array })
], FooterNavigationItem.prototype, "links", void 0);
__decorate([
    consume({ context: igdsFooterNavigationContext })
], FooterNavigationItem.prototype, "context", void 0);
FooterNavigationItem = __decorate([
    customElement(IGDS_TAGS.footerNavigationItem)
], FooterNavigationItem);
export { FooterNavigationItem };
