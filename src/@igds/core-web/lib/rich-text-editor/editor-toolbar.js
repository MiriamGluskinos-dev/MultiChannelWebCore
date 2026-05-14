var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import styles from './editor-toolbar.scss?inline';
let EditorToolbar = class EditorToolbar extends IGDSElement {
    render() {
        return html `
      <div class="editor-toolbar">
        <slot></slot>
      </div>
    `;
    }
};
EditorToolbar.styles = unsafeCSS(styles);
EditorToolbar = __decorate([
    customElement(IGDS_TAGS.editorToolbar)
], EditorToolbar);
export { EditorToolbar };
