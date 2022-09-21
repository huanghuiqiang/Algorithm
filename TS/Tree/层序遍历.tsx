

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  let helperQueue: TreeNode[] = [];
  if (root !== null) helperQueue.push(root);
  let curNode: TreeNode;
  let tempArr: number[] = [];
  while(helperQueue.length > 0) {
    for(let i = 0; i < helperQueue.length; i++) {
      curNode = helperQueue.shift()!;
      tempArr.push(curNode.val);
      if (curNode.left !== null) {
        helperQueue.push(curNode.left);
      }
      if (curNode.right !== null) {
        helperQueue.push(curNode.right);
      }
    }
    res.push(tempArr);
    tempArr = [];
  }

  return res;
}