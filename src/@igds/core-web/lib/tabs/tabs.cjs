"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const v=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),h=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),_=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),g=require("../node_modules/.pnpm/@lit_context@1.1.6/node_modules/@lit/context/lib/decorators/provide.cjs"),u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),q=require("../constants/events.cjs"),$=require("../constants/tags.cjs"),y=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const p=require("./context.cjs"),f=require("./tabs.scss.cjs");require("../icon/icon.cjs");require("../badge/badge.cjs");require("@igds/icons");const m=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var w=Object.defineProperty,C=Object.getOwnPropertyDescriptor,o=(b,e,t,r)=>{for(var s=r>1?void 0:r?C(e,t):e,i=b.length-1,n;i>=0;i--)(n=b[i])&&(s=(r?n(e,t,s):n(s))||s);return r&&s&&w(e,t,s),s};exports.Tabs=class extends y.IGDSElement{constructor(){super(...arguments),this.context=new p.TabsContext,this.tabs=this.context.getTabs(),this.currentTabId=this.context.currentTab??"",this.centered=!1}connectedCallback(){super.connectedCallback(),this.context.onChangeTabs=()=>{this.tabs=this.context.getTabs()},this.context.onCurrentTabChange=e=>{this.currentTabId=e,this.updateComplete.then(()=>this.scrollToActiveTab())}}scrollToActiveTab(){const e=this.shadowRoot?.querySelector(".tabs__tab--active");e&&e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}handleClick(e,t){this.context&&!t&&(this.emit(q.IGDS_EVENTS.change),this.context.currentTab=e)}handleKeyDown(e,t){const{key:r}=e,s=this.tabs.length;let i=t;const n=(d,T)=>{let a=d;do a=(a+T+s)%s;while(this.tabs[a].disabled&&a!==d);return a};switch(r){case"ArrowRight":i=n(t,1);break;case"ArrowLeft":i=n(t,-1);break;case"Enter":case" ":this.handleClick(this.tabs[t].id,this.tabs[t].disabled);break;default:return}e.preventDefault(),this.shadowRoot?.querySelectorAll("button")[i]?.focus()}render(){return c.html`
      <div class="tabs">
        <div class="tabs__list-container">
          <div
            role="tablist"
            class=${l.classMap({tabs__list:!0,"tabs__list--centered":this.centered})}
          >
            ${u.repeat(this.tabs,e=>e.id,(e,t)=>{const r=e.id===this.currentTabId;return c.html`
                  <button
                    role="tab"
                    id=${e.id}
                    aria-selected=${r}
                    ?selected="${r}"
                    class=${l.classMap({tabs__tab:!0,"tabs__tab--active":r})}
                    ?disabled=${e.disabled}
                    @click=${()=>this.handleClick(e.id,e.disabled)}
                    @keydown=${s=>this.handleKeyDown(s,t)}
                  >
                    ${e.icon&&c.html`<igds-icon node=${e.icon}></igds-icon>`}
                    <span
                      class=${l.classMap({tabs__label:!0,"tabs__label--disabled":e.disabled})}
                      >${e.label}</span
                    >
                    ${e.badge?c.html`<igds-badge counter=${e.badge}></igds-badge>`:null}
                  </button>
                `})}
          </div>
        </div>
        <div>
          ${u.repeat(this.context?.panels,({id:e})=>e,({id:e,panel:t})=>c.html`
                <div
                  class=${l.classMap({tabs__panel:!0,"tabs__panel--active":this.currentTabId===e})}
                  role="tabpanel"
                  ?active="${this.currentTabId===e}"
                >
                  ${t}
                </div>
              `)}
        </div>
        <slot></slot>
      </div>
    `}};exports.Tabs.styles=m.unsafeCSS(f);o([g.provide({context:p.tabsContext})],exports.Tabs.prototype,"context",2);o([_.state()],exports.Tabs.prototype,"tabs",2);o([h.property({type:String,reflect:!0})],exports.Tabs.prototype,"currentTabId",2);o([h.property({type:Boolean,reflect:!0})],exports.Tabs.prototype,"centered",2);exports.Tabs=o([v.customElement($.IGDS_TAGS.tabs)],exports.Tabs);
