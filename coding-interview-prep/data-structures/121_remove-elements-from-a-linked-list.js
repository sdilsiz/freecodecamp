function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function (element) {
    // Only change code below this line

    if (head.element == element) {
      //removing head
      var newHeadNode = head.next;
      head = newHeadNode;
      length--;
    } else {
      var currentNode = head;
      var previous = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
        if (currentNode.element == element) {
          //removing element
          previous.next = currentNode.next;
          length--;
        }
        previous = currentNode;
      }
    }


    // Only change code above this line
  };
}
