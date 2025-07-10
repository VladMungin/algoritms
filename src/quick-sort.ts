// Быстрая сортировка

console.log('Сортировка быстрая')
const arrQuick = [
	53, 12, 95, 27, 41, 66, 8, 73, 19, 34, 88, 2, 61, 46, 75, 30, 97, 15, 81, 39,
	64, 22, 92, 5, 70, 48, 13, 86, 31, 99, 24, 57, 42, 78, 10, 67, 35, 89, 16, 83,
	28, 94, 7, 51, 76, 21, 62, 44, 80, 33, 98, 14, 69, 40, 85, 26, 91, 4, 58, 47,
	72, 18, 96, 29, 82, 11, 63, 37, 90, 23, 55, 79, 6, 68, 45, 87, 32, 100, 20,
	74, 38, 93, 9, 60, 49, 84, 25, 71, 17, 65, 43, 88,
];
let countQuick = 0

function quickSort(arr:number[]): number[]{
	if(arr.length <= 1){
		return arr
	}
	let pivotIndex = Math.floor(arr.length / 2);
	let pivot = arr[pivotIndex];

	let less: number[] = []
	let greater: number[] = []

	for(let i = 1; i < arr.length; i++){
		if( i === pivotIndex){
			continue
		}
		if(arr[i]< pivot) {
			less.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
		countQuick++
	}

	return [...quickSort(less),pivot, ...quickSort(greater)];
}

console.log(quickSort(arrQuick));
console.log(countQuick);
