import * as assert from 'uvu/assert'

// Implement Bubble Sort algorithm
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

assert.equal(bubbleSort([100, 155, 33, -1000, 3, 2, 1, -2]), [-1000, -2, 1, 2, 3, 33, 100, 155])