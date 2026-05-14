import { TemplateResult } from 'lit';
import { IGDS_TAGS } from '../../constants';
import { IGDSElement } from '../../abstractions';
import { TreeNode } from './tree-node';
import '../../animate-height';
declare class TreeView extends IGDSElement {
    static styles: import("lit").CSSResult;
    nodes: TreeNode[];
    selectedNodeId: string | null;
    focusedIndex: number;
    expandedId?: string;
    collapsedId?: string;
    private expandedNodes;
    private focusedItemId;
    private get tree();
    processSelectedNodeIdProp(changedProps: Map<string, unknown>): void;
    processFocusedIndexProp(changedProps: Map<string, unknown>): void;
    processExpandedIdProp(changedProps: Map<string, unknown>): void;
    processCollapsedIdProp(changedProps: Map<string, unknown>): void;
    updated(changedProps: Map<string, unknown>): void;
    private expandPathToNode;
    private toggleNode;
    private handleClick;
    private updateTreeListView;
    private renderTree;
    render(): TemplateResult<1>;
}
export { TreeView };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.treeView]: TreeView;
    }
}
