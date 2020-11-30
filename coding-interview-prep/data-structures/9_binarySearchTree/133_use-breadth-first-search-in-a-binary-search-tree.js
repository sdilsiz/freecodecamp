var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // Only change code below this line

    this.add = function (integer) {
        let curr = this.root;

        if (!curr) {
            this.root = new Node(integer);
            return undefined;
        };

        while (curr) {
            if (integer < curr.value) {
                if (!curr.left) {
                    curr.left = new Node(integer);
                    return undefined;
                }
                curr = curr.left;
            }
            else if (integer > curr.value) {
                if (!curr.right) {
                    curr.right = new Node(integer);
                    return undefined;
                }
                curr = curr.right;
            }
            else return null;
        }
        // Only change code above this line
    }

    this.levelOrder = function (root = this.root) {
        if (!root) { return null; }
        var queue = [root];
        let results = [];
        while (queue.length > 0) {
            var currNode = queue.shift();
            results.push(currNode.value);
            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }

        return results;
    }
    this.reverseLevelOrder = function (root = this.root) {
        if (!root) { return null; }
        var queue = [root];
        let results = [];
        while (queue.length > 0) {
            var currNode = queue.shift();
            results.push(currNode.value);
            if (currNode.right) queue.push(currNode.right);
            if (currNode.left) queue.push(currNode.left);
        }

        return results;
    }
}


var bt = new BinarySearchTree();
bt.add(6);
bt.add(4);
bt.add(8);
bt.add(3);
bt.add(5);
bt.add(7);
bt.add(9);
var newArray = [];
// var inorder = bt.inorder(bt.root);
// var preorder = bt.preorder(bt.root);
// var postorder = bt.postorder(bt.root);
var levelOrder = bt.levelOrder(bt.root);
// console.log(inorder);
// console.log(preorder);
// console.log(postorder);
console.log(levelOrder);