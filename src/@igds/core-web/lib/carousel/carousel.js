var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import { IGDSElement } from '../abstractions';
import { register } from 'swiper/element/bundle';
import { provide } from '@lit/context';
import { igdsCarouselContext, IgdsCarouselContext } from './context';
import { getDirection } from '../utils';
import { chevronLeft, chevronRight } from '@igds/icons';
import styles from './carousel.scss?inline';
let Carousel = class Carousel extends IGDSElement {
    constructor() {
        super(...arguments);
        this.context = new IgdsCarouselContext();
        this.title = '';
        this.subtitle = '';
        this.variant = 'inline';
        this.slidesPerView = 1;
        this.loop = false;
        this.autoplay = false;
        this.interval = 3000;
        this.autopause = false;
        this.items = [];
    }
    connectedCallback() {
        super.connectedCallback();
        this.context.subscribe(() => {
            this.items = [...this.context.carouselItems];
        });
        if (!customElements.get('swiper-container')) {
            register();
        }
    }
    firstUpdated() {
        if (this.swiperContainer &&
            this.prevButton &&
            this.nextButton &&
            this.paginationEl) {
            Object.assign(this.swiperContainer, {
                pagination: {
                    el: this.paginationEl,
                    clickable: true,
                },
                on: {
                    slideChange: () => this.emitSlideChange(),
                },
                autoplay: this.autoplay
                    ? {
                        delay: this.interval,
                        pauseOnMouseEnter: this.autopause,
                        disableOnInteraction: false,
                    }
                    : false,
                loop: this.loop,
                slidesPerView: 1,
                spaceBetween: 8,
                breakpoints: {
                    360: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                    },
                    768: {
                        slidesPerView: this.slidesPerView,
                        spaceBetween: 16,
                    },
                },
                breakpointsBase: 'window',
            });
            this.swiperContainer.initialize();
        }
    }
    emitSlideChange() {
        if (this.swiperContainer?.swiper) {
            const realIndex = this.swiperContainer.swiper.realIndex;
            this.emit(IGDS_EVENTS.slideChange, 'slide change', {
                activeIndex: realIndex,
            });
        }
    }
    handleNextClick() {
        this.swiperContainer?.swiper?.slideNext();
        this.emit(IGDS_EVENTS.next, 'next slide click');
    }
    handlePrevClick() {
        this.swiperContainer?.swiper?.slidePrev(300, false);
        this.emit(IGDS_EVENTS.prev, 'prev slide click');
    }
    getCarouselClasses() {
        return classMap({
            carousel: true,
            'carousel--edge': this.variant === 'edge',
        });
    }
    getNavBtnClasses(btnName) {
        return classMap({
            carousel__btn: true,
            'custom-next': btnName === 'next',
            'custom-prev': btnName === 'prev',
            'carousel__nav-button': this.variant === 'edge',
            'carousel__nav-button--prev': this.variant === 'edge' && btnName === 'prev',
            'carousel__nav-button--next': this.variant === 'edge' && btnName === 'next',
        });
    }
    getNavBtnIcon(btnName) {
        const dir = this.getParentDirection();
        if (this.variant === 'inline') {
            if (dir === 'rtl' && btnName === 'next') {
                return chevronLeft;
            }
            if (dir === 'rtl' && btnName === 'prev') {
                return chevronRight;
            }
            return btnName === 'next' ? chevronRight : chevronLeft;
        }
        return btnName === 'next' ? chevronLeft : chevronRight;
    }
    getParentDirection() {
        const parentWithDir = this.closest('[dir]');
        let dir = parentWithDir?.getAttribute('dir')?.toLowerCase();
        if (!dir) {
            dir = getDirection(this);
        }
        return dir;
    }
    render() {
        return html `
      <section class=${this.getCarouselClasses()}>
        <h2 class="carousel__title">${this.title}</h2>
        <p class="carousel__subtitle">${this.subtitle}</p>
        <swiper-container
          class="carousel__container"
          .init=${false}
          .pagination-clickable=${true}
          .keyboard=${true}
          .navigation=${true}
          .pagination=${true}
        >
          ${this.items.map((item) => {
            return html ` <swiper-slide>${item}</swiper-slide> `;
        })}
        </swiper-container>
        <div
          class="custom-nav"
          class=${classMap({
            'custom-nav': true,
            'custom-nav--with-arrows': this.variant === 'inline',
        })}
        >
          <igds-button
            variant="alternative"
            size="small"
            class=${this.getNavBtnClasses('prev')}
            @click=${this.handlePrevClick}
          >
            <igds-icon
              node=${this.getNavBtnIcon('prev')}
              class="nav-icon"
            ></igds-icon>
          </igds-button>
          <div class="custom-pagination"></div>
          <igds-button
            variant="alternative"
            size="small"
            class=${this.getNavBtnClasses('next')}
            @click=${this.handleNextClick}
          >
            <igds-icon
              node=${this.getNavBtnIcon('next')}
              class="nav-icon"
            ></igds-icon>
          </igds-button>
        </div>
      </section>
    `;
    }
};
Carousel.styles = unsafeCSS(styles);
__decorate([
    provide({ context: igdsCarouselContext })
], Carousel.prototype, "context", void 0);
__decorate([
    property({ type: String })
], Carousel.prototype, "title", void 0);
__decorate([
    property({ type: String })
], Carousel.prototype, "subtitle", void 0);
__decorate([
    property({ type: String })
], Carousel.prototype, "variant", void 0);
__decorate([
    property({ type: Number, attribute: 'slides-per-view' })
], Carousel.prototype, "slidesPerView", void 0);
__decorate([
    property({
        type: Boolean,
        converter: (value) => value !== null && value !== 'false',
    })
], Carousel.prototype, "loop", void 0);
__decorate([
    property({
        type: Boolean,
        converter: (value) => value && value !== 'false',
    })
], Carousel.prototype, "autoplay", void 0);
__decorate([
    property({ type: Number })
], Carousel.prototype, "interval", void 0);
__decorate([
    property({
        type: Boolean,
        converter: (value) => value && value !== 'false',
    })
], Carousel.prototype, "autopause", void 0);
__decorate([
    state()
], Carousel.prototype, "items", void 0);
__decorate([
    query('swiper-container')
], Carousel.prototype, "swiperContainer", void 0);
__decorate([
    query('.custom-prev')
], Carousel.prototype, "prevButton", void 0);
__decorate([
    query('.custom-next')
], Carousel.prototype, "nextButton", void 0);
__decorate([
    query('.custom-pagination')
], Carousel.prototype, "paginationEl", void 0);
Carousel = __decorate([
    customElement(IGDS_TAGS.carousel)
], Carousel);
export { Carousel };
