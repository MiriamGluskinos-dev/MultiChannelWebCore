var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { when } from 'lit/directives/when.js';
import { IGDS_ICON_SIZES } from './icon-sizes';
import styles from './icon.scss?inline';
import { IGDS_TAGS } from '../constants';
let Icon = class Icon extends LitElement {
    constructor() {
        super(...arguments);
        this._iconSize = 24;
        this.color = 'inherit';
        this.accessibleName = '';
    }
    set size(value) {
        this._iconSize = this.getIconSizeInPixels(value);
    }
    get size() {
        return this._iconSize;
    }
    getIconSizeInPixels(size) {
        if (typeof size === 'number') {
            return size;
        }
        if (typeof size === 'string') {
            const parsedNumber = Number.parseInt(size);
            if (!Number.isNaN(parsedNumber)) {
                return parsedNumber;
            }
        }
        if (size === IGDS_ICON_SIZES.small) {
            return 16;
        }
        if (size === IGDS_ICON_SIZES.medium) {
            return 20;
        }
        return 24;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('name') && this.name) {
            console.warn(`
            Starting from version 0.1.29, the igds-icon component no longer supports the name property.
            Use the node property instead. The required icon nodes can be found and imported from the
            @igds/icons library.
      `);
        }
    }
    render() {
        return html `
      <svg
        style="color: ${this.color}"
        xmlns="http://www.w3.org/2000/svg"
        width=${this.size}
        height=${this.size}
        viewBox="0 0 24 24"
        role="presentation"
        class="icon"
      >
        ${when(this.accessibleName, () => html `<title>${this.accessibleName}</title>`)}
        ${unsafeSVG(this.node)}
      </svg>
    `;
    }
};
Icon.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], Icon.prototype, "name", void 0);
__decorate([
    property({ type: String })
], Icon.prototype, "node", void 0);
__decorate([
    property({ type: String })
], Icon.prototype, "color", void 0);
__decorate([
    property({ type: String, attribute: 'accessible-name' })
], Icon.prototype, "accessibleName", void 0);
__decorate([
    property({ type: String })
], Icon.prototype, "size", null);
Icon = __decorate([
    customElement(IGDS_TAGS.icon)
], Icon);
export { Icon };
