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
import { igdsStepIndicatorContext } from './context';
let StepItem = class StepItem extends IGDSElement {
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        if (this.label) {
            this.stepId = this.context?.registerStep(this.label, this.secondaryLabel);
            return;
        }
        if (this.itemSlot) {
            const childNodes = this.itemSlot.assignedNodes();
            const textContent = childNodes.reduce((result, item) => {
                if (item.tagName) {
                    return result;
                }
                else {
                    return result + item.textContent;
                }
            }, '');
            this.stepId = this.context?.registerStep(textContent, this.secondaryLabel);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.stepId !== undefined) {
            this.context?.removeStep(this.stepId);
        }
    }
    render() {
        return html `<slot></slot>`;
    }
};
__decorate([
    property({ type: String })
], StepItem.prototype, "label", void 0);
__decorate([
    property({ type: String, attribute: 'secondary-label' })
], StepItem.prototype, "secondaryLabel", void 0);
__decorate([
    consume({ context: igdsStepIndicatorContext })
], StepItem.prototype, "context", void 0);
__decorate([
    query('slot')
], StepItem.prototype, "itemSlot", void 0);
StepItem = __decorate([
    customElement(IGDS_TAGS.stepItem)
], StepItem);
export { StepItem };
