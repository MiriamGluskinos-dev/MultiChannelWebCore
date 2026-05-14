var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, state, queryAll } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { provide } from '@lit/context';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import { igdsFooterNavigationContext, IgdsFooterNavigationContext, } from './context';
import styles from './footer-navigation.scss?inline';
let FooterNavigation = class FooterNavigation extends IGDSElement {
    constructor() {
        super(...arguments);
        this.context = new IgdsFooterNavigationContext();
        this.navLinks = this.context.getNavLinks();
        this.globalLinkIndex = 0;
    }
    connectedCallback() {
        super.connectedCallback();
        this.context.onChangeNavLinks = async () => {
            this.navLinks = this.context.getNavLinks();
            await this.updateComplete;
        };
    }
    onKeyDown(event, currentIndex) {
        const allLinks = Array.from(this.navLinkElements);
        if (event.key === "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */) {
            event.preventDefault();
            const next = allLinks[currentIndex + 1] ?? allLinks[0];
            next.focus();
        }
        if (event.key === "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */) {
            event.preventDefault();
            const prev = allLinks[currentIndex - 1] ?? allLinks[allLinks.length - 1];
            prev.focus();
        }
    }
    getNavLinksTemplate(links) {
        return html `
      ${repeat(links, (link) => {
            const currentIndex = this.globalLinkIndex++;
            return html `
          <a
            class="footer-navigation__nav-link"
            href="${link.href}"
            tabindex="0"
            @keydown=${(e) => this.onKeyDown(e, currentIndex)}
          >
            ${link.label}
          </a>
        `;
        })}
    `;
    }
    render() {
        return html `
      <div class="footer-navigation">
        ${when(this.navLinks.length, () => html `
            <igds-accordion
              class="footer-navigation__accordion"
              .multiexpand="${false}"
            >
              ${repeat(this.navLinks, (navLink) => html `
                  <igds-accordion-item ?open=${false} header=${navLink.header}>
                    <nav class="footer-navigation__accordion-nav">
                      ${this.getNavLinksTemplate(navLink.links)}
                    </nav>
                  </igds-accordion-item>
                `)}
            </igds-accordion>
          `)}
        <div
          class="footer-navigation__desktop-container"
          role="navigation"
          aria-live="polite"
          aria-label="תפריט ניווט"
        >
          ${repeat(this.navLinks, (navLink, index) => {
            const headerId = `footer-section-header-${index}`;
            return html `
              <section
                class="footer-navigation__links"
                aria-labelledby=${headerId}
              >
                <h4 class="footer-navigation__links-header" id=${headerId}>
                  ${navLink.header}
                </h4>
                <nav class="footer-navigation__links-nav">
                  ${this.getNavLinksTemplate(navLink.links)}
                </nav>
              </section>
            `;
        })}
        </div>
      </div>
    `;
    }
};
FooterNavigation.styles = unsafeCSS(styles);
__decorate([
    provide({ context: igdsFooterNavigationContext })
], FooterNavigation.prototype, "context", void 0);
__decorate([
    state()
], FooterNavigation.prototype, "navLinks", void 0);
__decorate([
    queryAll('.footer-navigation__nav-link')
], FooterNavigation.prototype, "navLinkElements", void 0);
FooterNavigation = __decorate([
    customElement(IGDS_TAGS.footerNavigation)
], FooterNavigation);
export { FooterNavigation };
