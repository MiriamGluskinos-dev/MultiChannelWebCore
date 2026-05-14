var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { segmentContext } from './context';
import styles from './segmented-control.scss?inline';
import '../icon';
import '../button';
import '../tooltip';
let SegmentedControl = class SegmentedControl extends IGDSElement {
    constructor() {
        super();
        this.contextData = {
            updateSelectedId: this.updateSelectedId.bind(this),
            reportAboutTextSegment: this.reportAboutTextSegment.bind(this),
        };
        this.segmentsWithText = [];
        this._internals = this.attachInternals();
    }
    set disabled(value) {
        this.contextData = { ...this.contextData, disabled: value };
    }
    set size(value) {
        this.contextData = { ...this.contextData, size: value };
    }
    get isIconOnly() {
        return this.segmentsWithText.every((s) => !s.hasText);
    }
    updateSelectedId(selectedId, options) {
        this.contextData = { ...this.contextData, selectedId };
        this._internals.setFormValue(selectedId ?? null);
        if (options?.skipEvent) {
            return;
        }
        this.emit(IGDS_EVENTS.change, { id: selectedId });
    }
    reportAboutTextSegment(id, hasText) {
        this.segmentsWithText = [
            ...this.segmentsWithText.filter((s) => s.id !== id),
            { id, hasText },
        ];
    }
    render() {
        return html `
      <div
        role="group"
        aria-label="Segmented Control"
        class=${classMap({
            'segmented-control': true,
            'segmented-control--icon-only': this.isIconOnly,
        })}
      >
        <slot></slot>
      </div>
    `;
    }
};
SegmentedControl.styles = unsafeCSS(styles);
SegmentedControl.formAssociated = true;
__decorate([
    provide({ context: segmentContext })
], SegmentedControl.prototype, "contextData", void 0);
__decorate([
    property({ type: Boolean })
], SegmentedControl.prototype, "disabled", null);
__decorate([
    property({ type: String })
], SegmentedControl.prototype, "size", null);
__decorate([
    property({ type: String })
], SegmentedControl.prototype, "name", void 0);
__decorate([
    state()
], SegmentedControl.prototype, "segmentsWithText", void 0);
SegmentedControl = __decorate([
    customElement(IGDS_TAGS.segmentedControl)
], SegmentedControl);
export { SegmentedControl };
