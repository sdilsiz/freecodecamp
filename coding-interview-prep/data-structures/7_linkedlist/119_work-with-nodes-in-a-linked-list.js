var Node = function (element) {
    this.element = element;
    this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// Only change code below this line
var Cat = new Node('Cat');
var Dog = new Node('Dog');
Puppy.next = Cat;
Cat.next = Dog;
// console.log(Cat);
// console.log(Dog);
console.log(Kitten);
