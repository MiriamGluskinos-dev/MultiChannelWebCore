var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { customElement, property, state } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { igdsAnchorContext } from './context';
import { generateId } from '../utils';
let Anchor = class Anchor extends IGDSElement {
    constructor() {
        super(...arguments);
        this.href = '';
        this.active = false;
        this._anchorId = '';
    }
    connectedCallback() {
        super.connectedCallback();
        this.registerAnchor();
    }
    registerAnchor() {
        if (!this.id) {
            return;
        }
        const id = this.anchorId ?? generateId();
        this.context?.registerAnchor(id, {
            title: this.anchorTitle,
            href: this.href,
            active: this.active,
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.context?.removeAnchor(this._anchorId);
    }
};
__decorate([
    property({ type: String, attribute: 'id' })
], Anchor.prototype, "anchorId", void 0);
__decorate([
    property({ type: String })
], Anchor.prototype, "href", void 0);
__decorate([
    property({ type: String, attribute: 'title' })
], Anchor.prototype, "anchorTitle", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Anchor.prototype, "active", void 0);
__decorate([
    state()
], Anchor.prototype, "_anchorId", void 0);
__decorate([
    consume({ context: igdsAnchorContext })
], Anchor.prototype, "context", void 0);
Anchor = __decorate([
    customElement(IGDS_TAGS.anchor)
], Anchor);
export { Anchor };
