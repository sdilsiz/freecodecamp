var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    this.findMin = function () {

        if (this.root == null) {
            return null;
        }

        var minValue = this.root.value;
        var current = this.root;
        while (current) {
            if (current.left == null) {
                minValue = current.value;
            }
            current = current.left;
        }

        return minValue;

    }

    this.findMax = function () {
        if (this.root == null) {
            return null;
        }

        var maxValue = this.root.value;
        var current = this.root;
        while (current) {
            if (current.right == null) {
                maxValue = current.value;
            }
            current = current.right;
        }

        return maxValue;
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
    }


    this.isPresent = function (integer) {
        let curr = this.root;

        if (!curr) {
            return false;
        };

        while (curr) {
            if (integer < curr.value) {
                if (!curr.left) {
                    return false;
                }
                curr = curr.left;
            }
            else if (integer > curr.value) {
                if (!curr.right) {
                    return false;
                }
                curr = curr.right;
            }
            else return true;
        }

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
// displayTree(bt);
// console.log(bt.findMin());
// console.log(bt.findMax());

console.log(bt.isPresent(13));
