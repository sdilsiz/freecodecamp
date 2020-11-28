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
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length--;
    };

    // Only change code below this line
    this.isEmpty = function () {
        if (head == null) return true; else return false;
    }


    this.indexOf = function (element) {
        var currentNode = head;
        var index = 0;
        while (currentNode.next) {
            if (currentNode.element == element) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
        //doesnt find
        return -1;
    }

    this.elementAt = function (index) {
        var currentNode = head;
        var currIndex = 0;
        while (currentNode.next) {

            if (currIndex === index) {
                return currentNode.element;
            }
            currIndex++;
            currentNode = currentNode.next;
        }
        //doesnt find
        return undefined;
    }
    // Only change code above this line



    this.removeAt = function (index) {
        if (index < 0 || index > length) return null;
        var currentNode = head;
        var previousNode = head;
        var currentIndex = 0;
        var deletedNode;

        if (index == 0) {
            deletedNode = head;
            head = currentNode.next;
        } else {
            while (currentNode.next) {
                if (index == currentIndex) {
                    previousNode.next = currentNode.next;
                    deletedNode = currentNode;
                    break;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
        }
        if (deletedNode == null) {
            return null;
        } else {
            length--;
            return deletedNode.element;
        }


    }
}
