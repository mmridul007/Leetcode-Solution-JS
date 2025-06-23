// Problem Link: https://leetcode.com/problems/binary-tree-inorder-traversal/description/

var inorderTraversal = function (root) {
  const number = [];
  function traverse(currentNode) {
    if (currentNode === null) {
      return number;
    }
    traverse(currentNode.left);
    number.push(currentNode.val);
    traverse(currentNode.right);
  }

  traverse(root);

  return number;
};
