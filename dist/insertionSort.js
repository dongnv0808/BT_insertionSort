"use strict";
class InsertionSort {
    static insertionSort(numbers) {
        for (let i = 1; i < numbers.length; i++) {
            let currentNumber = numbers[i];
            for (let j = i - 1; j >= 0; j--) {
                if (numbers[j] > currentNumber) {
                    numbers[j + 1] = numbers[j];
                    numbers[j] = currentNumber;
                }
            }
            console.log("numbers after the  " + i + "' sort: ");
            for (let k = 0; k < numbers.length; k++) {
                console.log(numbers[k] + "\t");
            }
            console.log();
        }
    }
}
InsertionSort.numbers = [5, 2, 3, 1, -4, 6, 6, 8, 8, 10, 9];
console.log("\nBegin sort processing...");
InsertionSort.insertionSort(InsertionSort.numbers);
