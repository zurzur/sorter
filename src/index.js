class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
  	let resultArray = [];
  	let sortedIndices = indices.sort((a, b) => a - b);
    for (let i = 0; i < sortedIndices.length; i++) {
    	resultArray.push(this.arr[sortedIndices[i]])
    }
    resultArray.sort(this.comparator);
    for (let i = 0; i < sortedIndices.length; i++) {
    	this.arr[sortedIndices[i]] = resultArray[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;