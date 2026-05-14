var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import styles from './tag-group.scss?inline';
let TagGroup = class TagGroup extends IGDSElement {
    render() {
        return html ` <div class="tag-group" role="list">
      <slot></slot>
    </div>`;
    }
};
TagGroup.styles = unsafeCSS(styles);
TagGroup = __decorate([
    customElement(IGDS_TAGS.tagGroup)
], TagGroup);
export { TagGroup };
