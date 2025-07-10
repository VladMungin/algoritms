// Линейный поиск
console.log('Линейный поиск')
const arrLinear = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

function linearSearch(arr: number[], item: number) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			return `Элемент ${arr[i]} находится под индексом ${i}`;
		}
	}
	return null;
}

console.log(linearSearch(arrLinear, 7));

// бинарный поиск

console.log('Бинарный поиск')

const arrBinary = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const arrBinaryRecursive = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


function binarySearch(arr: number[], item: number) {
	let start = 0;
	let end = arr.length;
	let middle;

	let found = false;
	let position = -1;

	while (found === false && start <= end) {
		middle = Math.floor((start + end) / 2);
		if (arr[middle] === item) {
			found = true;
			position = middle;
			return `Элемент ${item} находится под индексом ${position}`;
		}
		if (item < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
	}

	return `Элемент ${item} не найден`;
}

console.log(binarySearch(arrBinary, 9));

function binarySearchRecursive(arr: number[], item: number, start: number, end: number) {
	let middle = Math.floor((start + end) / 2);

	if(item === arr[middle]) {
		return `Элемент ${item} находится под индексом ${middle}`;
	}
	if(item < arr[middle]) {
		return binarySearchRecursive(arr, item, start, middle-1);
	} else {
		return binarySearchRecursive(arr, item, middle+1, end);
	}
}
console.log(binarySearchRecursive(arrBinaryRecursive, 9, 0, arrBinaryRecursive.length));

// Поиск в ширину
console.log('Поиск в ширину')
const graph: Record<string, string[]> = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph: Record<string, string[]>, start: string, end: string): boolean {
	let queue = []
	queue.push(start)
	while(queue.length > 0){
		const current = queue.shift() as string
		if(!graph[current]){
			graph[current] = []
		}
		if(graph[current].includes(end)){
			return true
		} else {
			queue = [...queue, ...graph[current]]
		}
	}
	return false
}

console.log(breadthSearch(graph, 'a', 'g'))
