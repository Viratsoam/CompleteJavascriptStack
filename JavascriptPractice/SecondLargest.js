const findSecondLargest = (numberList) => {
    let firstLargest = Math.max();
    let secondLargest = Math.max();
    for (let i = 0; i < numberList.length; i++) {
        if (firstLargest < numberList[i]) {
            secondLargest = firstLargest;
            firstLargest = numberList[i];
        } else if (numberList[i] > secondLargest && firstLargest != numberList[i]) {
            secondLargest = numberList[i];
        }
    }
    return secondLargest;
}
const numberList = [10, 2, 3, 5, -1, 2, 7, 9, 8, 0, 1, 10];
const result = findSecondLargest(numberList);
console.log(result);
