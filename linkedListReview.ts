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

//   printListData() {
//     let arr: number[] = [];
//     let current = this.head;
//     while (current) {
//       arr.push(current.value);
//       current = current.next;
//     }
//     return arr;
//   }

//   addDataFromBack(value: number) {
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

//   addFromFront(value: number) {
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

//   removeFromBack() {
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

//   removeFromFront() {
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
//   getIndexFrom(index: number) {
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
//     let data = this.getIndexFrom(index);
//     data.value = value;
//     return data;
//   }

//   addValueInBetwen(index: number, value: number) {
//     if (index < 0 || index > this.length) return undefined;
//     if (index === 0) return !!this.addFromFront(value);
//     if (index === this.length) return !!this.addDataFromBack(value);

//     let node = new Nodes(value);
//     let prev = this.getIndexFrom(index - 1);
//     let nextValue = prev.next;

//     prev.next = node;
//     node.next = nextValue;

//     this.length++;
//     return this;
//   }
//   removeDataInBetween(index: number) {
//     if (index < 0 || index > this.length) return undefined;
//     if (index === 0) return !!this.removeFromFront();
//     if (index === this.length) return !!this.removeFromBack();
//     let prev = this.getIndexFrom(index - 1);
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
//       next = node;
//       node = next;
//     }
//     return this;
//   }
// }

// let linked = new Linked();
// linked.addDataFromBack(2);
// linked.addDataFromBack(6);
// linked.addDataFromBack(9);
// linked.addDataFromBack(5);
// linked.addFromFront(8);
// linked.addFromFront(1);
// linked.removeFromBack();
// // linked.removeFromBack();
// // linked.removeFromFront();
// linked.changeValue(3, 20);
// linked.getIndexFrom(2);
// linked.addValueInBetwen(2, 45);
// linked.removeDataInBetween(2);
// linked.reverse();
// console.log(linked);
// console.log(linked.printListData());
// // console.log(linked);
