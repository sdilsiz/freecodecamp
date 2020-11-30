var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;

    // Only change code below this line
    this.add = function (data) {
        // Only change code below this line
        if (this.head == null) {
            var newNode = new Node(data, null);
            this.head = newNode;
            this.tail = newNode;
        } else {
            var newTail = new Node(data, this.tail);
            this.tail.next = newTail;
            this.tail = newTail;
        }
        this.length++;

        return;
    }
    this.remove = function (data) {

        var isRemoved = false;

        if (this.head == null) {
            return null;
        }
        else {
            var current = this.head;
            while ((current != null) && (current.data != data))
                current = current.next;

            if (current != null) {
                if (current.next != null) {
                    current.next.prev = current.prev;
                }
                if (current.prev != null) {
                    current.prev.next = current.next;
                }
                if (current == this.head) {
                    this.head = current.next;
                }
                // current.next.prev = current.prev;
                // current.prev.next = current.next;
                // current.prev = null;
                // current.next = null;
                isRemoved = true;
                /*
                                if n.Next is not null, set n.Next.Prev to n.Prev
                                if n.Prev is not null, set n.Prev.Next to n.Next
                                if n == head, set head to n.Next
                                */
            }
        }
        return isRemoved;
    }





    this.print = function () {
        var array = [];
        if (this.head === null) {

        } else {
            var currentNode = this.head;
            console.log(currentNode.data);
            console.log(currentNode.next);
            while (currentNode != null) {
                array.push(currentNode.data);
                console.log(currentNode.data);
                currentNode = currentNode.next;
            }
        }
        return array;
    }
    this.size = function () {
        return this.length;
    };
    // Only change code above this line
};




var newList = new DoublyLinkedList();
console.log(newList.size());
newList.add("a");
newList.add("b");
newList.add("c");
newList.add("d");
// console.log(newList.size());
console.log(newList.print());
newList.remove("d");
// console.log(newList.size());
console.log(newList.print());
