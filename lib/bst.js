class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new TreeNode(val);
        if (!this.root) this.root = newNode;
        else this.findPosition(newNode, this.root);
    }

    findPosition(valNode, root) {
        if (valNode.val < root.val) {
            if (!root.left) {
                root.left = valNode;
                return;
            } else this.findPosition(valNode, root.left);
        } else {
            if (!root.right) {
                root.right = valNode;
                return;
            } else this.findPosition(valNode, root.right);
        }
    }

    searchRecur(val, root = this.root) {
        if (!root) return false;
        if (root.val === val) return true;
        if (root.val < val) return this.searchRecur(val, root.right);
        else return this.searchRecur(val, root.left);
    }

    searchIter(val) {
        if (!this.root) return false;
        let currNode = this.root;
        while (currNode !== null) {
            if (currNode.val === val) return true;
            else if (currNode.val < val) currNode = currNode.right;
            else currNode = currNode.left;
        }
        return false;
    }
}

// let tree = new BST();
// tree.insert(10);
// tree.insert(5);
// tree.insert(16);
// tree.insert(1);
// tree.insert(7);
// tree.insert(16);

// console.log(tree);

module.exports = {
    TreeNode,
    BST
};
