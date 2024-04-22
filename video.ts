// class Nodes {
//   public value: number;
//   public next: Nodes | null;
//   constructor(value: number) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Linked {
//   public head: Nodes | null;
//   public tail: Nodes | null;
//   public length: number;
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   printInto() {
//     let arr: number[] = [];
//     let current = this.head;
//     while (current) {
//       arr.push(current.value);
//       current = current.next;
//     }
//     return arr;
//   }

//   push(value: number) {
//     let node = new Nodes(value);
//     if (!this.head) {
//       this.head = node;
//       this.tail = this.head;
//     } else {
//       this.tail!.next = node;
//       this.tail = node;
//     }
//     this.length++;
//     return this;
//   }

//   unshift(value: number) {
//     let node = new Nodes(value);
//     if (!this.head) {
//       this.head = node;
//       this.tail = this.head;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }

//     this.length++;
//     return this;
//   }

//   pop() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail!.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return this;
//   }

//   shift() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     this.head = current.next;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return this;
//   }

//   getIndex(index: number) {
//     if (index < 0 || index > this.length) return undefined;

//     let count: number = 0;
//     let current: any = this.head;
//     while (count !== index) {
//       current = current.next;
//       count++;
//     }
//     return current;
//   }

//   changeValue(index: number, value: number) {
//     if (index < 0 || index > this.length) return undefined;
//     let data = this.getIndex(index);
//     data.value = value;
//     return data;
//   }

//   addValueInBetwen(index: number, value: number) {
//     if (index < 0 || index > this.length) return undefined;
//     if (index === 0) return !!this.unshift(value);
//     if (index === this.length) return !!this.push(value);

//     let node = new Nodes(value);
//     let prev = this.getIndex(index - 1);
//     let nextValue = prev.next;

//     prev.next = node;
//     node.next = nextValue;

//     this.length++;
//     return this;
//   }

//   removeDataInBetween(index: number) {
//     if (index < 0 || index > this.length) return undefined;
//     if (index === 0) return !!this.shift();
//     if (index === this.length) return !!this.pop();
//     let prev = this.getIndex(index - 1);
//     let nextValue = prev.next;
//     prev.next = nextValue.next;
//     this.length--;
//     return true;
//   }

//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let next: Nodes | null;
//     let prev: Nodes | null = null;

//     for (let i = 0; i < this.length; i++) {
//       next = node!.next;
//       node!.next = prev;

//       prev = node;
//       node = next;
//     }

//     return this;
//   }
// }

// let linked = new Linked();

// linked.push(2);
// linked.push(9);
// linked.push(6);
// linked.push(10);
// linked.unshift(7);
// linked.unshift(4);
// linked.pop();
// linked.pop();
// linked.shift();
// linked.shift();
// linked.push(5);
// linked.push(8);
// linked.push(12);
// linked.push(1);

// linked.changeValue(3, 47);
// linked.changeValue(0, 7);
// linked.addValueInBetwen(3, 34);
// linked.removeDataInBetween(3);

// console.log(linked);
// console.log(linked.printInto());
// linked.reverse();
// console.log(linked.printInto());
// console.log(linked.getIndex(3));
