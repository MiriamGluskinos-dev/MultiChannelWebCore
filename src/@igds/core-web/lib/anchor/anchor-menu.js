var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedElements, state, } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDSElement } from '../abstractions';
import { provide } from '@lit/context';
import { igdsAnchorContext, IgdsAnchorContext } from './context';
import { getCssValue } from '../utils';
import { IGDS_BUTTON_VARIANTS } from '../button';
import { IGDS_EVENTS, IGDS_TAGS, } from '../constants';
import styles from './anchor-menu.scss?inline';
const CSS_QUERY = `(max-width: ${getCssValue("--igds-light-ref-device-width-mobile-l" /* IGDS_BREAKPOINT_VARS.mobileL */, '425px')})`;
let AnchorMenu = class AnchorMenu extends IGDSElement {
    constructor() {
        super();
        this.context = new IgdsAnchorContext();
        this.header = '';
        this.dir = 'rtl';
        this.anchors = this.context.getAnchors();
        this.selectedAnchorId = null;
        this._mediaQueryObserver = window.matchMedia(CSS_QUERY);
        this.handleObserverChange = this.handleObserverChange.bind(this);
    }
    isMobile() {
        return this._mediaQueryObserver.matches;
    }
    connectedCallback() {
        super.connectedCallback();
        this.context.onChangeAnchors = () => {
            this.anchors = this.context.getAnchors();
        };
        this._mediaQueryObserver.addEventListener('change', this.handleObserverChange);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._mediaQueryObserver.removeEventListener('change', this.handleObserverChange);
    }
    render() {
        return html `
      <nav
        role="navigation"
        aria-labelledby="anchor-header"
        aria-live="polite"
        class="anchor-menu"
      >
        <h2 id="anchor-header" class="anchor-menu__header">${this.header}</h2>
        <ul class="anchor-menu__list">
          ${repeat(this.anchors, (anchor) => html `
              <li>
                ${this.isMobile()
            ? html `
                      <igds-button
                        variant=${IGDS_BUTTON_VARIANTS.link}
                        class="anchor-menu__item--mobile"
                        @focus=${this.onFocus}
                        @blur=${this.onBlur}
                        @keydown=${(event) => this.onAnchorItemKeyDown(event, anchor.href)}
                        @click=${() => this.handleClick(anchor.href)}
                        aria-current=${anchor.active ? 'true' : 'false'}
                      >
                        ${anchor.title}
                      </igds-button>
                    `
            : html `
                      <a
                        class=${classMap({
                'anchor-menu__item': true,
                'anchor-menu__item--ltr': this.dir === 'ltr',
            })}
                        href="${anchor.href}"
                        @click=${() => this.handleClick(anchor.href)}
                        @focus=${this.onFocus}
                        @blur=${this.onBlur}
                        @mousedown=${this.onMouseDown}
                        @mouseup=${this.onMouseUp}
                        @keydown=${this.onKeyDown}
                        aria-current=${anchor.active ? 'true' : 'false'}
                        >${anchor.title}</a
                      >
                    `}
              </li>
            `)}
        </ul>
      </nav>
    `;
    }
    onAnchorItemKeyDown(event, href) {
        if (["Enter" /* IGDS_EVENT_KEYS.Enter */, " " /* IGDS_EVENT_KEYS.Space */].includes(event.key) &&
            this.isMobile()) {
            event.preventDefault();
            window.location.href = href;
            return;
        }
        this.onKeyDown(event, href);
    }
    // eslint-disable-next-line complexity
    onKeyDown(event, href) {
        if (![
            "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
            "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
            "Enter" /* IGDS_EVENT_KEYS.Enter */,
            " " /* IGDS_EVENT_KEYS.Space */,
        ].includes(event.key)) {
            return;
        }
        if ([" " /* IGDS_EVENT_KEYS.Space */, "Enter" /* IGDS_EVENT_KEYS.Enter */].includes(event.key)) {
            event.preventDefault();
            window.location.href = href;
            return;
        }
        if (event.key === "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */) {
            event.target.parentElement?.nextElementSibling
                ?.firstElementChild?.focus();
        }
        if (event.key === "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */) {
            event.target.parentElement?.previousElementSibling
                ?.firstElementChild?.focus();
        }
    }
    onMouseDown(event) {
        this.setAttribute('data-mouse', 'true');
        event.preventDefault();
    }
    onMouseUp() {
        setTimeout(() => this.removeAttribute('data-mouse'), 0);
    }
    handleClick(href) {
        if (this.isMobile() && href) {
            window.location.href = href;
        }
        else {
            this.emit(IGDS_EVENTS.click, { href: href });
        }
    }
    onFocus() {
        this.emit(IGDS_EVENTS.focus);
    }
    onBlur() {
        this.emit(IGDS_EVENTS.blur);
        this.removeAttribute('data-mouse');
    }
    handleObserverChange() {
        this.requestUpdate();
    }
};
AnchorMenu.styles = unsafeCSS(styles);
__decorate([
    provide({ context: igdsAnchorContext })
], AnchorMenu.prototype, "context", void 0);
__decorate([
    property({ type: String })
], AnchorMenu.prototype, "header", void 0);
__decorate([
    property({ type: String, reflect: true })
], AnchorMenu.prototype, "dir", void 0);
__decorate([
    queryAssignedElements({ slot: 'anchor-item' })
], AnchorMenu.prototype, "anchorElements", void 0);
__decorate([
    state()
], AnchorMenu.prototype, "anchors", void 0);
__decorate([
    state()
], AnchorMenu.prototype, "selectedAnchorId", void 0);
AnchorMenu = __decorate([
    customElement(IGDS_TAGS.anchorMenu)
], AnchorMenu);
export { AnchorMenu };
