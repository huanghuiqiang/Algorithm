
export class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;
  constructor(val?: number, left?: TreeNode, right?: TreeNode) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}


/**
 * 前序遍历
 * @param node 
 * @returns 
 */
function preorderTraversal(node: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]): void {
    if (node === null) return;
    res.push(node.val);
    traverse(node.left, res);
    traverse(node.right, res);
  }
  const res: number[] = [];
  traverse(node, res);
  return res;
}

/**
 * 中序遍历
 * @param node 
 * @returns 
 */
 function inorderTraversal(node: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]): void {
    if (node === null) return;
    traverse(node.left, res);
    res.push(node.val);
    traverse(node.right, res);
  }
  const res: number[] = [];
  traverse(node, res);
  return res;
}

/**
 * 后序遍历
 * @param node 
 * @returns 
 */
 function postderTraversal(node: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]): void {
    if (node === null) return;
    traverse(node.left, res);
    traverse(node.right, res);
    res.push(node.val);
  }
  const res: number[] = [];
  traverse(node, res);
  return res;
}
