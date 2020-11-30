var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

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
}

function isBinarySearchTree(tree) {
  // Only change code below this line


  if (tree.root == null) { return null; }
  else {
    let isBinarySearchTree = true;

    function Check(node) {
      if (node.left != null) {
        const left = node.left;
        if (left.value > node.value) {
          isBinarySearchTree = false;
        } else {
          Check(left);
        }
      }
      if (node.right != null) {
        const right = node.right;
        if (right.value < node.value) {
          isBinarySearchTree = false;
        } else {
          Check(right);
        }
      }
    }

    Check(tree.root);
    return isBinarySearchTree;

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
console.log(isBinarySearchTree(bt));