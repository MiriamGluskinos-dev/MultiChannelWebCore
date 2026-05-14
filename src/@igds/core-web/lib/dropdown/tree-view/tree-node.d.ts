interface TreeNode {
    id: string;
    label: string;
    parentId: string | null;
    children?: TreeNode[];
}
export { TreeNode };
