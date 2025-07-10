var reconstructQueue = function(people) {
	let q = new Array(people.length)
	for(let i = 0; i< people.length; i++){
		let minIndex = i
		for(let j = i+1; j<people.length;j++){
			if(people[minIndex][0] > people[j][0]){
				minIndex = j
			}
		}

		let temp = people[minIndex]
		people[minIndex] = people[i]
		people[i] = temp
	}

	console.log(people)

	for(let i =0;i<people.length;i++){
		let count = 0;
		for(let j= 0;j<q.length;j++){
			if(!q[j]){
				if(count == people[i][1]){
					q[j] = people[i];
					break;
				}
				count++;
			}
			else if( q[j][0] >= people[i][0]){
				count++;
			}
		}
	}

	return q
};

reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]])
