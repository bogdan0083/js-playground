import { test } from "uvu";
import * as assert from 'uvu/assert'


// Find index of element with binary search algorithm
// using recursion
const binarySearchRecursive = (arr, elem) => {

  if (arr.length === 0) {
    return null
  }

  const loop = (arr, elem, acc) => {
    if (arr.length === 1 && elem !== arr[0]) {
      return null;
    } else if (arr.length === 1 && elem === arr[0]) {
      return 0;
    }


    const middleIndex = Math.floor(arr.length / 2);
    const middle = arr[middleIndex];

    if (elem === middle) {
      return middleIndex + acc;
    }

    if (elem < middle) {
      return loop(arr.slice(0, middleIndex), elem, acc);
    } else {
      return loop(arr.slice(middleIndex), elem, acc + middleIndex);
    }
  }

  return loop(arr, elem, 0);
}

const binarySearch = (arr, elem) => {

  if (arr.length === 0) {
    return null;
  }

  let low = 0;
  let high = arr.length - 1;
  let result = null;

  while (low <= high) {
    const middleIndex = low + Math.floor((high - low) / 2);
    const middle = arr[middleIndex];

    if (elem === middle) {
      result = middleIndex;
      break;
    }

    if (elem < middle) {
      high = middleIndex - 1;
    } else {
      low = middleIndex + 1;
    }
  }

  return result;
}

test("binarySearch", () => {
  let arr = [1, 3, 8, 11, 33, 34, 52, 100];
  assert.equal(binarySearch([]), null);
  assert.equal(binarySearch([3], 3), 0);
  assert.equal(binarySearch(arr, 1), 0);
  assert.equal(binarySearch(arr, 3), 1);
  assert.equal(binarySearch(arr, 8), 2);
  assert.equal(binarySearch(arr, 11), 3);
  assert.equal(binarySearch(arr, 33), 4);
  assert.equal(binarySearch(arr, 34), 5);
  assert.equal(binarySearch(arr, 52), 6);
  assert.equal(binarySearch(arr, 100), 7);
  assert.equal(binarySearch(arr, 1000), null);
});

test("binarySearchRecursive", () => {
  let arr = [1, 3, 8, 11, 33, 34, 52, 100];
  assert.equal(binarySearchRecursive([]), null);
  assert.equal(binarySearchRecursive([3], 3), 0);
  assert.equal(binarySearchRecursive(arr, 1), 0);
  assert.equal(binarySearchRecursive(arr, 3), 1);
  assert.equal(binarySearchRecursive(arr, 8), 2);
  assert.equal(binarySearchRecursive(arr, 11), 3);
  assert.equal(binarySearchRecursive(arr, 33), 4);
  assert.equal(binarySearchRecursive(arr, 34), 5);
  assert.equal(binarySearchRecursive(arr, 52), 6);
  assert.equal(binarySearchRecursive(arr, 100), 7);
  assert.equal(binarySearchRecursive(arr, 1000), null);
});

test.run();

