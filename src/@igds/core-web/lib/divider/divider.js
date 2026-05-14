var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_TAGS } from '../constants';
import { IGDS_DIVIDER_ORIENTATIONS, IGDS_DIVIDER_WIDTH } from './constants';
import styles from './divider.scss?inline';
let Divider = class Divider extends LitElement {
    constructor() {
        super();
        this.width = IGDS_DIVIDER_WIDTH.full;
        this.orientation = IGDS_DIVIDER_ORIENTATIONS.horizontal;
    }
    render() {
        return html `
      <hr
        class=${classMap({
            divider: true,
            'divider--inset': this.width == IGDS_DIVIDER_WIDTH.inset,
            'divider--vertical': this.orientation == IGDS_DIVIDER_ORIENTATIONS.vertical,
            'divider--inverted': Boolean(this.inverted),
        })}
        aria-hidden="true"
        aria-label=${ifDefined(this.label ? this.label : undefined)}
      />
    `;
    }
};
Divider.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], Divider.prototype, "width", void 0);
__decorate([
    property({ type: String })
], Divider.prototype, "orientation", void 0);
__decorate([
    property({ type: Boolean })
], Divider.prototype, "inverted", void 0);
__decorate([
    property({ type: String })
], Divider.prototype, "label", void 0);
Divider = __decorate([
    customElement(IGDS_TAGS.divider)
], Divider);
export { Divider };
