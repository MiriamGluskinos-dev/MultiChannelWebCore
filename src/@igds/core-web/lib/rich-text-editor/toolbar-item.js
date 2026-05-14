var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { igdsRichTextEditorContext, } from './rich-text-editor-context';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import { IGDS_TOOLBAR_DEFAULT_LABEL } from './constant';
import styles from './toolbar-item.scss?inline';
import '../icon';
let ToolbarItem = class ToolbarItem extends IGDSElement {
    getLabel() {
        if (this.label) {
            return this.label;
        }
        if (!this.command ||
            IGDS_TOOLBAR_DEFAULT_LABEL[this.command] === undefined) {
            return '';
        }
        return IGDS_TOOLBAR_DEFAULT_LABEL[this.command];
    }
    handleClick() {
        this.emit(IGDS_EVENTS.click, { command: this.command });
    }
    render() {
        return html `
      <button
        class="toolbar-item"
        type="button"
        @click=${this.handleClick}
        aria-label=${this.getLabel()}
        title=${this.getLabel()}
        ?disabled=${this.contextData.toolbarDisabled}
      >
        <igds-icon node=${this.icon} class="toolbar-item__icon"></igds-icon>
      </button>
    `;
    }
};
ToolbarItem.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], ToolbarItem.prototype, "icon", void 0);
__decorate([
    property({ type: String })
], ToolbarItem.prototype, "command", void 0);
__decorate([
    property({ type: String })
], ToolbarItem.prototype, "label", void 0);
__decorate([
    consume({ context: igdsRichTextEditorContext, subscribe: true })
], ToolbarItem.prototype, "contextData", void 0);
ToolbarItem = __decorate([
    customElement(IGDS_TAGS.toolbarItem)
], ToolbarItem);
export { ToolbarItem };
