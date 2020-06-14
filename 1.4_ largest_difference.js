function maxDifference(arr) {
    let maxDiff = -1;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > min && maxDiff < arr[i] - min) {
        maxDiff = arr[i] - min;
      }
  
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return maxDiff;
  }
  
  console.log(maxDifference([7, 8, 4, 9, 9, 15, 3, 1, 10])); //2
 