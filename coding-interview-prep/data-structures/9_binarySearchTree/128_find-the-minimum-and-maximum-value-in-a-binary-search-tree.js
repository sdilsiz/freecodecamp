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

  this.addR = function (current, value) {

    if (current == null) {
      return new Node(value);
    }

    if (value < current.value) {
      current.left = this.addR(current.left, value);
    } else if (value > current.value) {
      current.right = this.addR(current.right, value);
    } else {
      // value already exists
      return null;
    }

    return current;
  }

  this.add = function (value) {
    this.root = this.addR(this.root, value);
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
console.log(bt.findMin());
console.log(bt.findMax());
