var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { provide } from '@lit/context';
import Sortable from 'sortablejs';
import { repeat } from 'lit/directives/repeat.js';
import { choose } from 'lit/directives/choose.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import { IGDS_LIST_VARIANTS } from './constants';
import { IGDSElement } from '../abstractions';
import styles from './list.scss?inline';
import { IgdsListContext, igdsListContext } from './list-context';
import '../icon';
import { ifDefined } from 'lit/directives/if-defined.js';
import { dragndropFilled } from '@igds/icons';
let List = class List extends IGDSElement {
    constructor() {
        super(...arguments);
        this.variant = IGDS_LIST_VARIANTS.unordered;
        this.context = new IgdsListContext();
        this.items = this.context.getItems();
        this.openedItemIds = [];
        this.dragging = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.context.onChange = () => {
            this.items = this.context.getItems();
        };
        this.listenKeyboardWhileDragging =
            this.listenKeyboardWhileDragging.bind(this);
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.context.setVariant(this.variant);
    }
    update(changedProperties) {
        super.update(changedProperties);
        if (this.droppable &&
            (changedProperties.get('items') !== undefined ||
                changedProperties.has('droppable'))) {
            this.initDragAndDrop();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('keyup', this.listenKeyboardWhileDragging);
        if (this._sortable) {
            this._sortable.destroy();
            this._sortable = undefined;
        }
    }
    initDragAndDrop() {
        if (!this.list) {
            return;
        }
        if (this._sortable) {
            this._sortable.destroy();
        }
        this._sortable = Sortable.create(this.list, {
            onStart: () => {
                this.emit(IGDS_EVENTS.dragStart, 'drag-started');
                this.setDragging(true);
            },
            onEnd: () => {
                this.emit(IGDS_EVENTS.dragEnd, 'drag-ended');
                this.setDragging(false);
            },
            sort: true,
            animation: 150,
            handle: '.list__dnd-button',
            fallbackClass: 'list__fallback-item',
        });
    }
    setDragging(isDragging) {
        if (this._sortable?.nativeDraggable) {
            return;
        }
        this.dragging = isDragging;
    }
    hasMoreContent(value) {
        return !(!value || (Array.isArray(value) && value.length === 0));
    }
    openItem(id) {
        this.openedItemIds = [...this.openedItemIds, id];
    }
    closeItem(id) {
        this.openedItemIds = this.openedItemIds.filter((itemId) => itemId !== id);
    }
    toggleItem(id) {
        if (this.openedItemIds.includes(id)) {
            this.closeItem(id);
        }
        else {
            this.openItem(id);
        }
    }
    handleDragButtonKeyPress(event) {
        if (this.keyboardDraggingElementId !== undefined ||
            !["Enter" /* IGDS_EVENT_KEYS.Enter */, " " /* IGDS_EVENT_KEYS.Space */].includes(event.key)) {
            return;
        }
        const id = event.target.getAttribute('data-id');
        this.startKeyboardDrag(id);
    }
    startKeyboardDrag(id) {
        this.keyboardDraggingElementId = id;
        document.addEventListener('keydown', this.listenKeyboardWhileDragging);
    }
    endKeyboardDrag() {
        this.keyboardDraggingElementId = undefined;
        document.removeEventListener('keydown', this.listenKeyboardWhileDragging);
    }
    processArrowsKeyDown(event, index) {
        if (event.key === "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */) {
            if (index === 0) {
                return;
            }
            [this.items[index - 1], this.items[index]] = [
                this.items[index],
                this.items[index - 1],
            ];
            this.items = [...this.items];
            return;
        }
        if (event.key === "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */) {
            if (index === this.items.length - 1) {
                return;
            }
            [this.items[index + 1], this.items[index]] = [
                this.items[index],
                this.items[index + 1],
            ];
            this.items = [...this.items];
        }
    }
    listenKeyboardWhileDragging(event) {
        event.preventDefault();
        if ([
            "Enter" /* IGDS_EVENT_KEYS.Enter */,
            " " /* IGDS_EVENT_KEYS.Space */,
            "Escape" /* IGDS_EVENT_KEYS.Escape */,
        ].includes(event.key)) {
            this.endKeyboardDrag();
            return;
        }
        if (this.keyboardDraggingElementId === undefined) {
            return;
        }
        const index = this.items.findIndex((item) => item.id === this.keyboardDraggingElementId);
        if (index === -1) {
            return;
        }
        this.processArrowsKeyDown(event, index);
    }
    getDragAndDropControl(id) {
        return html `
      <button
        class="list__dnd-button"
        @keypress=${this.handleDragButtonKeyPress}
        data-id=${id}
        aria-label="גרור כדי לסדר מחדש את הרשימה"
      >
        <igds-icon node=${dragndropFilled} fill class="list__dnd-icon"></igds-icon>
      </button>
    `;
    }
    renderDataList() {
        return html `
      <dl
        class="list list--data ${classMap({
            'list--dragging': this.dragging,
        })}"
      >
        ${repeat(this.items, (item) => item.id, ({ data, id }) => html `
            <dt class="list__header list__header--accessibility">
              ${data.header}
            </dt>
            <dd
              class=${classMap({
            'list__item-box': true,
            'list__item-box--draggable': data.draggable !== undefined && this.droppable
                ? data.draggable
                : Boolean(this.droppable),
            'list__item-box--dragging': this.keyboardDraggingElementId === id,
        })}
              data-id=${id}
              data-data=${data.draggable}
            >
              ${when(data.iconName && !data.imageSrc, () => html `
                  <section class="list__icon-box">
                    <igds-icon
                      node=${data.iconName}
                      class="list__icon"
                    ></igds-icon>
                  </section>
                `)}
              ${when(data.imageSrc, () => html `
                  <section class="list__image-box">
                    <img
                      src=${data.imageSrc}
                      alt=${ifDefined(data.imageAlt)}
                      class="list__image"
                    />
                  </section>
                `)}
              <section class="list__item-data">
                <div class="list__header">
                  ${data.header}
                  ${when(this.hasMoreContent(data.moreInfo), () => html `
                      <button
                        class="list__more-button"
                        type="button"
                        @click=${() => this.toggleItem(id)}
                      >
                        ${data.moreText ? data.moreText : 'מידע נוסף'}
                      </button>
                    `)}
                </div>
                ${when(data.subheader, () => html `
                    <div class="list__subheader">${data.subheader}</div>
                  `)}
                ${when(this.hasMoreContent(data.moreInfo), () => html `
                    <div class="list__more-info">
                      <igds-animate-height
                        ?expand=${this.openedItemIds.includes(id)}
                      >
                        ${data.moreInfo}
                      </igds-animate-height>
                    </div>
                  `)}
              </section>
              ${this.getDragAndDropControl(id)}
            </dd>
          `)}
      </dl>
    `;
    }
    renderOrderedList() {
        return html `
      <ol class="list list--ordered">
        ${repeat(this.items, (item) => item.id, ({ htmlContent, id }) => html `
            <li
              class=${classMap({
            'list__numeric-item': true,
            'list__numeric-item--draggable': Boolean(this.droppable),
            'list__numeric-item--dragging': this.keyboardDraggingElementId === id,
        })}
              data-id=${id}
            >
              <div class="list__content-box">
                <div class="list__text">
                  ${htmlContent} ${this.getDragAndDropControl(id)}
                </div>
              </div>
            </li>
          `)}
      </ol>
    `;
    }
    renderUnorderedList() {
        return html `
      <ul class="list list--unordered">
        ${repeat(this.items, (item) => item.id, ({ htmlContent, id }) => html `
            <li
              class=${classMap({
            list__item: true,
            'list__item--draggable': Boolean(this.droppable),
            'list__item--dragging': this.keyboardDraggingElementId === id,
        })}
              data-id=${id}
            >
              <span class="list__bullet"></span>
              <div class="list__text">
                ${htmlContent} ${this.getDragAndDropControl(id)}
              </div>
            </li>
          `)}
      </ul>
    `;
    }
    render() {
        return html `
      ${choose(this.variant, [
            [IGDS_LIST_VARIANTS.data, () => this.renderDataList()],
            [IGDS_LIST_VARIANTS.ordered, () => this.renderOrderedList()],
        ], () => this.renderUnorderedList())}
    `;
    }
};
List.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], List.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean })
], List.prototype, "droppable", void 0);
__decorate([
    provide({ context: igdsListContext })
], List.prototype, "context", void 0);
__decorate([
    state()
], List.prototype, "items", void 0);
__decorate([
    state()
], List.prototype, "openedItemIds", void 0);
__decorate([
    state()
], List.prototype, "keyboardDraggingElementId", void 0);
__decorate([
    state()
], List.prototype, "dragging", void 0);
__decorate([
    query('.list')
], List.prototype, "list", void 0);
List = __decorate([
    customElement(IGDS_TAGS.list)
], List);
export { List };
