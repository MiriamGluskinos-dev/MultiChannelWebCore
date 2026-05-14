"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const p=require("../../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const w=require("../../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),c=require("../../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),x=require("../../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),h=require("../../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),f=require("../../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),N=require("../../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),u=require("../../constants/events.cjs"),g=require("../../constants/tags.cjs"),_=require("../../abstractions/igds-element.cjs");require("../../abstractions/angular-form-element.cjs");const T=require("./tree-view.scss.cjs"),y=require("@igds/icons");require("../../animate-height/animate-height.cjs");const v=require("../../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var S=Object.defineProperty,V=Object.getOwnPropertyDescriptor,a=(l,t,s,e)=>{for(var d=e>1?void 0:e?V(t,s):t,r=l.length-1,o;r>=0;r--)(o=l[r])&&(d=(e?o(t,s,d):o(d))||d);return e&&d&&S(t,s,d),d};exports.TreeView=class extends _.IGDSElement{constructor(){super(...arguments),this.nodes=[],this.selectedNodeId=null,this.expandedNodes=new Set,this.focusedItemId=null}get tree(){const t=new Map,s=[];return this.nodes.forEach(e=>{t.set(e.id,{...e,children:[]})}),t.forEach(e=>{e.parentId?t.get(e.parentId)?.children?.push(e):s.push(e)}),s}processSelectedNodeIdProp(t){t.has("selectedNodeId")&&this.selectedNodeId&&this.expandPathToNode(this.selectedNodeId)}processFocusedIndexProp(t){if(t.has("focusedIndex")){const e=t.get("focusedIndex")<this.focusedIndex?"down":"up";this.updateTreeListView(this.focusedIndex,this.expandedNodes,e)}}processExpandedIdProp(t){t.has("expandedId")&&this.expandedId!==void 0&&(this.expandedNodes.add(this.expandedId),this.updateTreeListView(this.focusedIndex,this.expandedNodes,"down","collapsed"))}processCollapsedIdProp(t){t.has("collapsedId")&&this.collapsedId!==void 0&&this.expandedNodes.has(this.collapsedId)&&(this.expandedNodes.delete(this.collapsedId),this.updateTreeListView(this.focusedIndex,this.expandedNodes,"down","collapsed"))}updated(t){super.updated(t),this.processSelectedNodeIdProp(t),this.processFocusedIndexProp(t),this.processExpandedIdProp(t),this.processCollapsedIdProp(t)}expandPathToNode(t){const s=new Map;this.nodes.forEach(o=>s.set(o.id,o));const e=[];let d=s.get(t);for(;d?.parentId;)e.push(d.parentId),d=s.get(d.parentId);const r=new Set(this.expandedNodes);e.forEach(o=>r.add(o)),this.expandedNodes=r}toggleNode(t,s){t.stopPropagation();const e=new Set(this.expandedNodes);e.has(s)?e.delete(s):e.add(s),this.expandedNodes=e}handleClick(t){this.selectedNodeId=t.id,this.emit(u.IGDS_EVENTS.click,{id:t.id,label:t.label})}updateTreeListView(t,s,e,d="focused"){const r=[],o=new Map,n=new Map;this.nodes.forEach(i=>{o.set(i.id,i),n.has(i.parentId)||n.set(i.parentId,[]),n.get(i.parentId).push(i)});function I(i){i&&(r.push(i),s.has(i.id)&&(n.get(i.id)||[]).forEach(m=>I(m)))}(n.get(null)||[]).forEach(i=>I(i)),r.length-1<t?this.focusedItemId=r[r.length-1].id:t<1?this.focusedItemId=r[0].id:this.focusedItemId=r[t].id,d==="focused"?this.emit(u.IGDS_EVENTS.focusedItemChanged,{index:t,maxItems:r.length,direction:e,id:this.focusedItemId}):this.emit(u.IGDS_EVENTS.collapsedItemChanged)}renderTree(t,s){return p.html`
      <ul role=${s} class="tree">
        ${t.map(e=>p.html`
            <li
              class=${h.classMap({tree__node:!0,"tree__node--indented":e.parentId!==null})}
              role="treeitem"
              aria-label=${e.label}
              aria-selected=${this.selectedNodeId===e.id?"true":"false"}
              aria-expanded=${N.ifDefined(e.children&&e.children.length>0?this.expandedNodes.has(e.id)?"true":"false":void 0)}
            >
              <div
                class=${h.classMap({tree__item:!0,"tree__item--selected":this.selectedNodeId===e.id,"tree__item--focus-visible":this.focusedItemId===e.id})}
                @click=${()=>this.handleClick(e)}
                @keydown=${()=>{}}
              >
                ${f.when(e.children?.length,()=>p.html`
                    <div
                      class=${h.classMap({"tree__chevron-btn":!0,"tree__chevron-btn--open":this.expandedNodes.has(e.id)})}
                      aria-label=${this.expandedNodes.has(e.id)?"צמצם":"הרחב"}
                      @click=${d=>this.toggleNode(d,e.id)}
                      @keydown=${()=>{}}
                    >
                      <igds-icon
                        class="tree__chevron-btn-icon"
                        node=${y.chevronLeft}
                      ></igds-icon>
                    </div>
                  `)}
                <span class="tree__label">${e.label}</span>
              </div>
              ${f.when(e.children?.length,()=>p.html`
                  <igds-animate-height
                    ?expand=${this.expandedNodes.has(e.id)}
                  >
                    ${this.renderTree(e.children,"group")}
                  </igds-animate-height>
                `)}
            </li>
          `)}
      </ul>
    `}render(){return p.html`${this.renderTree(this.tree,"tree")}`}};exports.TreeView.styles=v.unsafeCSS(T);a([c.property({type:Array})],exports.TreeView.prototype,"nodes",2);a([c.property({type:String,attribute:"selected-node-id"})],exports.TreeView.prototype,"selectedNodeId",2);a([c.property({type:Number,attribute:"focused-index"})],exports.TreeView.prototype,"focusedIndex",2);a([c.property({type:String,attribute:"expanded-id"})],exports.TreeView.prototype,"expandedId",2);a([c.property({type:String,attribute:"collapsed-id"})],exports.TreeView.prototype,"collapsedId",2);a([x.state()],exports.TreeView.prototype,"expandedNodes",2);a([x.state()],exports.TreeView.prototype,"focusedItemId",2);exports.TreeView=a([w.customElement(g.IGDS_TAGS.treeView)],exports.TreeView);
