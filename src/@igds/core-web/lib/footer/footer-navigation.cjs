"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const i=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const u=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),d=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),h=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.cjs"),c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),p=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),f=require("../node_modules/.pnpm/@lit_context@1.1.6/node_modules/@lit/context/lib/decorators/provide.cjs"),_=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const v=require("../constants/event-keys.cjs"),m=require("../constants/tags.cjs"),g=require("./context.cjs"),k=require("./footer-navigation.scss.cjs"),N=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var q=Object.defineProperty,y=Object.getOwnPropertyDescriptor,a=(r,e,n,t)=>{for(var o=t>1?void 0:t?y(e,n):e,s=r.length-1,l;s>=0;s--)(l=r[s])&&(o=(t?l(e,n,o):l(o))||o);return t&&o&&q(e,n,o),o};exports.FooterNavigation=class extends _.IGDSElement{constructor(){super(...arguments),this.context=new g.IgdsFooterNavigationContext,this.navLinks=this.context.getNavLinks(),this.globalLinkIndex=0}connectedCallback(){super.connectedCallback(),this.context.onChangeNavLinks=async()=>{this.navLinks=this.context.getNavLinks(),await this.updateComplete}}onKeyDown(e,n){const t=Array.from(this.navLinkElements);e.key===v.IGDS_EVENT_KEYS.ArrowDown&&(e.preventDefault(),(t[n+1]??t[0]).focus()),e.key===v.IGDS_EVENT_KEYS.ArrowUp&&(e.preventDefault(),(t[n-1]??t[t.length-1]).focus())}getNavLinksTemplate(e){return i.html`
      ${c.repeat(e,n=>{const t=this.globalLinkIndex++;return i.html`
          <a
            class="footer-navigation__nav-link"
            href="${n.href}"
            tabindex="0"
            @keydown=${o=>this.onKeyDown(o,t)}
          >
            ${n.label}
          </a>
        `})}
    `}render(){return i.html`
      <div class="footer-navigation">
        ${p.when(this.navLinks.length,()=>i.html`
            <igds-accordion
              class="footer-navigation__accordion"
              .multiexpand="${!1}"
            >
              ${c.repeat(this.navLinks,e=>i.html`
                  <igds-accordion-item ?open=${!1} header=${e.header}>
                    <nav class="footer-navigation__accordion-nav">
                      ${this.getNavLinksTemplate(e.links)}
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
          ${c.repeat(this.navLinks,(e,n)=>{const t=`footer-section-header-${n}`;return i.html`
              <section
                class="footer-navigation__links"
                aria-labelledby=${t}
              >
                <h4 class="footer-navigation__links-header" id=${t}>
                  ${e.header}
                </h4>
                <nav class="footer-navigation__links-nav">
                  ${this.getNavLinksTemplate(e.links)}
                </nav>
              </section>
            `})}
        </div>
      </div>
    `}};exports.FooterNavigation.styles=N.unsafeCSS(k);a([f.provide({context:g.igdsFooterNavigationContext})],exports.FooterNavigation.prototype,"context",2);a([d.state()],exports.FooterNavigation.prototype,"navLinks",2);a([h.queryAll(".footer-navigation__nav-link")],exports.FooterNavigation.prototype,"navLinkElements",2);exports.FooterNavigation=a([u.customElement(m.IGDS_TAGS.footerNavigation)],exports.FooterNavigation);
