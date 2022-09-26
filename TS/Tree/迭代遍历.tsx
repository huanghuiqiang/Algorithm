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
 * 进栈先右再左，出栈才是中左右
 * @param root 
 * @returns 
 * 前序遍历
 */
function preorderTraversal_(root: TreeNode | null):number[] {
  if (root === null) return [];
  let res: number[] = [];
  let curNode: TreeNode = root;
  let helperStack: TreeNode[] = [];
  helperStack.push(curNode);
  while(helperStack.length > 0) {
    curNode = helperStack.pop()!;
    res.push(curNode.val); // 中
    if (curNode.right !== null) helperStack.push(curNode.right); // 右
    if (curNode.left !== null) helperStack.push(curNode.left); // 左
  }
  return res;
}

/**
 * 左中右
 * @param root 
 * @returns 
 * 中序遍历
 */
function inorderTraversal_(root: TreeNode | null): number[] {
  if (root === null) return [];
  let res: number[] = [];
  let helperStack: TreeNode[] = [];
  let curNode: TreeNode | null = root;
  while(curNode !== null || helperStack.length > 0) {
    if (curNode !== null) {
      helperStack.push(curNode);
      curNode = curNode.left;
    } else {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
      curNode = curNode.right;
    }
  }
  return res;
}


/**
 * 进栈先右再左，出栈才是中左右
 * @param root 
 * @returns 
 * 后序遍历
 */
 function postorderTraversal_(root: TreeNode | null):number[] {
  if (root === null) return [];
  let res: number[] = [];
  let curNode: TreeNode = root;
  let helperStack: TreeNode[] = [];
  helperStack.push(curNode);
  while(helperStack.length > 0) {
    curNode = helperStack.pop()!;
    res.push(curNode.val); // 中
    if (curNode.left !== null) helperStack.push(curNode.left); // 左
    if (curNode.right !== null) helperStack.push(curNode.right); // 右
  }
  return res.reverse();
}