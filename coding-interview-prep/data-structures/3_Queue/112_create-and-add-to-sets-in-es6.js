function checkSet() {
    var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
    // Only change code below this line
    set = new Set([1, 2, 3, 'Taco', 'Cat', 'Awesome']);
    // Only change code above this line
    console.log(Array.from(set));
    return set;
}

checkSet();
