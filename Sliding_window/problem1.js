/**
 * In many problems dealing with an array (or a LinkedList),
 * we are asked to find or calculate something among all the contiguous subarrays 
 * (or sublists) of a given size. For example, take a look at this problem:
 * Let’s understand this problem with a real input:

    Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
    Here, we are asked to find the average of all contiguous subarrays of size ‘5’ in the given array.
 

//Brute Force

 Since for every element of the input array, we are calculating the sum of its next ‘K’ elements,
 the time complexity of the above algorithm will be 
 O(N∗K).
 O(N∗K) where ‘N’ is the number of elements in the input array.

*/
function averageOfSubarrays(subArraySize, inputArr) {
  let avgofSubArray = [];

  for (let i = 0; i <= inputArr.length - subArraySize; i++) {
    let sum = 0;
    let end = i + subArraySize;
    for (let j = i; j < end; j++) {
      sum = sum + inputArr[j];
    }
    let avg = sum / subArraySize;
    avgofSubArray.push(avg);
  }
  return avgofSubArray;
}
