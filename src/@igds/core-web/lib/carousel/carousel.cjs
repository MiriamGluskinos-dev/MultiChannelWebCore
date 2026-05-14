"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const v=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const g=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),i=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),C=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),l=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),h=require("../constants/events.cjs"),y=require("../constants/tags.cjs"),w=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const m=require("../node_modules/.pnpm/swiper@12.1.2/node_modules/swiper/swiper-element-bundle.cjs"),x=require("../node_modules/.pnpm/@lit_context@1.1.6/node_modules/@lit/context/lib/decorators/provide.cjs"),d=require("./context.cjs"),f=require("../utils/common.cjs"),o=require("@igds/icons"),b=require("./carousel.scss.cjs"),q=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var _=Object.defineProperty,B=Object.getOwnPropertyDescriptor,t=(s,e,r,a)=>{for(var n=a>1?void 0:a?B(e,r):e,c=s.length-1,p;c>=0;c--)(p=s[c])&&(n=(a?p(e,r,n):p(n))||n);return a&&n&&_(e,r,n),n};exports.Carousel=class extends w.IGDSElement{constructor(){super(...arguments),this.context=new d.IgdsCarouselContext,this.title="",this.subtitle="",this.variant="inline",this.slidesPerView=1,this.loop=!1,this.autoplay=!1,this.interval=3e3,this.autopause=!1,this.items=[]}connectedCallback(){super.connectedCallback(),this.context.subscribe(()=>{this.items=[...this.context.carouselItems]}),customElements.get("swiper-container")||m.register()}firstUpdated(){this.swiperContainer&&this.prevButton&&this.nextButton&&this.paginationEl&&(Object.assign(this.swiperContainer,{pagination:{el:this.paginationEl,clickable:!0},on:{slideChange:()=>this.emitSlideChange()},autoplay:this.autoplay?{delay:this.interval,pauseOnMouseEnter:this.autopause,disableOnInteraction:!1}:!1,loop:this.loop,slidesPerView:1,spaceBetween:8,breakpoints:{360:{slidesPerView:2,spaceBetween:8},768:{slidesPerView:this.slidesPerView,spaceBetween:16}},breakpointsBase:"window"}),this.swiperContainer.initialize())}emitSlideChange(){if(this.swiperContainer?.swiper){const e=this.swiperContainer.swiper.realIndex;this.emit(h.IGDS_EVENTS.slideChange,"slide change",{activeIndex:e})}}handleNextClick(){this.swiperContainer?.swiper?.slideNext(),this.emit(h.IGDS_EVENTS.next,"next slide click")}handlePrevClick(){this.swiperContainer?.swiper?.slidePrev(300,!1),this.emit(h.IGDS_EVENTS.prev,"prev slide click")}getCarouselClasses(){return u.classMap({carousel:!0,"carousel--edge":this.variant==="edge"})}getNavBtnClasses(e){return u.classMap({carousel__btn:!0,"custom-next":e==="next","custom-prev":e==="prev","carousel__nav-button":this.variant==="edge","carousel__nav-button--prev":this.variant==="edge"&&e==="prev","carousel__nav-button--next":this.variant==="edge"&&e==="next"})}getNavBtnIcon(e){const r=this.getParentDirection();return this.variant==="inline"?r==="rtl"&&e==="next"?o.chevronLeft:r==="rtl"&&e==="prev"||e==="next"?o.chevronRight:o.chevronLeft:e==="next"?o.chevronLeft:o.chevronRight}getParentDirection(){let r=this.closest("[dir]")?.getAttribute("dir")?.toLowerCase();return r||(r=f.getDirection(this)),r}render(){return v.html`
      <section class=${this.getCarouselClasses()}>
        <h2 class="carousel__title">${this.title}</h2>
        <p class="carousel__subtitle">${this.subtitle}</p>
        <swiper-container
          class="carousel__container"
          .init=${!1}
          .pagination-clickable=${!0}
          .keyboard=${!0}
          .navigation=${!0}
          .pagination=${!0}
        >
          ${this.items.map(e=>v.html` <swiper-slide>${e}</swiper-slide> `)}
        </swiper-container>
        <div
          class="custom-nav"
          class=${u.classMap({"custom-nav":!0,"custom-nav--with-arrows":this.variant==="inline"})}
        >
          <igds-button
            variant="alternative"
            size="small"
            class=${this.getNavBtnClasses("prev")}
            @click=${this.handlePrevClick}
          >
            <igds-icon
              node=${this.getNavBtnIcon("prev")}
              class="nav-icon"
            ></igds-icon>
          </igds-button>
          <div class="custom-pagination"></div>
          <igds-button
            variant="alternative"
            size="small"
            class=${this.getNavBtnClasses("next")}
            @click=${this.handleNextClick}
          >
            <igds-icon
              node=${this.getNavBtnIcon("next")}
              class="nav-icon"
            ></igds-icon>
          </igds-button>
        </div>
      </section>
    `}};exports.Carousel.styles=q.unsafeCSS(b);t([x.provide({context:d.igdsCarouselContext})],exports.Carousel.prototype,"context",2);t([i.property({type:String})],exports.Carousel.prototype,"title",2);t([i.property({type:String})],exports.Carousel.prototype,"subtitle",2);t([i.property({type:String})],exports.Carousel.prototype,"variant",2);t([i.property({type:Number,attribute:"slides-per-view"})],exports.Carousel.prototype,"slidesPerView",2);t([i.property({type:Boolean,converter:s=>s!==null&&s!=="false"})],exports.Carousel.prototype,"loop",2);t([i.property({type:Boolean,converter:s=>s&&s!=="false"})],exports.Carousel.prototype,"autoplay",2);t([i.property({type:Number})],exports.Carousel.prototype,"interval",2);t([i.property({type:Boolean,converter:s=>s&&s!=="false"})],exports.Carousel.prototype,"autopause",2);t([C.state()],exports.Carousel.prototype,"items",2);t([l.query("swiper-container")],exports.Carousel.prototype,"swiperContainer",2);t([l.query(".custom-prev")],exports.Carousel.prototype,"prevButton",2);t([l.query(".custom-next")],exports.Carousel.prototype,"nextButton",2);t([l.query(".custom-pagination")],exports.Carousel.prototype,"paginationEl",2);exports.Carousel=t([g.customElement(y.IGDS_TAGS.carousel)],exports.Carousel);
