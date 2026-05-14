"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const r=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const v=require("../node_modules/.pnpm/@lit_context@1.1.6/node_modules/@lit/context/lib/decorators/provide.cjs"),I=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),g=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),p=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),h=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),w=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.cjs"),l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),f=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),m=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),C=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/style-map.cjs"),y=require("../constants/breakpoints.cjs"),B=require("../constants/events.cjs"),E=require("../constants/tags.cjs"),_=require("./breadcrumb-context.cjs"),S=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const b=require("../utils/common.cjs"),a=require("./constants.cjs"),M=require("@igds/icons"),O=require("./breadcrumbs.scss.cjs");require("../icon/icon.cjs");require("../popup-menu/popup-menu.cjs");require("../popup-menu/popup-menu-item.cjs");const $=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var q=Object.defineProperty,x=Object.getOwnPropertyDescriptor,n=(c,e,t,s)=>{for(var i=s>1?void 0:s?x(e,t):e,d=c.length-1,o;d>=0;d--)(o=c[d])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&q(e,t,i),i};const L="...",D=250,T=180,k=`(max-width: ${b.getCssValue(y.IGDS_BREAKPOINT_VARS.mobileL,"425px")})`;exports.Breadcrumbs=class extends S.IGDSElement{constructor(){super(),this.isCollapsible=!1,this.isOverflowed=!1,this.numberOfHiddenItems=0,this.expandButtonWidth=40,this.label="Breadcrumbs",this.preventDefault=!1,this.context=new _.IgdsBreadcrumbsContext,this.items=[],this.middleSectionWidth="auto",this.resizeHandler=b.throttle(()=>{this.checkOverflowing()},D),this._mediaQueryObserver=window.matchMedia(k),this.handleChangeDevice=this.handleChangeDevice.bind(this)}get isMobile(){return this._mediaQueryObserver.matches}connectedCallback(){super.connectedCallback(),this.context.onChange=()=>{this.items=this.context.getItems(),this.isCollapsible=this.items.length>a.START_BLOCK_LIMIT+a.END_BLOCK_LIMIT};const e=b.getCssValue("--igds-light-ref-space-800","40px"),t=Number.parseInt(e);this.expandButtonWidth=isNaN(t)?40:t,this._mediaQueryObserver.addEventListener("change",this.handleChangeDevice)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeHandler),this._mediaQueryObserver.removeEventListener("change",this.handleChangeDevice)}handleChangeDevice(){this.shownOnMobile=this.isMobile}handleExpand(){this.emit(B.IGDS_EVENTS.expand)}handleItemClick(e,t){this.preventDefault&&e.preventDefault(),this.context?.emit(t)}firstUpdated(e){super.firstUpdated(e),window.addEventListener("resize",this.resizeHandler),this.handleChangeDevice()}updated(e){super.updated(e),this.checkOverflowing()}shouldSkipOverflowingCheck(){return this.isMobile||!this.isCollapsible||!this.breadcrumbsElement||!this.startElement||!this.middleElement||!this.endElement||!this.middleItems||this.middleItems.length===0}checkOverflowing(){if(this.shouldSkipOverflowingCheck())return;this.itemGap===void 0&&this.boxGap===void 0&&this.boxLeftPadding===void 0&&this.boxRightPadding===void 0&&(this.itemGap=this.measureCssProperty(this.middleElement,"gap",8),this.boxGap=this.measureCssProperty(this.breadcrumbsElement,"gap",8),this.boxLeftPadding=this.measureCssProperty(this.breadcrumbsElement,"padding-left",4),this.boxRightPadding=this.measureCssProperty(this.breadcrumbsElement,"padding-right",4)),this.middleItemsSizeMap===void 0&&(this.middleItemsSizeMap=Array.from(this.middleItems).reduce((t,s,i)=>i===0?[Math.ceil(s.getBoundingClientRect().width)]:[...t,t[i-1]+this.itemGap+Math.ceil(s.getBoundingClientRect().width)],[]).reverse());const e=this.breadcrumbsElement.offsetWidth-this.startElement.offsetWidth-this.endElement.offsetWidth-2*this.boxGap-this.boxLeftPadding-this.boxRightPadding-this.expandButtonWidth;[this.isOverflowed,this.middleSectionWidth,this.numberOfHiddenItems]=this.getMiddleSectionWidth(e)}measureCssProperty(e,t,s){const i=window.getComputedStyle(e).getPropertyValue(t),d=Number.parseInt(i);return isNaN(d)?s:d}getMiddleSectionWidth(e){if(!this.middleItemsSizeMap)return[!1,"auto",0];if(e<this.middleItemsSizeMap[this.middleItemsSizeMap.length-1])return[!0,"0",this.middleItemsSizeMap.length];const t=this.middleItemsSizeMap.findIndex(s=>s<=e);return t<1?[!1,"auto",0]:[!0,`${this.middleItemsSizeMap[t]+this.expandButtonWidth}px`,t]}navigateTo(e,t,s){this.preventDefault||this.emulateDefaultLinkClickBehavior(t,s),this.context?.emit(e)}emulateDefaultLinkClickBehavior(e,t){switch(t){case"_blank":window.open(e,"_blank");break;case"_parent":window.parent!==window?window.parent.location.href=e:window.location.href=e;break;case"_top":window.top&&window.top!==window?window.top.location.href=e:window.location.href=e;break;default:window.location.href=e}}renderItemContent(e,t){return r.html`
      ${f.when(!e,()=>r.html`
          <igds-icon
            node=${M.chevronLeft}
            class="breadcrumbs__separator"
          ></igds-icon>
        `)}
      <span class="breadcrumbs__text-label">${t}</span>
    `}renderItem(e,t,s,i){if(s)return r.html`
        <div
          aria-current="page"
          rel=${u.ifDefined(e.rel?e.rel:void 0)}
          class="breadcrumbs__item breadcrumbs__item--current-page"
        >
          ${this.renderItemContent(t,e.label)}
        </div>
      `;const d=i!==void 0&&i.index!==void 0&&i.visibleItemsCount!==void 0&&i.index+1>i.visibleItemsCount;return r.html`
      <a
        @click=${o=>this.handleItemClick(o,e.id)}
        href="${e.href}"
        target="${u.ifDefined(e.target?e.target:void 0)}"
        rel=${u.ifDefined(e.rel?e.rel:void 0)}
        class=${m.classMap({breadcrumbs__item:!0,"breadcrumbs__item--first":t,"breadcrumbs__item--hidden":d,"breadcrumbs__item--penultimate":!!i?.penultimate})}
      >
        ${this.renderItemContent(t,e.label)}
      </a>
    `}get formattedItems(){return this.items.reduce((e,t,s)=>({...e,...s<a.START_BLOCK_LIMIT?{start:[...e.start,t]}:{},...s>=a.START_BLOCK_LIMIT&&s<this.items.length-a.END_BLOCK_LIMIT?{middle:[...e.middle,t]}:{},...s>=this.items.length-a.END_BLOCK_LIMIT?{end:[...e.end,t]}:{}}),{start:[],middle:[],end:[]})}get invisibleItems(){return this.formattedItems.middle.slice(this.formattedItems.middle.length-this.numberOfHiddenItems,this.formattedItems.middle.length)}renderStandardBreadcrumbs(){return r.html`
      <nav
        aria-label=${this.label}
        class=${m.classMap({breadcrumbs:!0,"breadcrumbs--standard":!0,"breadcrumbs--mobile":!!this.shownOnMobile})}
      >
        ${l.repeat(this.items,({id:e})=>e,(e,t)=>{const s=t===0,i=t===this.items.length-1;return r.html`
              ${this.renderItem(e,s,i,{penultimate:t===this.items.length-2})}
            `})}
      </nav>
    `}render(){return this.isCollapsible?r.html`
        <nav
          aria-label=${this.label}
          class=${m.classMap({breadcrumbs:!0,"breadcrumbs--overflowed":!0,"breadcrumbs--truncated":this.middleSectionWidth==="0","breadcrumbs--mobile":!!this.shownOnMobile})}
        >
          <section class="breadcrumbs__section breadcrumbs__section--start">
            ${l.repeat(this.formattedItems.start,({id:e})=>e,(e,t)=>r.html` ${this.renderItem(e,t===0,!1)} `)}
          </section>
          <section
            class=${m.classMap({breadcrumbs__section:!0,"breadcrumbs__section--middle":!0,"breadcrumbs__section--overflowed":this.isOverflowed})}
            style=${C.styleMap({width:this.middleSectionWidth})}
          >
            ${l.repeat(this.formattedItems.middle,({id:e})=>e,(e,t)=>r.html`
                  ${this.renderItem(e,!1,!1,{index:t,visibleItemsCount:this.formattedItems.middle.length-this.numberOfHiddenItems})}
                `)}
            ${f.when(this.isOverflowed,()=>r.html`
                <igds-popup-menu
                  offset=${0}
                  min-width=${T}
                  @igds-open=${this.handleExpand}
                >
                  <button
                    slot="trigger"
                    type="button"
                    class="breadcrumbs__item breadcrumbs__expand-button"
                  >
                    ${this.renderItemContent(!1,L)}
                  </button>
                  ${l.repeat(this.invisibleItems,e=>r.html`
                      <igds-popup-menu-item
                        id="${e.id}"
                        @igds-select=${()=>this.navigateTo(e.id,e.href,e.target)}
                      >
                        ${e.label}
                      </igds-popup-menu-item>
                    `)}
                </igds-popup-menu>
              `)}
          </section>
          <section class="breadcrumbs__section breadcrumbs__section--end">
            ${l.repeat(this.formattedItems.end,({id:e})=>e,(e,t)=>r.html`
                  ${this.renderItem(e,!1,t===this.formattedItems.end.length-1)}
                `)}
          </section>
        </nav>
        <slot></slot>
      `:this.renderStandardBreadcrumbs()}};exports.Breadcrumbs.styles=$.unsafeCSS(O);n([g.property({type:String})],exports.Breadcrumbs.prototype,"label",2);n([g.property({type:Boolean,attribute:"prevent-default"})],exports.Breadcrumbs.prototype,"preventDefault",2);n([v.provide({context:_.igdsBreadcrumbsContext})],exports.Breadcrumbs.prototype,"context",2);n([p.state()],exports.Breadcrumbs.prototype,"items",2);n([p.state()],exports.Breadcrumbs.prototype,"middleSectionWidth",2);n([p.state()],exports.Breadcrumbs.prototype,"shownOnMobile",2);n([h.query(".breadcrumbs")],exports.Breadcrumbs.prototype,"breadcrumbsElement",2);n([h.query(".breadcrumbs__section--start")],exports.Breadcrumbs.prototype,"startElement",2);n([h.query(".breadcrumbs__section--middle")],exports.Breadcrumbs.prototype,"middleElement",2);n([h.query(".breadcrumbs__section--end")],exports.Breadcrumbs.prototype,"endElement",2);n([w.queryAll(".breadcrumbs__section--middle a.breadcrumbs__item")],exports.Breadcrumbs.prototype,"middleItems",2);exports.Breadcrumbs=n([I.customElement(E.IGDS_TAGS.breadcrumbs)],exports.Breadcrumbs);
