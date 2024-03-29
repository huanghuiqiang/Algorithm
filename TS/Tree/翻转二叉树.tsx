export class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;
  constructor(val?: number, left?: TreeNode, right?: TreeNode) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 前序遍历
 * @param root
 * @returns 
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  let tempNode: TreeNode | null = root.left;
  root.left = root.right;
  root.right = tempNode;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};