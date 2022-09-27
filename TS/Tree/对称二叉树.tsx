export class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  function compare (node1: TreeNode | null, node2: TreeNode | null): boolean {
      if (node1 === null && node2 !== null) {
          return false
      } else if (node1 !== null && node2 === null) {
          return false
      } else if (node1 === null && node2 === null) {
          return true
      } else if (node1!.val !== node2!.val) {
          return false
      }

      let outside = compare(node1!.left, node2!.right);
      let inside = compare(node1!.right, node2!.left);
      let isSame = outside && inside;
      return isSame;
  }
  if (root === null) return true;
  return compare(root.left, root.right)
};