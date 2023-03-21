function mergeSort1(array1) {
    if (array1.length <= 1) {
      return array1;
    }
    let middle1= Math.floor(array1.length / 2);
    let left1 = array1.slice(0, middle1);
    const right1 = array1.slice(middle1);
    return merge1(mergeSort1(left1), mergeSort1(right1));
  }
  function merge1(left1, right1) {
    let result1 = [];
    let leftIndex1 = 0;
    let rightIndex1 = 0;
    while (leftIndex1 < left1.length && rightIndex1 < right1.length) {
      if (left1[leftIndex1] <= right1[rightIndex1]) {
        result1.push(left1[leftIndex1]);
        leftIndex1++;
      } else {
        result1.push(right1[rightIndex1]);
        rightIndex1++;
      }
    }
    return result1.concat(left1.slice(leftIndex1)).concat(right1.slice(rightIndex1));
}
  const num1 = [45, 12, 6, 89, 2, 5];
  const sortedNum1 = mergeSort1(num1);
  console.log(sortedNum1)
  function binarySearch(array1, target1) {
    let leftIndex1 = 0;
    let rightIndex1 = array1.length - 1;
    while (leftIndex1 <= rightIndex1) {
      const midIndex1 = Math.floor((leftIndex1 + rightIndex1) / 2);
      if (array1[midIndex1] === target1) {
        
        return midIndex1;
      } else if (array1[midIndex1] < target1) {
        leftIndex1 = midIndex1 + 1;
      } else {
        rightIndex1 = midIndex1 - 1;
      }
    }
    return null;
  }
  const target1 = 6;
  const targetIndex1 = binarySearch(sortedNum1, target1);
  console.log(targetIndex1);
  //Given an unsorted array of numbers return the sorted array in descending order

  function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] >= right[rightIndex]) {
      
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const num = [123,89,5,23,9,56];
const sortedNum = mergeSort(num);
console.log(sortedNum)


//let target = 34
//let arr2 = [1,4,78,2,67,3]
function mergeSort3(array3) {

if (array3.length <= 1) {
  return array3;
}
let middle3= Math.floor(array3.length / 2);
let left3 = array3.slice(0, middle3);
const right3 = array3.slice(middle3);
return merge3(mergeSort3(left3), mergeSort3(right3));
}
function merge3(left3, right3) {
let result3 = [];
let leftIndex3 = 0;
let rightIndex3 = 0;
while (leftIndex3 < left3.length && rightIndex3 < right3.length) {
  if (left3[leftIndex3] <= right3[rightIndex3]) {
    result3.push(left3[leftIndex3]);
    leftIndex3++;
  } else {
    result3.push(right3[rightIndex3]);
    rightIndex3++;
  }
}
return result3.concat(left3.slice(leftIndex3)).concat(right3.slice(rightIndex3));
}
const num3 = [1,4,78,67,3];
  
const sortedNum3 = mergeSort1(num3);
console.log(sortedNum3)
function binarySearch(array3, target3) {
let leftIndex3 = 0;
let rightIndex3 = array3.length - 1;
while (leftIndex3 <= rightIndex3) {
  const midIndex3 = Math.floor((leftIndex3 + rightIndex3) / 2);
  if (array3[midIndex3] === target3) {
    
    return midIndex3;
  } else if (array3[midIndex3] < target3) {
    leftIndex3 = midIndex3 + 1;
  } else {
    rightIndex3 = midIndex3 - 1;
  }
}

}
const target3 = 34;
const targetIndex3 = binarySearch(sortedNum3, target3);
console.log(targetIndex3);





