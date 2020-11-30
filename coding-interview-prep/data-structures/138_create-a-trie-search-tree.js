var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};
var Trie = function () {
    // Only change code below this line
    this.add = function (root, key) {

        // var node = new Node();
        var pCrawl = root;

        for (var i = 0; i < key.length(); i++) {
            var index = key[i] - 'a';
            if (!pCrawl.keys[index])
                pCrawl.keys[index] = getNode();

            pCrawl = pCrawl.keys[index];
        }

        // mark last node as leaf 
        pCrawl.setEnd();

    }
    this.print = function () { }
    this.isWord = function () { }
    // Only change code above this line
};
