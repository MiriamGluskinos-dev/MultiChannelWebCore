"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const i=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const R=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),_=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),C=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),k=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),f=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.cjs"),A=require("../node_modules/.pnpm/@lit_context@1.1.6/node_modules/@lit/context/lib/decorators/provide.cjs"),b=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),o=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),q=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/choose.cjs"),S=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/style-map.cjs"),u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),T=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),V=require("../node_modules/.pnpm/sortablejs@1.15.6/node_modules/sortablejs/modular/sortable.esm.cjs"),y=require("../constants/common.cjs"),h=require("../constants/events.cjs"),n=require("../constants/event-keys.cjs"),x=require("../constants/tags.cjs"),I=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const G=require("./table.scss.cjs"),$=require("./context.cjs"),p=require("./utils/isTextCell.cjs"),g=require("./utils/isLinkCell.cjs"),m=require("./utils/isBadgeCell.cjs"),v=require("../utils/common.cjs"),c=require("@igds/icons");require("../checkbox/checkbox.cjs");require("../badge/badge.cjs");require("../icon/icon.cjs");require("../animate-height/animate-height.cjs");require("../menu/menu.cjs");require("../menu/menu-item.cjs");require("../tooltip/tooltip.cjs");require("../input/input.cjs");const N=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var O=Object.defineProperty,K=Object.getOwnPropertyDescriptor,d=(E,e,t,l)=>{for(var s=l>1?void 0:l?K(e,t):e,r=E.length-1,a;r>=0;r--)(a=E[r])&&(s=(l?a(e,t,s):a(s))||s);return l&&s&&O(e,t,s),s};exports.Table=class extends I.IGDSElement{constructor(){super(),this._hasExpandableRow=!1,this._newCellValue="",this._maxTableSize=0,this._slottedCellObservers=[],this.context=new $.IgdsTableContext,this.header=[],this.rows=[],this.selectedRows=[],this._expandedRowIds=[],this.resizeHandler=v.throttle(()=>{this.checkTruncated()},y.DELAY_BEFORE_CHECKING_TRUNCATED),this.resizeHandler=this.resizeHandler.bind(this)}connectedCallback(){super.connectedCallback(),this.context.onChangeHeader=()=>{this.header=this.context.getHeader(),this._maxTableSize=Math.max(this.header.length,...this.rows.map(e=>e.cells.length))},this.context.onChangeRows=()=>{this.rows=this.context.getRows(),this._maxTableSize=Math.max(this.header.length,...this.rows.map(e=>e.cells.length)),this._hasExpandableRow=this.rows.some(e=>e.slot!==void 0&&e.expandable),this.selectable&&(this.selectedRows=this.rows.reduce((e,t)=>t.selected?[...e,t.id]:[...e],[])),this._expandedRowIds=this.rows.reduce((e,t)=>t.expanded?[...e,t.id]:[...e],[])}}disconnectedCallback(){super.disconnectedCallback(),this._sortable&&(this._sortable.destroy(),this._sortable=void 0),window.removeEventListener("resize",this.resizeHandler),this.disconnectSlottedCellObservers()}disconnectSlottedCellObservers(){this._slottedCellObservers.forEach(e=>e.disconnect()),this._slottedCellObservers=[]}update(e){super.update(e),this.processDroppablePropertyUpdate(e),this.processTruncatedPropertyUpdate(e)}updated(e){super.updated(e),!(!e.has("header")&&!e.has("rows")||e.get("rows")===void 0)&&this.processSlottedElements()}processSlottedElements(){(async()=>(await this.updateComplete,this.boxes.forEach(e=>{const t=e.getAttribute("data-clone-id");if(!t)return;const l=this.rows.find(s=>s.id===t);!l||!l.slot||l.slot.forEach(s=>{s.tagName&&s.tagName.toLowerCase()===x.IGDS_TAGS.table&&s.shadowRoot?s.shadowRoot.childNodes.forEach(r=>{e.append(r)}):e.append(s)})}),this.processSlottedCells()))()}processSlottedCells(){this.cells.forEach(e=>this.moveSlottedContent(e)),this.disconnectSlottedCellObservers(),this.cells.forEach(e=>this.setupSlottedCellObserver(e))}moveSlottedContent(e){const{row:t,slottedCell:l}=this.getSlottedCellData(e);if(t){if(!l&&e.children.length>0)for(;e.firstChild;)e.removeChild(e.firstChild);else if(l&&e.children.length>0)for(;e.firstChild;)l.appendChild(e.firstChild)}}setupSlottedCellObserver(e){const{row:t,slottedCell:l}=this.getSlottedCellData(e);if(!t||!l)return;const s=()=>{for(;e.firstChild;)e.removeChild(e.firstChild);l.children.length>0&&Array.from(l.children).forEach(a=>{e.appendChild(a)})};s();const r=new MutationObserver(()=>{r.disconnect(),s(),r.observe(l,{childList:!0,subtree:!1})});r.observe(l,{childList:!0,subtree:!1}),this._slottedCellObservers.push(r)}getSlottedCellData(e){const t=e.getAttribute("data-row-id"),l=parseInt(e.getAttribute("data-slotted-index")??"-1",10);if(!t||l<0)return{row:null,slottedCell:null};const s=this.rows.find(a=>a.id===t);if(!s)return{row:null,slottedCell:null};const r=s.slottedCells?.[l]??null;return{row:s,slottedCell:r}}processDroppablePropertyUpdate(e){this.droppable&&(e.get("rows")!==void 0||e.has("droppable"))&&this.initDragAndDrop()}processTruncatedPropertyUpdate(e){this.truncated&&this.cellText&&this.cellText.length>0&&(e.get("rows")!==void 0||e.has("truncated"))&&(setTimeout(()=>{this.checkTruncated()},y.DELAY_BEFORE_CHECKING_TRUNCATED),window.addEventListener("resize",this.resizeHandler)),e.has("truncated")&&!this.truncated&&window.removeEventListener("resize",this.resizeHandler)}initDragAndDrop(){!this.tbody||!this.rows||this.rows.length===0||!this.header||this.header.length===0||(this._sortable&&this._sortable.destroy(),this._sortable=V.Sortable.create(this.tbody,{onStart:()=>{this.emit(h.IGDS_EVENTS.dragStart,"drag-started")},onEnd:e=>{const t=e.oldIndex,l=e.newIndex;this.emit(h.IGDS_EVENTS.dragEnd,"drag-ended",{oldRowIndex:t,newRowIndex:l}),this.resetSortingOrder(),!(l===void 0||t===void 0)&&(this.rows.splice(l,0,{...this.rows.splice(t,1)[0]}),this.context.updateAllRows(this.rows))},handle:".table__dnd-button",animation:150,fallbackClass:"table__fallback-item"}))}checkTruncated(){!this.cellText||this.cellText.length===0||this.cellText.forEach(e=>{const t=e.querySelector(".table__cell-text");t.scrollWidth>t.clientWidth?e.removeAttribute("disabled"):e.setAttribute("disabled","true")})}handleSelect(e,t){e.detail.checked?this.selectedRows=[...this.selectedRows,t]:this.selectedRows=this.selectedRows.filter(l=>l!==t),this.emit(h.IGDS_EVENTS.rowSelect,this.selectedRows)}handleSelectAll(){if(this.selectedRows.length>0){this.selectedRows=[];return}this.selectedRows=this.rows.map(({id:e})=>e)}handleExpandAll(){if(this._expandedRowIds.length>0){this._expandedRowIds=[];return}this._expandedRowIds=this.rows.map(({id:e})=>e)}toggleRowSlot(e){this._expandedRowIds.includes(e)?this._expandedRowIds=this._expandedRowIds.filter(t=>t!==e):this._expandedRowIds=[...this._expandedRowIds,e]}handleAction(e,t,l){this.emit(h.IGDS_EVENTS.callAction,{rowId:t,rowIndex:l,action:e})}resetSortingOrder(){this.context.setHeader(this.header.map(e=>({...e,sortingOrder:void 0,sortable:!1})))}changeSortingOrder(e,t){if(e>=this._maxTableSize){console.warn(`Sorting order error. Column index is out of bounds.
        Table has ${this._maxTableSize} columns, try working with ${e} column index`);return}const s=(this.header[e].sortingOrder==="asc"?-1:1)*(t?.reorder?-1:1);this.context.updateAllRows(this.rows.sort((r,a)=>p.isTextCell(r.cells[e])&&p.isTextCell(a.cells[e])?r.cells[e].value.localeCompare(a.cells[e].value,void 0,{numeric:!0})*s:m.isBadgeCell(r.cells[e])&&m.isBadgeCell(a.cells[e])||g.isLinkCell(r.cells[e])&&g.isLinkCell(a.cells[e])?r.cells[e].label.localeCompare(a.cells[e].label,void 0,{numeric:!0})*s:0)),this.context.setHeader(this.header.map((r,a)=>a===e?{...r,sortingOrder:s>0?"asc":"desc"}:{...r,sortingOrder:void 0})),this.emit(h.IGDS_EVENTS.sortingOrderChange,{[e]:s>0?"asc":"desc"})}editCell(){if(!this.editable||!this._focusedCell)return;const e=this.getCellValue(this._focusedCell.row,this._focusedCell.cell);e!==void 0&&(this.editableCell={row:this._focusedCell.row,cell:this._focusedCell.cell},this._newCellValue=e,this.focusCellByAddress(this._focusedCell.row,this._focusedCell.cell,!0))}cancelEditCell(){!this.editable||!this._focusedCell||(this.editableCell=void 0,this.focusCellByAddress(this._focusedCell.row,this._focusedCell.cell))}handleEditCellInput(e){this._newCellValue=e.detail.value}saveCellValue(){if(!this._focusedCell)return;const e=this._focusedCell.row,t=this._focusedCell.cell;this.getCellValue(e,t)!==this._newCellValue&&(this.context.updateAllRows(this.rows.map((s,r)=>r!==e?s:{...s,cells:s.cells.map((a,w)=>w!==t||!p.isTextCell(a)?a:{...a,value:this._newCellValue})})),this.emit(h.IGDS_EVENTS.cellChange,{rowIndex:e,cellIndex:t,newValue:this._newCellValue}),this.header[t].sortingOrder&&this.changeSortingOrder(t,{reorder:!0})),this.cancelEditCell()}getCellValue(e,t){if(e>=0&&e<this.rows.length&&t>=0&&t<this.rows[e].cells.length){const l=this.rows[e].cells[t];return p.isTextCell(l)?l.value:void 0}}setFocusedCell(e,t){this._focusedCell={row:e,cell:t}}handleCellClick(e,t){this.editable&&this._clickedCell&&this._clickedCell.row===e&&this._clickedCell.cell===t&&this.editCell(),this._clickedCell={row:e,cell:t},this.emit(h.IGDS_EVENTS.cellClick,{rowIndex:e,cellIndex:t})}handleInputKeydown(e){e.key!==n.IGDS_EVENT_KEYS.Escape&&(e.key===n.IGDS_EVENT_KEYS.Enter&&(e.ctrlKey||e.shiftKey)&&this.saveCellValue(),e.stopPropagation())}isRelevantKey(e){return[n.IGDS_EVENT_KEYS.ArrowDown,n.IGDS_EVENT_KEYS.ArrowUp,n.IGDS_EVENT_KEYS.ArrowLeft,n.IGDS_EVENT_KEYS.ArrowRight,n.IGDS_EVENT_KEYS.Enter,n.IGDS_EVENT_KEYS.Home,n.IGDS_EVENT_KEYS.End,n.IGDS_EVENT_KEYS.Escape].includes(e)&&this._focusedCell}handleEnterDown(e){return e===n.IGDS_EVENT_KEYS.Enter?(this.editCell(),this._focusedCell?.row!==void 0&&this._focusedCell?.cell!==void 0&&this.emit(h.IGDS_EVENTS.cellEnterPressed,{rowIndex:this._focusedCell.row,cellIndex:this._focusedCell.cell}),!0):!1}handleEscapeDown(e){return e===n.IGDS_EVENT_KEYS.Escape?(this.cancelEditCell(),!0):!1}moveUp(e,t){return this._focusedCell.row>0?(e.preventDefault(),this._focusedCell.row-1):t}moveDown(e,t){return this._focusedCell.row+1<this.rows.length?(e.preventDefault(),this._focusedCell.row+1):t}moveStart(e){return this._focusedCell.row>0?this._focusedCell.cell-1:e}moveEnd(e){return this._focusedCell.cell+1<this._maxTableSize?this._focusedCell.cell+1:e}processArrowsKeyDown(e){let t=this._focusedCell.row,l=this._focusedCell.cell;const[s,r]=v.getDirection(this)==="rtl"?[n.IGDS_EVENT_KEYS.ArrowRight,n.IGDS_EVENT_KEYS.ArrowLeft]:[n.IGDS_EVENT_KEYS.ArrowLeft,n.IGDS_EVENT_KEYS.ArrowRight];switch(e.key){case n.IGDS_EVENT_KEYS.ArrowUp:t=this.moveUp(e,t);break;case n.IGDS_EVENT_KEYS.ArrowDown:t=this.moveDown(e,t);break;case s:l=this.moveStart(l);break;case r:l=this.moveEnd(l);break;case n.IGDS_EVENT_KEYS.Home:l=0,e.preventDefault();break;case n.IGDS_EVENT_KEYS.End:l=this._maxTableSize-1,e.preventDefault();break}this.focusCellByAddress(t,l)}handleKeyDown(e){this.isRelevantKey(e.key)&&(this.handleEnterDown(e.key)||this.handleEscapeDown(e.key)||this.processArrowsKeyDown(e))}focusCellByAddress(e,t,l){if(!this.domRows||e<0||this.domRows.length<=e||t<0||this._maxTableSize<=t)return;const s=this.domRows[e].querySelectorAll("[data-cell]");l?setTimeout(()=>{const r=s[t].querySelector("igds-input")?.shadowRoot?.querySelector("textarea");r?.select(),r?.focus()}):s[t].focus()}handleClickLinkCell(e,t){t?.isEmitEvent&&(e.preventDefault(),this.emit(h.IGDS_EVENTS.cellLinkClick,t.id??"link id is not specified"))}getTruncatedValue(e){return o.when(this.truncated,()=>i.html`
        <igds-tooltip
          content=${e}
          placement="bottom"
          class="table__cell-tooltip"
          disabled
          data-cell-text
        >
          <div class="table__cell-text">${e}</div>
        </igds-tooltip>
      `,()=>e)}renderExpandableRow(e){return o.when(e.slot!==void 0&&e.expandable,()=>i.html`
        <tr class="table__row">
          <td
            class="table__cell table__cell--expandable"
            style=${S.styleMap({gridColumnEnd:this._maxTableSize+(this.selectable?1:0)+2+(this.actions!==void 0?1:0)})}
            colspan=${this._maxTableSize+(this.selectable?1:0)+1+(this.actions!==void 0?1:0)}
          >
            <igds-animate-height
              ?expand=${this._expandedRowIds.includes(e.id)}
            >
              <div
                class="table__expanded-slot-box"
                data-clone-id="${e.id}"
              ></div>
            </igds-animate-height>
          </td>
        </tr>
      `)}renderExpandAllCellControl(){return o.when(this._hasExpandableRow,()=>i.html`
        <th class="table__cell table__cell--header table__cell--has-control">
          <button
            type="button"
            class="table__header-control"
            @click=${this.handleExpandAll}
          >
            ${this._expandedRowIds.length>0?"Expand all rows":"Collapse all rows"}
          </button>
        </th>
      `)}renderExpandCellControl(e){return o.when(this._hasExpandableRow,()=>i.html`
        <td class="table__cell table__cell--has-control">
          ${o.when(e.slot!==void 0&&e.expandable,()=>i.html`
              <button
                class="table__button"
                @click=${()=>this.toggleRowSlot(e.id)}
              >
                <igds-icon
                  node=${c.chevronDown}
                  class=${u.classMap({"table__expand-icon":!0,"table__expand-icon--rotated":this._expandedRowIds.includes(e.id)})}
                ></igds-icon>
              </button>
            `)}
        </td>
      `)}renderSelectAllCellControl(){return o.when(this.selectable,()=>i.html`
        <th class="table__cell table__cell--header table__cell--has-control">
          <button
            type="button"
            class="table__header-control"
            @click=${this.handleSelectAll}
          >
            ${this.selectedRows.length>0?"Clear selection":"Select all"}
          </button>
        </th>
      `)}renderSelectCellControl(e){return o.when(this.selectable,()=>i.html`
        <td class="table__cell table__cell--has-control">
          <igds-checkbox
            @igds-change=${t=>this.handleSelect(t,e.id)}
            ?checked=${this.selectedRows.includes(e.id)}
            aria-label="Select row"
          ></igds-checkbox>
        </td>
      `)}getDataColumnTracks(){if(!this.header.length)return`repeat(${this._maxTableSize}, minmax(min-content, auto))`;const e=this.header.map(s=>{if(s.width)return s.width;const r=s.minWidth??"min-content",a=s.maxWidth??"auto";return`minmax(${r}, ${a})`}),t=this._maxTableSize-this.header.length,l=Array(t>0?t:0).fill("minmax(min-content, auto)");return[...e,...l].join(" ")}renderPlaceholderCellControl(){return o.when(this.droppable,()=>i.html`
        <th
          class="table__cell table__cell--header table__cell--has-control"
        ></th>
      `)}renderHeaderCell(e,t){return!e.sortable&&!e.tooltip?i.html`
        <th
          class="table__cell table__cell--header ${u.classMap({"table__cell--truncated":!!this.truncated})}"
        >
          ${this.getTruncatedValue(e.name)}
        </th>
      `:i.html`
      <th
        class="table__cell table__cell--header table__cell--has-sorting-control"
      >
        <div class="table__column-controls">
          ${e.name}
          <section class="table__control-box">
            ${o.when(e.sortable,()=>i.html`
                <button
                  type="button"
                  class="table__sorting-control"
                  @click=${()=>this.changeSortingOrder(t)}
                >
                  ${q.choose(e.sortingOrder,[[void 0,()=>i.html`<igds-icon node=${c.sortDefault}></igds-icon>`],["asc",()=>i.html`<igds-icon node=${c.sortDown}></igds-icon>`],["desc",()=>i.html`<igds-icon node=${c.sortUp}></igds-icon>`]])}
                </button>
              `)}
            ${o.when(e.tooltip,()=>i.html`
                <igds-tooltip
                  content=${e.tooltip??""}
                  placement="bottom"
                  class="table__tooltip"
                >
                  <igds-icon
                    node=${c.helpOutlined}
                    class="table__tooltip-icon"
                    tabindex="0"
                  >
                  </igds-icon>
                </igds-tooltip>
              `)}
          </section>
        </div>
      </th>
    `}renderTableHeader(){return i.html`
      <thead class="table__head-box">
        <tr class="table__row">
          ${this.renderExpandAllCellControl()}
          ${this.renderSelectAllCellControl()}
          ${this.renderPlaceholderCellControl()}
          ${b.repeat(this.header,({id:e})=>e,(e,t)=>this.renderHeaderCell(e,t))}
          ${o.when(this.actions!==void 0,()=>i.html`
              <th
                class="table__cell table__cell--header table__cell--has-control"
              ></th>
            `)}
          ${o.when(this.header.length<this._maxTableSize,()=>b.repeat(Array.from({length:this._maxTableSize-this.header.length}),()=>i.html`<th class="table__cell table__cell--header"></th>`))}
        </tr>
      </thead>
    `}renderActionCellControl(e,t){return o.when(this.actions!==void 0,()=>i.html`
        <td class="table__cell table__cell--has-control">
          <igds-menu position="bottom-end" class="table__menu">
            <button class="table__button" slot="trigger">
              <igds-icon
                node=${c.moreVertical}
                class="table__expand-icon"
              ></igds-icon>
            </button>
            ${b.repeat(this.actions,l=>l,l=>i.html`
                <igds-menu-item
                  slot="menu-item"
                  label=${l}
                  @igds-click=${()=>this.handleAction(l,e.id,t)}
                ></igds-menu-item>
              `)}
          </igds-menu>
        </td>
      `)}renderCellsToCompleteTableRow(){return o.when(this.header.length<this._maxTableSize,()=>b.repeat(Array.from({length:this._maxTableSize-this.header.length}),()=>i.html` <td class="table__cell" data-cell></td> `))}renderDragAndDropCellControl(){return o.when(this.droppable,()=>i.html`
        <td class="table__cell table__cell--has-control">
          <button
            type="button"
            class="table__dnd-button"
            aria-label="גרור כדי לסדר מחדש את הרשימה"
          >
            <igds-icon node=${c.menu} class="list__dnd-icon"></igds-icon>
          </button>
        </td>
      `)}renderLinkCell(e){return o.when(e.disabled,()=>i.html`
        <div
          class="table__cell-link table__cell-link--disabled"
          title=${e.title}
        >
          ${e.label}
        </div>
      `,()=>i.html`
        <a
          href=${e.url}
          title=${e.title}
          target=${T.ifDefined(e.target?e.target:void 0)}
          class="table__cell-link"
          @click=${t=>this.handleClickLinkCell(t,{isEmitEvent:e.isEmitEvent,id:e.id})}
          >${e.label}</a
        >
      `)}renderTextCell(e,t,l){return o.when(this.editableCell?.row===l&&this.editableCell?.cell===t,()=>i.html`
        <igds-input
          type="textarea"
          rows="1"
          autoheight
          default-value=${e.value}
          placeholder="נתוני תא"
          icon=${c.checkmark}
          icon-position="right"
          @igds-input=${this.handleEditCellInput}
          @igds-input-icon-click=${this.saveCellValue}
          @click=${s=>s.stopPropagation()}
          @keydown=${this.handleInputKeydown}
        ></igds-input>
      `,()=>this.getTruncatedValue(e.value))}renderTableCell(e,t,l){const s=m.isBadgeCell(e);return i.html`
      <td
        class=${u.classMap({table__cell:!0,"table__cell--editable":!!this.editable||!!this.focusable,"table__cell--show-input":this.editableCell?.row===l&&this.editableCell?.cell===t,"table__cell--truncated":!!this.truncated,"table__cell--contain-badge":s})}
        tabindex=${T.ifDefined(this.editable||this.focusable?0:void 0)}
        @focus=${()=>this.setFocusedCell(l,t)}
        @click=${()=>this.handleCellClick(l,t)}
        data-cell
      >
        ${o.when(p.isTextCell(e),()=>this.renderTextCell(e,t,l))}
        ${o.when(s,()=>i.html`
            <igds-badge
              label=${e.label}
              variant=${e.variant}
            ></igds-badge>
          `)}
        ${o.when(g.isLinkCell(e),()=>this.renderLinkCell(e))}
      </td>
    `}renderSlottedCell(e,t){return i.html`
      <td
        class=${u.classMap({table__cell:!0,"table__cell--slotted":!0})}
        data-cell
        data-row-id="${e.id}"
        data-slotted-index="${t}"
      ></td>
    `}renderRowCells(e,t){let l=0,s=0;return this.header.map((r,a)=>{if(r.slotted){const D=s;return s++,this.renderSlottedCell(e,D)}const w=e.cells[l];return l++,w?this.renderTableCell(w,a,t):i.html`<td class="table__cell" data-cell></td>`})}render(){return i.html`
      <div
        class=${u.classMap({table__box:!0,"table__box--truncate":!!this.truncated})}
        part="scrollable"
      >
        <table
          class=${u.classMap({table:!0,"table--droppable":!!this.droppable})}
          style=${S.styleMap({gridTemplateColumns:`
              ${this._hasExpandableRow?"60px":""}
              ${this.selectable?"60px":""}
              ${this.droppable?"60px":""}
              ${this.getDataColumnTracks()}
              ${this.actions!==void 0?"48px":""}
            `})}
        >
          ${this.renderTableHeader()}
          <tbody class="table__body-box" @keydown=${this.handleKeyDown}>
            ${b.repeat(this.rows,({id:e})=>e,(e,t)=>i.html`
                <tr class="table__row" data-row>
                  ${this.renderExpandCellControl(e)}
                  ${this.renderSelectCellControl(e)}
                  ${this.renderDragAndDropCellControl()}
                  ${this.renderRowCells(e,t)}
                  ${this.renderActionCellControl(e,t)}
                  ${this.renderCellsToCompleteTableRow()}
                </tr>
                ${this.renderExpandableRow(e)}
              `)}
          </tbody>
        </table>
        <slot></slot>
      </div>
    `}};exports.Table.styles=N.unsafeCSS(G);d([_.property({type:Boolean})],exports.Table.prototype,"selectable",2);d([_.property({type:Boolean})],exports.Table.prototype,"editable",2);d([_.property({type:Boolean})],exports.Table.prototype,"focusable",2);d([_.property({type:Boolean})],exports.Table.prototype,"truncated",2);d([_.property({type:Array})],exports.Table.prototype,"actions",2);d([_.property({type:Boolean})],exports.Table.prototype,"droppable",2);d([A.provide({context:$.igdsTableContext})],exports.Table.prototype,"context",2);d([C.state()],exports.Table.prototype,"header",2);d([C.state()],exports.Table.prototype,"rows",2);d([C.state()],exports.Table.prototype,"selectedRows",2);d([C.state()],exports.Table.prototype,"_expandedRowIds",2);d([C.state()],exports.Table.prototype,"editableCell",2);d([k.query(".table__body-box")],exports.Table.prototype,"tbody",2);d([f.queryAll("[data-row]")],exports.Table.prototype,"domRows",2);d([f.queryAll("[data-cell-text]")],exports.Table.prototype,"cellText",2);d([f.queryAll("[data-clone-id]")],exports.Table.prototype,"boxes",2);d([f.queryAll("[data-cell]")],exports.Table.prototype,"cells",2);exports.Table=d([R.customElement(x.IGDS_TAGS.table)],exports.Table);
