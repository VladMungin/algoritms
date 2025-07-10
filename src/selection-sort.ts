// Сортировка выбором

console.log('Сортировка выбором')

const arrSelection = [
	53, 12, 95, 27, 41, 66, 8, 73, 19, 34, 88, 2, 61, 46, 75, 30, 97, 15, 81, 39,
	64, 22, 92, 5, 70, 48, 13, 86, 31, 99, 24, 57, 42, 78, 10, 67, 35, 89, 16, 83,
	28, 94, 7, 51, 76, 21, 62, 44, 80, 33, 98, 14, 69, 40, 85, 26, 91, 4, 58, 47,
	72, 18, 96, 29, 82, 11, 63, 37, 90, 23, 55, 79, 6, 68, 45, 87, 32, 100, 20,
	74, 38, 93, 9, 60, 49, 84, 25, 71, 17, 65, 43, 88,
];

let countSelection = 0

function selectionSort(arr: number[]) {
	for (let i = 0; i < arr.length; i++) {
		let indexMin = i;
		for (let j = i + 1; j < arr.length; j++) {
			countSelection++
			if (arr[j] < arr[indexMin]) {
				indexMin = j;
			}
		}
		let tmp = arr[i];
		arr[i] = arr[indexMin];
		arr[indexMin] = tmp;
	}
	return arr;
}

console.log(selectionSort(arrSelection));
console.log(countSelection)
