var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IGDS_SKELETON_VARIANT } from './constants';
import styles from './skeleton.scss?inline';
let Skeleton = class Skeleton extends IGDSElement {
    constructor() {
        super(...arguments);
        this.variant = IGDS_SKELETON_VARIANT.rectangular;
        this.radius = 16;
        this.width = '100%';
        this.currentWidth = this.width;
        this.currentHeight = this.height;
    }
    updateCurrentState() {
        const isCircle = this.variant === 'circle';
        this.currentWidth = isCircle ? `${Number(this.radius) * 2}px` : this.width;
        this.currentHeight = isCircle
            ? `${Number(this.radius) * 2}px`
            : this.height;
    }
    update(changedProperties) {
        super.update(changedProperties);
        this.updateCurrentState();
    }
    render() {
        return html `
      <div
        class=${classMap({
            skeleton: true,
            'skeleton--circle': this.variant === IGDS_SKELETON_VARIANT.circle,
            'skeleton--rectangular': this.variant === IGDS_SKELETON_VARIANT.rectangular,
            'skeleton--title': this.variant === IGDS_SKELETON_VARIANT.title,
            'skeleton--subtitle': this.variant === IGDS_SKELETON_VARIANT.subtitle,
            'skeleton--body': this.variant === IGDS_SKELETON_VARIANT.body,
        })}
        aria-hidden="true"
        aria-busy="true"
        data-variant="${this.variant}"
        style="width: ${this.currentWidth}; height: ${this.currentHeight}"
      ></div>
    `;
    }
};
Skeleton.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], Skeleton.prototype, "variant", void 0);
__decorate([
    property({ type: Number })
], Skeleton.prototype, "radius", void 0);
__decorate([
    property({ type: String })
], Skeleton.prototype, "width", void 0);
__decorate([
    property({ type: String })
], Skeleton.prototype, "height", void 0);
__decorate([
    state()
], Skeleton.prototype, "currentWidth", void 0);
__decorate([
    state()
], Skeleton.prototype, "currentHeight", void 0);
Skeleton = __decorate([
    customElement(IGDS_TAGS.skeleton)
], Skeleton);
export { Skeleton };
