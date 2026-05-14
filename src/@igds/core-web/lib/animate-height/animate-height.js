var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './animate-height.scss?inline';
let AnimateHeight = class AnimateHeight extends IGDSElement {
    set expand(value) {
        this._expand = value;
        setTimeout(() => {
            // for correct measuring container height
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
            this.animateHeight();
        });
    }
    get expand() {
        return this._expand;
    }
    constructor() {
        super();
        this._expand = false;
        this.startTime = 0;
        this.fullTargetHeight = 0;
        this.actualTargetHeight = 0;
        this.residualDuration = 0;
        this.duration = 200;
        this.height = 0;
        this.isAutoHeight = false;
        this.animateIt = this.animateIt.bind(this);
    }
    animateHeight() {
        this.startTime = performance.now();
        this.fullTargetHeight = this.container.scrollHeight;
        this.actualTargetHeight = this.height;
        this.residualDuration = this.expand
            ? this.duration * (1 - this.actualTargetHeight / this.fullTargetHeight)
            : this.duration * (this.actualTargetHeight / this.fullTargetHeight);
        this.animationId = requestAnimationFrame(this.animateIt);
        this.isAutoHeight = false;
    }
    animateIt() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - this.startTime;
        // Calculate the progress (from 0 to 1)
        const progress = Math.min(elapsedTime / this.residualDuration, 1);
        if (this.expand) {
            this.height =
                this.actualTargetHeight +
                    progress * (this.fullTargetHeight - this.actualTargetHeight);
        }
        else {
            this.height =
                this.actualTargetHeight - this.actualTargetHeight * progress;
        }
        // Continue the animation until the duration is reached
        if (progress < 1) {
            this.animationId = requestAnimationFrame(this.animateIt);
        }
        else {
            if (this.expand) {
                this.isAutoHeight = true;
            }
            else {
                this.height = 0;
            }
        }
    }
    render() {
        return html `
      <section
        class="animate-height"
        style=${styleMap({
            height: this.isAutoHeight ? 'auto' : `${this.height}px`,
        })}
      >
        <div
          class=${classMap({
            'animate-height__body': true,
            'animate-height__body--visible': this.expand,
        })}
          style=${styleMap({
            transitionDuration: `${this.duration}ms`,
        })}
        >
          <div
            style=${styleMap({
            // it prevents getting focus on invisible elements
            display: this.height === 0 && !this.expand ? 'none' : 'block',
        })}
          >
            <slot></slot>
          </div>
        </div>
      </section>
    `;
    }
};
AnimateHeight.styles = unsafeCSS(styles);
__decorate([
    property({ type: Number })
], AnimateHeight.prototype, "duration", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], AnimateHeight.prototype, "expand", null);
__decorate([
    state()
], AnimateHeight.prototype, "height", void 0);
__decorate([
    state()
], AnimateHeight.prototype, "isAutoHeight", void 0);
__decorate([
    query('.animate-height__body')
], AnimateHeight.prototype, "container", void 0);
AnimateHeight = __decorate([
    customElement(IGDS_TAGS.animateHeight)
], AnimateHeight);
export { AnimateHeight };
