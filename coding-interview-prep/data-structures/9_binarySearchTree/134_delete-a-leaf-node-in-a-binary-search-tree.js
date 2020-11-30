var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.remove = function (data) {
    if (this.root == null) {
      return null;
    }

    if (this.root == null) {
      return null;
    } else if (this.root.left == null && this.root.right == null) {
      this.root = null;
      return;
    }

    
    var removeNode = function (node, data) {
      if (node == null) {
        return null;
      }

      if (node.value == data) {
        if (node.left == null && node.right == null) {
          return null
        }
      } else if (data < node.value) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    return removeNode(this.root, data);
  }
}
