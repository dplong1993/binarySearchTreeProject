// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

const { TreeNode } = require('../lib/bst');

var isBalanced = function(root) {
  if(!root) return true;
  let topBalanced = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
  return topBalanced && isBalanced(root.left) && isBalanced(root.right);
};

function getHeight(root){
  if(!root) return -1;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}


let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(4);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(3);

console.log(isBalanced(root));


// function getHeight(root){
//   if(!root) return -1;
//   return 1 + Math.max(getHeight(root.left), getHeight(root.right));
// }

// var isBalanced = function(root) {
//   if(!root) return true;
//   let heightDiff = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
//   return heightDiff && isBalanced(root.left) && isBalanced(root.right);
// };

// function isBalanced(root) {
//   if (!root) return true;
//   let leftTree = root.left;
//   let rightTree = root.right;
//   let leftDepth = maxDepth(leftTree) + 1; // 3
//   let rightDepth = maxDepth(rightTree) + 1; // 1
//   //console.log(rightTree);
//   console.log(leftDepth, rightDepth);
//   let diff = Math.abs(leftDepth - rightDepth);
//   if (diff > 1) return false;
//   else return isBalanced(leftTree) && isBalanced(rightTree);
// }

// function maxDepth(start, leftCount = 0, rightCount = 0) {
//   if (start === null) return -1;
//   console.log('In max depth', start);
//   if (!start.left && !start.right) {
//     if (leftCount > rightCount) return leftCount;
//     else return rightCount;
//   }
//   leftCountHolder = maxDepth(start.left, leftCount, rightCount) + 1; // 2
//   rightCountHolder = maxDepth(start.right, leftCount, rightCount) + 1; //1

//   leftCount = leftCountHolder;
//   rightCount = rightCountHolder;
//   if (leftCount > rightCount) return leftCount;
//   else return rightCount;
// }

// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(2);
// root.left.left = new TreeNode(3);
// root.right.right = new TreeNode(3);
// root.left.left.left = new TreeNode(4);
// root.right.right.right = new TreeNode(4);

// console.log(isBalanced(root));

//1). maxDepth(root = 2)
//2a). maxDepth(root = 3, 0, 0)
//3a). maxDepth(root = 4) returns 0
//3b). maxDepth(root = 4) returns 0
//2b). maxDepth(root = 3, 0, 0)
