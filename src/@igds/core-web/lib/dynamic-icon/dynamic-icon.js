var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import * as icons from '@igds/icons';
import { isIconName } from './dynamic-icon.types';
import { IGDS_TAGS } from '../constants';
import '../icon';
const ICON_MAP = icons;
let DynamicIcon = class DynamicIcon extends LitElement {
    constructor() {
        super(...arguments);
        this.color = 'inherit';
        this.accessibleName = '';
    }
    render() {
        if (!isIconName(this.name)) {
            this.handleInvalidIcon();
            return this.renderFallback();
        }
        const iconNode = ICON_MAP[this.name];
        return html `
      <igds-icon
        .node=${iconNode}
        .color=${this.color}
        .size=${this.size}
        .accessibleName=${this.accessibleName}
      ></igds-icon>
    `;
    }
    handleInvalidIcon() {
        console.warn(`[igds-dynamic-icon] Invalid icon name: "${this.name}". ` +
            `Rendering fallback icon.`);
    }
    renderFallback() {
        return html `
      <igds-icon
        .node=${icons.alertCircle}
        .color=${'var(--igds-color-error, #ff6b6b)'}
        .size=${this.size}
        .accessibleName=${'Icon not found: ' + this.name}
        title="Icon not found: ${this.name}"
        style="opacity: 0.6;"
        data-fallback="true"
      ></igds-icon>
    `;
    }
};
__decorate([
    property({ type: String })
], DynamicIcon.prototype, "name", void 0);
__decorate([
    property({ type: String })
], DynamicIcon.prototype, "color", void 0);
__decorate([
    property({ type: String })
], DynamicIcon.prototype, "size", void 0);
__decorate([
    property({ type: String, attribute: 'accessible-name' })
], DynamicIcon.prototype, "accessibleName", void 0);
DynamicIcon = __decorate([
    customElement(IGDS_TAGS.dynamicIcon)
], DynamicIcon);
export { DynamicIcon };
