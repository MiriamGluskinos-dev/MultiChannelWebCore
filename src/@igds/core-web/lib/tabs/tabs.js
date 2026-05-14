var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { tabsContext, TabsContext } from './context';
import styles from './tabs.scss?inline';
import '../icon';
import '../badge';
let Tabs = class Tabs extends IGDSElement {
    constructor() {
        super(...arguments);
        this.context = new TabsContext();
        this.tabs = this.context.getTabs();
        this.currentTabId = this.context.currentTab ?? '';
        this.centered = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.context.onChangeTabs = () => {
            this.tabs = this.context.getTabs();
        };
        this.context.onCurrentTabChange = (newTabId) => {
            this.currentTabId = newTabId;
            this.updateComplete.then(() => this.scrollToActiveTab());
        };
    }
    scrollToActiveTab() {
        const activeTab = this.shadowRoot?.querySelector('.tabs__tab--active');
        if (activeTab) {
            activeTab.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
        }
    }
    handleClick(id, disabled) {
        if (this.context && !disabled) {
            this.emit(IGDS_EVENTS.change);
            this.context.currentTab = id;
        }
    }
    handleKeyDown(event, index) {
        const { key } = event;
        const tabCount = this.tabs.length;
        let newIndex = index;
        const findNextEnabledTab = (startIndex, direction) => {
            let i = startIndex;
            do {
                i = (i + direction + tabCount) % tabCount;
            } while (this.tabs[i].disabled && i !== startIndex);
            return i;
        };
        switch (key) {
            case 'ArrowRight':
                newIndex = findNextEnabledTab(index, 1);
                break;
            case 'ArrowLeft':
                newIndex = findNextEnabledTab(index, -1);
                break;
            case 'Enter':
            case ' ':
                this.handleClick(this.tabs[index].id, this.tabs[index].disabled);
                break;
            default:
                return;
        }
        event.preventDefault();
        const newTab = this.shadowRoot?.querySelectorAll('button')[newIndex];
        newTab?.focus();
    }
    render() {
        return html `
      <div class="tabs">
        <div class="tabs__list-container">
          <div
            role="tablist"
            class=${classMap({
            tabs__list: true,
            'tabs__list--centered': this.centered,
        })}
          >
            ${repeat(this.tabs, (tabData) => tabData.id, (tabData, index) => {
            const isSelected = tabData.id === this.currentTabId;
            return html `
                  <button
                    role="tab"
                    id=${tabData.id}
                    aria-selected=${isSelected}
                    ?selected="${isSelected}"
                    class=${classMap({
                tabs__tab: true,
                'tabs__tab--active': isSelected,
            })}
                    ?disabled=${tabData.disabled}
                    @click=${() => this.handleClick(tabData.id, tabData.disabled)}
                    @keydown=${(event) => this.handleKeyDown(event, index)}
                  >
                    ${tabData.icon &&
                html `<igds-icon node=${tabData.icon}></igds-icon>`}
                    <span
                      class=${classMap({
                tabs__label: true,
                'tabs__label--disabled': tabData.disabled,
            })}
                      >${tabData.label}</span
                    >
                    ${tabData.badge
                ? html `<igds-badge counter=${tabData.badge}></igds-badge>`
                : null}
                  </button>
                `;
        })}
          </div>
        </div>
        <div>
          ${repeat(this.context?.panels, ({ id }) => id, ({ id, panel }) => {
            return html `
                <div
                  class=${classMap({
                tabs__panel: true,
                'tabs__panel--active': this.currentTabId === id,
            })}
                  role="tabpanel"
                  ?active="${this.currentTabId === id}"
                >
                  ${panel}
                </div>
              `;
        })}
        </div>
        <slot></slot>
      </div>
    `;
    }
};
Tabs.styles = unsafeCSS(styles);
__decorate([
    provide({ context: tabsContext })
], Tabs.prototype, "context", void 0);
__decorate([
    state()
], Tabs.prototype, "tabs", void 0);
__decorate([
    property({ type: String, reflect: true })
], Tabs.prototype, "currentTabId", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Tabs.prototype, "centered", void 0);
Tabs = __decorate([
    customElement(IGDS_TAGS.tabs)
], Tabs);
export { Tabs };
