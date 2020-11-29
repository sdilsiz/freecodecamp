var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = function (value) {
    // when root is uninitialized
    if (null == this.head) {
      this.head = new Node(value);
      return undefined;
    } else {
      var currentNode = this.head;
      // search for the place to insert the new value
      while (true) {
        if (currentNode.value < value) {
          // if the current node already has left child
          // so we concern it further
          if (null != currentNode.left) {
            currentNode = currentNode.left;
            continue;
            // if the current node has no left child
            // so we create it with the new value
          } else {
            var newNode = new Node(value);
            currentNode.left = newNode;
            return undefined;
          }
        } else if (currentNode.value > value) {
          // similarly for the value that should be inserted into
          // right subtree
          if (null != currentNode.right) {
            currentNode = currentNode.right;
            continue;
          } else {
            var newNode = new Node(value);
            currentNode.right = newNode
            return undefined;
          }
        } else {
          return null;
        }
      }
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

displayTree(bt);