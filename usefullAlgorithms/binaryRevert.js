const revertTree = (node) => {
  // Base case: if the node is null, return
  if (node == null) return;

  // Recursively revert the left and right subtrees
  revertTree(node.left);
  revertTree(node.right);

  // Swap the left and right subtrees
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
};
