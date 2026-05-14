"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const r=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const _=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),d=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),p=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),f=require("../node_modules/.pnpm/@lit_context@1.1.6/node_modules/@lit/context/lib/decorators/provide.cjs"),I=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),g=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),m=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),b=require("../constants/events.cjs"),C=require("../constants/tags.cjs"),N=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const P=require("./context.cjs"),u=require("./constants.cjs"),c=require("@igds/icons"),$=require("./pagination.scss.cjs");require("../icon/icon.cjs");const x=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var q=Object.defineProperty,A=Object.getOwnPropertyDescriptor,o=(l,e,s,i)=>{for(var n=i>1?void 0:i?A(e,s):e,a=l.length-1,t;a>=0;a--)(t=l[a])&&(n=(i?t(e,s,n):t(n))||n);return i&&n&&q(e,s,n),n};exports.Pagination=class extends N.IGDSElement{constructor(){super(),this.context=new P.PaginationContext,this.variant=u.IGDS_PAGINATION_VARIANT.numbered,this.current=1,this.paginationItems=this.context.paginationItems,this.activePage=this.current,this.visiblePages=[],this.componentWidth=0,this.numberPageHandler=this.numberPageHandler.bind(this)}connectedCallback(){super.connectedCallback(),this.activePage=this.current,this.context.onChangePagination=()=>{this.paginationItems=this.context.paginationItems},requestAnimationFrame(()=>this.updateVisiblePages()),this.resizeObserver=new ResizeObserver(()=>{this.updateVisiblePages()}),this.resizeObserver.observe(this)}update(e){super.update(e),this.context.onChangePagination=()=>{this.paginationItems=this.context.paginationItems}}willUpdate(e){e.has("current")&&(this.activePage=this.current)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}updateVisiblePages(){requestAnimationFrame(()=>{if(!this.offsetParent)return;const e=this.getBoundingClientRect();if(this.componentWidth=e.width||this.clientWidth,this.componentWidth===0)return;const a=window.innerWidth>u.LARGE_MOBILE_WIDTH?7:4,t=this.paginationItems.length,h=this.activePage;if(t<=a||this.variant===u.IGDS_PAGINATION_VARIANT.unnumbered){this.visiblePages=this.paginationItems.map(v=>v.pageNumber);return}this.visiblePages=this.getPagination(t,h,a)})}getPagination(e,s,i){if(e<=i)return Array.from({length:e},(a,t)=>t+1);let n;if(s<i-2)n=[...Array.from({length:i-2},(a,t)=>t+1),"...",e];else if(s>=e-i+4)n=[1,"...",...Array.from({length:i-2},(a,t)=>t+e-i+3)];else{const a=i-5,t=[s];for(let h=0;h<a;h++)h%2===0?t.unshift(t[0]-1):t.push(t[t.length-1]+1);n=[1,"...",...t,"...",e]}return n}numberPageHandler(e,s,i){e.preventDefault(),i||(this.emit(b.IGDS_EVENTS.click),this.emit(b.IGDS_EVENTS.change,`${s}`),this.activePage=s,this.updateVisiblePages())}get isLtr(){return getComputedStyle(this).direction==="ltr"}get isNumbered(){return this.variant===u.IGDS_PAGINATION_VARIANT.numbered}get isFirstPage(){return this.activePage===1}get isLastPage(){return this.activePage===this.paginationItems.length}get prevHref(){return!this.isFirstPage&&this.paginationItems?.[this.activePage-2]?.href?this.paginationItems[this.activePage-2].href:"#"}get nextHref(){return!this.isLastPage&&this.paginationItems?.[this.activePage]?.href?this.paginationItems[this.activePage].href:"#"}getPrevLinkCssClasses(){return m.classMap({pagination__btn:!0,"pagination__btn-disabled":this.isFirstPage,"pagination__btn-unnumbered":!this.isNumbered})}getNextLinkCssClasses(){return m.classMap({pagination__btn:!0,"pagination__btn-disabled":this.isLastPage,"pagination__btn-unnumbered":!this.isNumbered})}getPaginationCssClass(e=!1){const{numberClass:s,indicatorClass:i}=e?{numberClass:"pagination__number",indicatorClass:"pagination__indicator"}:{numberClass:"pagination__numbers",indicatorClass:"pagination__indicators"};return this.isNumbered?s:i}renderPreviousLink(){return r.html`
      <a
        href=${this.prevHref}
        aria-label="Previous"
        rel="prev"
        title="Previous page"
        class=${this.getPrevLinkCssClasses()}
        tabindex=${this.isFirstPage?"-1":""}
        @click="${e=>this.numberPageHandler(e,this.activePage-1,this.isFirstPage)}"
      >
        <span aria-hidden="true">
          <igds-icon
            node=${this.isLtr?c.chevronLeft:c.chevronRight}
          ></igds-icon>
        </span>
        ${g.when(this.isNumbered,()=>r.html`<span class="pagination__btn_text">חזור</span>`)}
      </a>
    `}renderNextLink(){return r.html`
      <a
        href=${this.nextHref}
        aria-label="Next"
        rel="next"
        title="Next page"
        class=${this.getNextLinkCssClasses()}
        tabindex=${this.isLastPage?"-1":""}
        @click="${e=>this.numberPageHandler(e,this.activePage+1,this.isLastPage)}"
      >
        ${g.when(this.isNumbered,()=>r.html`<span class="pagination__btn_text">הבא</span>`)}
        <span aria-hidden="true">
          <igds-icon
            node=${this.isLtr?c.chevronRight:c.chevronLeft}
          ></igds-icon>
        </span>
      </a>
    `}renderItem(e,s){return this.visiblePages.includes(e.pageNumber)?this.activePage===e.pageNumber?r.html`
          <li>
            <div
              aria-label=${`Page ${e.pageNumber}`}
              aria-current="page"
              class="${`${this.getPaginationCssClass(!0)} ${this.getPaginationCssClass(!0)}--active`}"
            >
              ${g.when(this.isNumbered,()=>e.pageNumber)}
            </div>
          </li>
        `:r.html`
        <li>
          <a
            href=${e.href}
            aria-label=${`Page ${e.pageNumber}`}
            class="${this.getPaginationCssClass(!0)}"
            @click="${n=>this.numberPageHandler(n,e.pageNumber)}"
          >
            ${g.when(this.isNumbered,()=>e.pageNumber)}
          </a>
        </li>
      `:this.isNumbered&&this.visiblePages.includes(this.paginationItems[s-1]?.pageNumber)?r.html`
        <li>
          <div
            aria-current="page"
            class="pagination__number pagination__number--dim"
          >
            ...
          </div>
        </li>
      `:null}render(){return r.html`
      <nav aria-label="Pagination" class="pagination">
        ${this.renderPreviousLink()}
        <ol class=${this.getPaginationCssClass()}>
          ${I.repeat(this.paginationItems,e=>e.pageNumber,(e,s)=>this.renderItem(e,s))}
        </ol>
        ${this.renderNextLink()}
        <slot></slot>
      </nav>
    `}};exports.Pagination.styles=x.unsafeCSS($);o([f.provide({context:P.paginationContext})],exports.Pagination.prototype,"context",2);o([d.property({type:String})],exports.Pagination.prototype,"variant",2);o([d.property({type:Number})],exports.Pagination.prototype,"current",2);o([p.state()],exports.Pagination.prototype,"paginationItems",2);o([p.state()],exports.Pagination.prototype,"activePage",2);o([p.state()],exports.Pagination.prototype,"visiblePages",2);exports.Pagination=o([_.customElement(C.IGDS_TAGS.pagination)],exports.Pagination);
