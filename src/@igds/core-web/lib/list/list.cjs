"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const s=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const D=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),p=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),d=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),I=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),y=require("../node_modules/.pnpm/@lit_context@1.1.6/node_modules/@lit/context/lib/decorators/provide.cjs"),E=require("../node_modules/.pnpm/sortablejs@1.15.6/node_modules/sortablejs/modular/sortable.esm.cjs"),m=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),S=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/choose.cjs"),a=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),_=require("../constants/events.cjs"),n=require("../constants/event-keys.cjs"),f=require("../constants/tags.cjs"),u=require("./constants.cjs"),$=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const v=require("./list.scss.cjs"),b=require("./list-context.cjs");require("../icon/icon.cjs");const q=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),L=require("@igds/icons"),K=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var A=Object.defineProperty,T=Object.getOwnPropertyDescriptor,i=(g,e,t,o)=>{for(var r=o>1?void 0:o?T(e,t):e,h=g.length-1,c;h>=0;h--)(c=g[h])&&(r=(o?c(e,t,r):c(r))||r);return o&&r&&A(e,t,r),r};exports.List=class extends $.IGDSElement{constructor(){super(...arguments),this.variant=u.IGDS_LIST_VARIANTS.unordered,this.context=new b.IgdsListContext,this.items=this.context.getItems(),this.openedItemIds=[],this.dragging=!1}connectedCallback(){super.connectedCallback(),this.context.onChange=()=>{this.items=this.context.getItems()},this.listenKeyboardWhileDragging=this.listenKeyboardWhileDragging.bind(this)}firstUpdated(e){super.firstUpdated(e),this.context.setVariant(this.variant)}update(e){super.update(e),this.droppable&&(e.get("items")!==void 0||e.has("droppable"))&&this.initDragAndDrop()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keyup",this.listenKeyboardWhileDragging),this._sortable&&(this._sortable.destroy(),this._sortable=void 0)}initDragAndDrop(){this.list&&(this._sortable&&this._sortable.destroy(),this._sortable=E.Sortable.create(this.list,{onStart:()=>{this.emit(_.IGDS_EVENTS.dragStart,"drag-started"),this.setDragging(!0)},onEnd:()=>{this.emit(_.IGDS_EVENTS.dragEnd,"drag-ended"),this.setDragging(!1)},sort:!0,animation:150,handle:".list__dnd-button",fallbackClass:"list__fallback-item"}))}setDragging(e){this._sortable?.nativeDraggable||(this.dragging=e)}hasMoreContent(e){return!(!e||Array.isArray(e)&&e.length===0)}openItem(e){this.openedItemIds=[...this.openedItemIds,e]}closeItem(e){this.openedItemIds=this.openedItemIds.filter(t=>t!==e)}toggleItem(e){this.openedItemIds.includes(e)?this.closeItem(e):this.openItem(e)}handleDragButtonKeyPress(e){if(this.keyboardDraggingElementId!==void 0||![n.IGDS_EVENT_KEYS.Enter,n.IGDS_EVENT_KEYS.Space].includes(e.key))return;const t=e.target.getAttribute("data-id");this.startKeyboardDrag(t)}startKeyboardDrag(e){this.keyboardDraggingElementId=e,document.addEventListener("keydown",this.listenKeyboardWhileDragging)}endKeyboardDrag(){this.keyboardDraggingElementId=void 0,document.removeEventListener("keydown",this.listenKeyboardWhileDragging)}processArrowsKeyDown(e,t){if(e.key===n.IGDS_EVENT_KEYS.ArrowUp){if(t===0)return;[this.items[t-1],this.items[t]]=[this.items[t],this.items[t-1]],this.items=[...this.items];return}if(e.key===n.IGDS_EVENT_KEYS.ArrowDown){if(t===this.items.length-1)return;[this.items[t+1],this.items[t]]=[this.items[t],this.items[t+1]],this.items=[...this.items]}}listenKeyboardWhileDragging(e){if(e.preventDefault(),[n.IGDS_EVENT_KEYS.Enter,n.IGDS_EVENT_KEYS.Space,n.IGDS_EVENT_KEYS.Escape].includes(e.key)){this.endKeyboardDrag();return}if(this.keyboardDraggingElementId===void 0)return;const t=this.items.findIndex(o=>o.id===this.keyboardDraggingElementId);t!==-1&&this.processArrowsKeyDown(e,t)}getDragAndDropControl(e){return s.html`
      <button
        class="list__dnd-button"
        @keypress=${this.handleDragButtonKeyPress}
        data-id=${e}
        aria-label="גרור כדי לסדר מחדש את הרשימה"
      >
        <igds-icon node=${L.dragndropFilled} fill class="list__dnd-icon"></igds-icon>
      </button>
    `}renderDataList(){return s.html`
      <dl
        class="list list--data ${l.classMap({"list--dragging":this.dragging})}"
      >
        ${m.repeat(this.items,e=>e.id,({data:e,id:t})=>s.html`
            <dt class="list__header list__header--accessibility">
              ${e.header}
            </dt>
            <dd
              class=${l.classMap({"list__item-box":!0,"list__item-box--draggable":e.draggable!==void 0&&this.droppable?e.draggable:!!this.droppable,"list__item-box--dragging":this.keyboardDraggingElementId===t})}
              data-id=${t}
              data-data=${e.draggable}
            >
              ${a.when(e.iconName&&!e.imageSrc,()=>s.html`
                  <section class="list__icon-box">
                    <igds-icon
                      node=${e.iconName}
                      class="list__icon"
                    ></igds-icon>
                  </section>
                `)}
              ${a.when(e.imageSrc,()=>s.html`
                  <section class="list__image-box">
                    <img
                      src=${e.imageSrc}
                      alt=${q.ifDefined(e.imageAlt)}
                      class="list__image"
                    />
                  </section>
                `)}
              <section class="list__item-data">
                <div class="list__header">
                  ${e.header}
                  ${a.when(this.hasMoreContent(e.moreInfo),()=>s.html`
                      <button
                        class="list__more-button"
                        type="button"
                        @click=${()=>this.toggleItem(t)}
                      >
                        ${e.moreText?e.moreText:"מידע נוסף"}
                      </button>
                    `)}
                </div>
                ${a.when(e.subheader,()=>s.html`
                    <div class="list__subheader">${e.subheader}</div>
                  `)}
                ${a.when(this.hasMoreContent(e.moreInfo),()=>s.html`
                    <div class="list__more-info">
                      <igds-animate-height
                        ?expand=${this.openedItemIds.includes(t)}
                      >
                        ${e.moreInfo}
                      </igds-animate-height>
                    </div>
                  `)}
              </section>
              ${this.getDragAndDropControl(t)}
            </dd>
          `)}
      </dl>
    `}renderOrderedList(){return s.html`
      <ol class="list list--ordered">
        ${m.repeat(this.items,e=>e.id,({htmlContent:e,id:t})=>s.html`
            <li
              class=${l.classMap({"list__numeric-item":!0,"list__numeric-item--draggable":!!this.droppable,"list__numeric-item--dragging":this.keyboardDraggingElementId===t})}
              data-id=${t}
            >
              <div class="list__content-box">
                <div class="list__text">
                  ${e} ${this.getDragAndDropControl(t)}
                </div>
              </div>
            </li>
          `)}
      </ol>
    `}renderUnorderedList(){return s.html`
      <ul class="list list--unordered">
        ${m.repeat(this.items,e=>e.id,({htmlContent:e,id:t})=>s.html`
            <li
              class=${l.classMap({list__item:!0,"list__item--draggable":!!this.droppable,"list__item--dragging":this.keyboardDraggingElementId===t})}
              data-id=${t}
            >
              <span class="list__bullet"></span>
              <div class="list__text">
                ${e} ${this.getDragAndDropControl(t)}
              </div>
            </li>
          `)}
      </ul>
    `}render(){return s.html`
      ${S.choose(this.variant,[[u.IGDS_LIST_VARIANTS.data,()=>this.renderDataList()],[u.IGDS_LIST_VARIANTS.ordered,()=>this.renderOrderedList()]],()=>this.renderUnorderedList())}
    `}};exports.List.styles=K.unsafeCSS(v);i([p.property({type:String})],exports.List.prototype,"variant",2);i([p.property({type:Boolean})],exports.List.prototype,"droppable",2);i([y.provide({context:b.igdsListContext})],exports.List.prototype,"context",2);i([d.state()],exports.List.prototype,"items",2);i([d.state()],exports.List.prototype,"openedItemIds",2);i([d.state()],exports.List.prototype,"keyboardDraggingElementId",2);i([d.state()],exports.List.prototype,"dragging",2);i([I.query(".list")],exports.List.prototype,"list",2);exports.List=i([D.customElement(f.IGDS_TAGS.list)],exports.List);
