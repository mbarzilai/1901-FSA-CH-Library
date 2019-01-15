function split(arr) {
  const center = arr.length / 2
  return [
    arr.slice(0, center),
    arr.slice(center)
  ]
}


const merge = (left, right) => {
  const merged = [];
  let leftIdx = 0,
    rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }
  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);
  return merged;
}

const mergeSort = function (array) {
  if (array.length < 2) return array; // base case
  const splits = split(array),
    left = splits[0],
    right = splits[1]
  // console.log(splits)
  return merge(mergeSort(left), mergeSort(right)); // merge sorted!
}



/* ======== TESTING MERGESORT ======== */


const arr1 = []
const arr2 = [1]
const arr3 = [2, 1]
const arr4 = [2, 1, 5, 3, 8, 7, 10, 6]
const arr5 = '2153870649'.repeat(1000).split('').map(el => Number(el))
console.log('arr5', arr5)
// console.log(arr1 + " => " + mergeSort(arr1))
// console.log(arr2 + " => " + mergeSort(arr2))
// console.log(arr3 + " => " + mergeSort(arr3))
// console.log(arr4 + " => " + mergeSort(arr4))

const before = Date.now()
console.log(arr5 + " => " + mergeSort(arr5))
const after = Date.now()
console.log(`It took ${after - before} ms`)
