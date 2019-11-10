function findMinAndRemove(array) {
  let newMin = array[0];
  let newMinIndex = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < newMin) {
      newMin = array[i];
      newMinIndex = i;
    }
  }
  array.splice(newMinIndex, 1);
  return newMin;
}

function insertionSort(array) {
  let newMin;
  let sortedArray = [];
  while (array.length > 0) {
    newMin = findMinAndRemove(array);
    sortedArray.push(newMin);
  }
  return sortedArray;
}
