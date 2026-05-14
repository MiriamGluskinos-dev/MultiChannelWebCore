var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IGDSElement } from '../abstractions';
import { html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { chevronUp, chevronDown } from '@igds/icons';
import styles from './sidebar-item.scss?inline';
let SidebarItem = class SidebarItem extends IGDSElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.subMenu = false;
        this.isSubMenuItem = false;
        this.expanded = false;
    }
    render() {
        return html `
      <div
        role="menuitem"
        aria-expanded=${ifDefined(this.subMenu ? this.expanded : undefined)}
        aria-disabled=${this.disabled}
        class=${classMap({
            'sidebar-item': true,
            'sidebar-item--indented': !this.icon,
            'sidebar-item--disabled': this.disabled,
        })}
        tabindex="0"
        @mouseenter=${this.onMouseEnter}
        @click=${this.onClick}
        @keydown=${() => { }}
      >
        ${when(this.icon, () => html `
            <igds-icon node=${this.icon} aria-hidden=${!this.icon}>
            </igds-icon>
          `)}
        <span class="sidebar-item__label">${this.label}</span>
        ${when(this.subMenu, () => html `
            <igds-icon
              node=${this.expanded ? chevronUp : chevronDown}
              class="sidebar-item__expand-icon"
            >
            </igds-icon>
          `)}
      </div>
      <igds-divider></igds-divider>
      ${when(this.expanded, () => html `
          <div
            role="menu"
            aria-label="Sidebar submenu"
            class="sidebar-item__submenu"
          >
            <slot
              class="sidebar-submenu-slot"
              name="sidebar-submenu-item"
            ></slot>
          </div>
        `)}
    `;
    }
    onMouseEnter() {
        this.emit(IGDS_EVENTS.hover, this.componentId);
    }
    onClick() {
        if (this.disabled)
            return;
        if (this.subMenu) {
            this.expanded = !this.expanded;
        }
        else {
            this.emit(IGDS_EVENTS.click, this.componentId, {
                isSubMenuItem: this.isSubMenuItem,
            });
        }
    }
};
SidebarItem.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, attribute: 'id' })
], SidebarItem.prototype, "componentId", void 0);
__decorate([
    property({ type: String })
], SidebarItem.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], SidebarItem.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, attribute: 'submenu' })
], SidebarItem.prototype, "subMenu", void 0);
__decorate([
    property({ type: String })
], SidebarItem.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean, attribute: 'submenu-item' })
], SidebarItem.prototype, "isSubMenuItem", void 0);
__decorate([
    state()
], SidebarItem.prototype, "expanded", void 0);
SidebarItem = __decorate([
    customElement(IGDS_TAGS.sidebarItem)
], SidebarItem);
export { SidebarItem };
