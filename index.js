class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // to add item into array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  // to get index of an array
  get(index) {
    return this.data[index];
  }
  // to delete the last item in array
  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  // deleting the first item
  shift() {
    const firstItem = this.data[0];
    // re-indexing, here we move the orange to index 0 and mango to 1
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    // now we are deleting the last item as its undefined as we moved the index before
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  // delete by index
  delete(index) {
    const item = this.data[index];
    // re-indexing
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    // deleting
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myNewArray = new MyArray();

myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("mango");
// myNewArray.pop();
// myNewArray.shift();
console.log(myNewArray.delete(0));
console.log(myNewArray);
