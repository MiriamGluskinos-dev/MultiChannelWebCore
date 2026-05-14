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
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { paginationContext, PaginationContext } from './context';
import { IGDS_PAGINATION_VARIANT, LARGE_MOBILE_WIDTH } from './constants';
import { chevronLeft, chevronRight } from '@igds/icons';
import styles from './pagination.scss?inline';
import '../icon';
let Pagination = class Pagination extends IGDSElement {
    constructor() {
        super();
        this.context = new PaginationContext();
        this.variant = IGDS_PAGINATION_VARIANT.numbered;
        this.current = 1;
        this.paginationItems = this.context.paginationItems;
        this.activePage = this.current;
        this.visiblePages = [];
        this.componentWidth = 0;
        this.numberPageHandler = this.numberPageHandler.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.activePage = this.current;
        this.context.onChangePagination = () => {
            this.paginationItems = this.context.paginationItems;
        };
        requestAnimationFrame(() => this.updateVisiblePages());
        this.resizeObserver = new ResizeObserver(() => {
            this.updateVisiblePages();
        });
        this.resizeObserver.observe(this);
    }
    update(changedProperties) {
        super.update(changedProperties);
        this.context.onChangePagination = () => {
            this.paginationItems = this.context.paginationItems;
        };
    }
    willUpdate(changedProperties) {
        if (changedProperties.has('current')) {
            this.activePage = this.current;
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver?.disconnect();
    }
    updateVisiblePages() {
        requestAnimationFrame(() => {
            if (!this.offsetParent)
                return;
            const rect = this.getBoundingClientRect();
            this.componentWidth = rect.width || this.clientWidth;
            if (this.componentWidth === 0)
                return;
            const isDesktop = window.innerWidth > LARGE_MOBILE_WIDTH;
            const visiblePagesForDesktop = 7;
            const visiblePagesForMobile = 4;
            const numberVisiblePages = isDesktop
                ? visiblePagesForDesktop
                : visiblePagesForMobile;
            const totalPages = this.paginationItems.length;
            const selectedPage = this.activePage;
            if (totalPages <= numberVisiblePages ||
                this.variant === IGDS_PAGINATION_VARIANT.unnumbered) {
                this.visiblePages = this.paginationItems.map((p) => p.pageNumber);
                return;
            }
            this.visiblePages = this.getPagination(totalPages, selectedPage, numberVisiblePages);
        });
    }
    getPagination(totalPages, selectedPage, visiblePages) {
        if (totalPages <= visiblePages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        let pagination;
        if (selectedPage < visiblePages - 2) {
            pagination = [
                ...Array.from({ length: visiblePages - 2 }, (_, i) => i + 1),
                '...',
                totalPages,
            ];
        }
        else if (selectedPage >= totalPages - visiblePages + 4) {
            pagination = [
                1,
                '...',
                ...Array.from({ length: visiblePages - 2 }, (_, i) => i + totalPages - visiblePages + 3),
            ];
        }
        else {
            const avg = visiblePages - 5;
            const avgArr = [selectedPage];
            for (let i = 0; i < avg; i++) {
                if (i % 2 === 0) {
                    avgArr.unshift(avgArr[0] - 1);
                }
                else {
                    avgArr.push(avgArr[avgArr.length - 1] + 1);
                }
            }
            pagination = [1, '...', ...avgArr, '...', totalPages];
        }
        return pagination;
    }
    numberPageHandler(event, pageNum, disabled) {
        event.preventDefault();
        if (!disabled) {
            this.emit(IGDS_EVENTS.click);
            this.emit(IGDS_EVENTS.change, `${pageNum}`);
            this.activePage = pageNum;
            this.updateVisiblePages();
        }
    }
    get isLtr() {
        return getComputedStyle(this).direction === 'ltr';
    }
    get isNumbered() {
        return this.variant === IGDS_PAGINATION_VARIANT.numbered;
    }
    get isFirstPage() {
        return this.activePage === 1;
    }
    get isLastPage() {
        return this.activePage === this.paginationItems.length;
    }
    get prevHref() {
        return !this.isFirstPage &&
            this.paginationItems?.[this.activePage - 2]?.href
            ? this.paginationItems[this.activePage - 2].href
            : '#';
    }
    get nextHref() {
        return !this.isLastPage && this.paginationItems?.[this.activePage]?.href
            ? this.paginationItems[this.activePage].href
            : '#';
    }
    getPrevLinkCssClasses() {
        return classMap({
            pagination__btn: true,
            'pagination__btn-disabled': this.isFirstPage,
            'pagination__btn-unnumbered': !this.isNumbered,
        });
    }
    getNextLinkCssClasses() {
        return classMap({
            pagination__btn: true,
            'pagination__btn-disabled': this.isLastPage,
            'pagination__btn-unnumbered': !this.isNumbered,
        });
    }
    getPaginationCssClass(isItem = false) {
        const { numberClass, indicatorClass } = isItem
            ? {
                numberClass: 'pagination__number',
                indicatorClass: 'pagination__indicator',
            }
            : {
                numberClass: 'pagination__numbers',
                indicatorClass: 'pagination__indicators',
            };
        return this.isNumbered ? numberClass : indicatorClass;
    }
    renderPreviousLink() {
        return html `
      <a
        href=${this.prevHref}
        aria-label="Previous"
        rel="prev"
        title="Previous page"
        class=${this.getPrevLinkCssClasses()}
        tabindex=${this.isFirstPage ? '-1' : ''}
        @click="${(event) => this.numberPageHandler(event, this.activePage - 1, this.isFirstPage)}"
      >
        <span aria-hidden="true">
          <igds-icon
            node=${this.isLtr ? chevronLeft : chevronRight}
          ></igds-icon>
        </span>
        ${when(this.isNumbered, () => html `<span class="pagination__btn_text">חזור</span>`)}
      </a>
    `;
    }
    renderNextLink() {
        return html `
      <a
        href=${this.nextHref}
        aria-label="Next"
        rel="next"
        title="Next page"
        class=${this.getNextLinkCssClasses()}
        tabindex=${this.isLastPage ? '-1' : ''}
        @click="${(event) => this.numberPageHandler(event, this.activePage + 1, this.isLastPage)}"
      >
        ${when(this.isNumbered, () => html `<span class="pagination__btn_text">הבא</span>`)}
        <span aria-hidden="true">
          <igds-icon
            node=${this.isLtr ? chevronRight : chevronLeft}
          ></igds-icon>
        </span>
      </a>
    `;
    }
    renderItem(paginationData, index) {
        const isItemVisible = this.visiblePages.includes(paginationData.pageNumber);
        if (isItemVisible) {
            if (this.activePage === paginationData.pageNumber) {
                return html `
          <li>
            <div
              aria-label=${`Page ${paginationData.pageNumber}`}
              aria-current="page"
              class="${`${this.getPaginationCssClass(true)} ${this.getPaginationCssClass(true)}--active`}"
            >
              ${when(this.isNumbered, () => paginationData.pageNumber)}
            </div>
          </li>
        `;
            }
            return html `
        <li>
          <a
            href=${paginationData.href}
            aria-label=${`Page ${paginationData.pageNumber}`}
            class="${this.getPaginationCssClass(true)}"
            @click="${(event) => this.numberPageHandler(event, paginationData.pageNumber)}"
          >
            ${when(this.isNumbered, () => paginationData.pageNumber)}
          </a>
        </li>
      `;
        }
        if (this.isNumbered &&
            this.visiblePages.includes(this.paginationItems[index - 1]?.pageNumber)) {
            return html `
        <li>
          <div
            aria-current="page"
            class="pagination__number pagination__number--dim"
          >
            ...
          </div>
        </li>
      `;
        }
        return null;
    }
    render() {
        return html `
      <nav aria-label="Pagination" class="pagination">
        ${this.renderPreviousLink()}
        <ol class=${this.getPaginationCssClass()}>
          ${repeat(this.paginationItems, (paginationData) => paginationData.pageNumber, (paginationData, index) => this.renderItem(paginationData, index))}
        </ol>
        ${this.renderNextLink()}
        <slot></slot>
      </nav>
    `;
    }
};
Pagination.styles = unsafeCSS(styles);
__decorate([
    provide({ context: paginationContext })
], Pagination.prototype, "context", void 0);
__decorate([
    property({ type: String })
], Pagination.prototype, "variant", void 0);
__decorate([
    property({ type: Number })
], Pagination.prototype, "current", void 0);
__decorate([
    state()
], Pagination.prototype, "paginationItems", void 0);
__decorate([
    state()
], Pagination.prototype, "activePage", void 0);
__decorate([
    state()
], Pagination.prototype, "visiblePages", void 0);
Pagination = __decorate([
    customElement(IGDS_TAGS.pagination)
], Pagination);
export { Pagination };
