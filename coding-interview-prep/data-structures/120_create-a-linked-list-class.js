function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return this.head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    // Only change code below this line
    const node = new Node(element);
    if (head) {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    else {
      head = node;
    }
    length++;
    return;


    // Only change code above this line
  };
}


var linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(4);
console.log(linkedList.head);
console.log(linkedList.size());