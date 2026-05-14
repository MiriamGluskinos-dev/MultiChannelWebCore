var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IGDS_TAGS, IGDS_EVENTS } from '../../constants';
import { IGDSElement } from '../../abstractions';
import styles from './tree-view.scss?inline';
import { chevronLeft } from '@igds/icons';
import '../../animate-height';
let TreeView = class TreeView extends IGDSElement {
    constructor() {
        super(...arguments);
        this.nodes = [];
        this.selectedNodeId = null;
        this.expandedNodes = new Set();
        this.focusedItemId = null;
    }
    get tree() {
        const nodeMap = new Map();
        const roots = [];
        this.nodes.forEach((node) => {
            nodeMap.set(node.id, { ...node, children: [] });
        });
        nodeMap.forEach((node) => {
            if (node.parentId) {
                const parent = nodeMap.get(node.parentId);
                parent?.children?.push(node);
            }
            else {
                roots.push(node);
            }
        });
        return roots;
    }
    processSelectedNodeIdProp(changedProps) {
        if (changedProps.has('selectedNodeId') && this.selectedNodeId) {
            this.expandPathToNode(this.selectedNodeId);
        }
    }
    processFocusedIndexProp(changedProps) {
        if (changedProps.has('focusedIndex')) {
            const prevIndex = changedProps.get('focusedIndex');
            const direction = prevIndex < this.focusedIndex ? 'down' : 'up';
            this.updateTreeListView(this.focusedIndex, this.expandedNodes, direction);
        }
    }
    processExpandedIdProp(changedProps) {
        if (changedProps.has('expandedId') && this.expandedId !== undefined) {
            this.expandedNodes.add(this.expandedId);
            this.updateTreeListView(this.focusedIndex, this.expandedNodes, 'down', 'collapsed');
        }
    }
    processCollapsedIdProp(changedProps) {
        if (changedProps.has('collapsedId') &&
            this.collapsedId !== undefined &&
            this.expandedNodes.has(this.collapsedId)) {
            this.expandedNodes.delete(this.collapsedId);
            this.updateTreeListView(this.focusedIndex, this.expandedNodes, 'down', 'collapsed');
        }
    }
    updated(changedProps) {
        super.updated(changedProps);
        this.processSelectedNodeIdProp(changedProps);
        this.processFocusedIndexProp(changedProps);
        this.processExpandedIdProp(changedProps);
        this.processCollapsedIdProp(changedProps);
    }
    expandPathToNode(id) {
        const nodeMap = new Map();
        this.nodes.forEach((n) => nodeMap.set(n.id, n));
        const path = [];
        let current = nodeMap.get(id);
        while (current?.parentId) {
            path.push(current.parentId);
            current = nodeMap.get(current.parentId);
        }
        const updated = new Set(this.expandedNodes);
        path.forEach((id) => updated.add(id));
        this.expandedNodes = updated;
    }
    toggleNode(e, id) {
        e.stopPropagation();
        const updated = new Set(this.expandedNodes);
        updated.has(id) ? updated.delete(id) : updated.add(id);
        this.expandedNodes = updated;
    }
    handleClick(node) {
        this.selectedNodeId = node.id;
        this.emit(IGDS_EVENTS.click, { id: node.id, label: node.label });
    }
    updateTreeListView(index, expandedNodes, direction, method = 'focused') {
        const flatMap = [];
        const nodeMap = new Map();
        const childrenMap = new Map();
        this.nodes.forEach((node) => {
            nodeMap.set(node.id, node);
            if (!childrenMap.has(node.parentId)) {
                childrenMap.set(node.parentId, []);
            }
            childrenMap.get(node.parentId).push(node);
        });
        function traverse(node) {
            if (!node)
                return;
            flatMap.push(node);
            if (expandedNodes.has(node.id)) {
                const children = childrenMap.get(node.id) || [];
                children.forEach((child) => traverse(child));
            }
        }
        const rootNodes = childrenMap.get(null) || [];
        rootNodes.forEach((root) => traverse(root));
        if (flatMap.length - 1 < index) {
            this.focusedItemId = flatMap[flatMap.length - 1].id;
        }
        else if (index < 1) {
            this.focusedItemId = flatMap[0].id;
        }
        else {
            this.focusedItemId = flatMap[index].id;
        }
        if (method === 'focused') {
            this.emit(IGDS_EVENTS.focusedItemChanged, {
                index,
                maxItems: flatMap.length,
                direction,
                id: this.focusedItemId,
            });
        }
        else {
            this.emit(IGDS_EVENTS.collapsedItemChanged);
        }
    }
    renderTree(nodes, role) {
        return html `
      <ul role=${role} class="tree">
        ${nodes.map((node) => html `
            <li
              class=${classMap({
            tree__node: true,
            'tree__node--indented': node.parentId !== null,
        })}
              role="treeitem"
              aria-label=${node.label}
              aria-selected=${this.selectedNodeId === node.id
            ? 'true'
            : 'false'}
              aria-expanded=${ifDefined(node.children && node.children.length > 0
            ? this.expandedNodes.has(node.id)
                ? 'true'
                : 'false'
            : undefined)}
            >
              <div
                class=${classMap({
            tree__item: true,
            'tree__item--selected': this.selectedNodeId === node.id,
            'tree__item--focus-visible': this.focusedItemId === node.id,
        })}
                @click=${() => this.handleClick(node)}
                @keydown=${() => { }}
              >
                ${when(node.children?.length, () => html `
                    <div
                      class=${classMap({
            'tree__chevron-btn': true,
            'tree__chevron-btn--open': this.expandedNodes.has(node.id),
        })}
                      aria-label=${this.expandedNodes.has(node.id)
            ? 'צמצם'
            : 'הרחב'}
                      @click=${(e) => this.toggleNode(e, node.id)}
                      @keydown=${() => { }}
                    >
                      <igds-icon
                        class="tree__chevron-btn-icon"
                        node=${chevronLeft}
                      ></igds-icon>
                    </div>
                  `)}
                <span class="tree__label">${node.label}</span>
              </div>
              ${when(node.children?.length, () => html `
                  <igds-animate-height
                    ?expand=${this.expandedNodes.has(node.id)}
                  >
                    ${this.renderTree(node.children, 'group')}
                  </igds-animate-height>
                `)}
            </li>
          `)}
      </ul>
    `;
    }
    render() {
        return html `${this.renderTree(this.tree, 'tree')}`;
    }
};
TreeView.styles = unsafeCSS(styles);
__decorate([
    property({ type: Array })
], TreeView.prototype, "nodes", void 0);
__decorate([
    property({ type: String, attribute: 'selected-node-id' })
], TreeView.prototype, "selectedNodeId", void 0);
__decorate([
    property({ type: Number, attribute: 'focused-index' })
], TreeView.prototype, "focusedIndex", void 0);
__decorate([
    property({ type: String, attribute: 'expanded-id' })
], TreeView.prototype, "expandedId", void 0);
__decorate([
    property({ type: String, attribute: 'collapsed-id' })
], TreeView.prototype, "collapsedId", void 0);
__decorate([
    state()
], TreeView.prototype, "expandedNodes", void 0);
__decorate([
    state()
], TreeView.prototype, "focusedItemId", void 0);
TreeView = __decorate([
    customElement(IGDS_TAGS.treeView)
], TreeView);
export { TreeView };
