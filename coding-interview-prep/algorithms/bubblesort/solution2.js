function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1])
          [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Using ES6 array destructuring to swap
      }
    }
    return array;
  }