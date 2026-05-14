var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, queryAssignedElements } from 'lit/decorators.js';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { consume } from '@lit/context';
import { igdsCarouselContext } from './context';
let CarouselItem = class CarouselItem extends IGDSElement {
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.context) {
            console.warn('Context is not available yet');
            return;
        }
        if (this.context.carouselItems.includes(this)) {
            return;
        }
        this.context?.addCarouselItem(this);
    }
};
__decorate([
    consume({ context: igdsCarouselContext, subscribe: true })
], CarouselItem.prototype, "context", void 0);
__decorate([
    queryAssignedElements({ slot: 'list', selector: '.item' })
], CarouselItem.prototype, "_listItems", void 0);
CarouselItem = __decorate([
    customElement(IGDS_TAGS.carouselItem)
], CarouselItem);
export { CarouselItem };
