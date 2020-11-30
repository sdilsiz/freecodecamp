var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    // Only change code below this line
    this.invert = function (node = this.root) {
        if (node) {
            var temp = node.left;
            node.left = node.right;
            node.right = temp;
            /* recursive calls */
            this.invert(node.left);
            this.invert(node.right);
        }
        return node;
    }


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
    // Only change code above this line
}



var bt = new BinarySearchTree();
bt.add(6);
bt.add(4);
bt.add(8);
bt.add(3);
bt.add(5);
bt.add(7);
bt.add(9);
// var newArray = [];
// var inorder = bt.inorder(bt.root);
// var preorder = bt.preorder(bt.root);
// var postorder = bt.postorder(bt.root);
// console.log(inorder);
// console.log(preorder);
// console.log(postorder);
displayTree(bt);
bt.invert();
displayTree(bt);