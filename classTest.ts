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

//   getIndex(index: number) {
//     if (index < 0 || index > this.length) return false;
//     let current: any = this.head;
//     let call = 0;

//     while (index != call) {
//       current = current?.next;
//       call++;
//     }
//     return current;
//   }

//   getIndexValue(index: number) {
//     if (index < 0 || index > this.length) return false;
//     let val = this.getIndex(index);

//     return val.value;
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

//   pop() {
//     if (!this.head) return false;

//     let current = this.head;
//     let newtail = current;

//     while (current.next) {
//       newtail = current;
//       current = current.next;
//     }

//     this.tail = newtail;
//     this.tail!.next = null;

//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }

//     return this;
//   }

//   print() {
//     let arr: number[] = [];
//     let current: any = this.head;

//     while (current) {
//       arr.push(current.value);
//       current = current.next;
//     }

//     return arr;
//   }

//   shift() {
//     if (!this.head) return false;
//     let current = this.head;
//     this.head = current.next;

//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }

//     return this;
//   }

//   changevalue(index: number, value: number) {
//     if (index < 0 || index > this.length) return false;

//     let data = this.getIndex(index);
//     data.value = value;

//     return data;
//   }

//   addinbetween()
// }

// let linked = new Linked();
// // linked.unshift(3);
// // linked.unshift(9);
// // console.log(linked.getIndexValue(1));

// linked.push(3);
// linked.push(9);
// linked.push(5);
// linked.push(8);
// linked.push(6);

// // linked.pop();
// // linked.shift();

// console.log();

// linked.changevalue(2, 10);

// console.log(linked.print());
// console.log(linked);

console.clear();

// class Nodes {
//   public value: number;
//   public next: Nodes | null;
//   constructor(value: number) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stacks {
//   public first: Nodes | null;
//   public last: Nodes | null;
//   public length: number;
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }

//   push(value: number) {
//     let node = new Nodes(value);

//     if (!this.first) {
//       this.first = node;
//       this.last = node;
//     } else {
//       let prev = this.first;
//       this.first = node;
//       node.next = prev;
//     }

//     this.length++;
//     return this;
//   }

//   pop() {
//     if (!this.first) return false;

//     let current = this.first;

//     if (this.first === this.last) {
//       this.last = null;
//     }

//     this.first = this.first.next;

//     this.length--;
//     return current;
//   }
// }

// const stacks = new Stacks();
// stacks.push(3);
// stacks.push(4);
// stacks.push(6);
// stacks.push(2);
// stacks.push(9);

// console.log(stacks.pop());

// console.log(stacks);

class Nodes {
  public value: number;
  public next: Nodes | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// class Stacks {
//   public first: Nodes | null;
//   public last: Nodes | null;
//   public length: number;
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }

//   push(value: number) {
//     let node = new Nodes(value);

//     if (!this.first) {
//       this.first = node;
//       this.last = node;
//     } else {
//       let prev = this.first;
//       this.first = node;
//       node.next = prev;
//     }

//     this.length++;
//     return this;
//   }

//   pop() {
//     if (!this.first) return false;

//     let prev = this.first;

//     if (this.first === this.last) {
//       this.last = null;
//     }

//     this.first = this.first.next;

//     this.length--;
//     return prev.value;
//   }
// }

// let stacks = new Stacks();
// stacks.push(34);
// stacks.push(12);
// stacks.push(93);
// stacks.push(31);
// stacks.push(84);

// console.log(stacks.pop());
// console.log(stacks.pop());
// console.log(stacks.pop());
// console.log(stacks.pop());
// console.log(stacks.pop());
// console.log(stacks.pop());
// console.log(stacks.pop());

// console.log(stacks);

class Queses {
  head: Nodes | null;
  tail: Nodes | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: number) {
    let node = new Nodes(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    return this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    if (this.length === 0) {
      return undefined;
    }
    this.head = this.head.next;

    this.length--;
    return current.value;
  }
}

const queses = new Queses();

queses.push(2);
queses.push(3);
queses.push(4);
queses.push(5);

console.log(queses.pop());
// console.log(queses.pop());\
// console.log(queses.pop());
// console.log(queses.pop());
// console.log(queses.pop());
// console.log(queses.pop());

console.log(queses);
