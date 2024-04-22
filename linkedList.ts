import { notDeepEqual } from "assert";

class Noded {
  public data: number;
  public next: Noded | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class Linked {
  public head: Noded | null;
  public tail: Noded | null;
  public length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data: number) {
    let node = new Noded(data);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(value: number) {
    let node = new Noded(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
}

let linked = new Linked();
linked.push(8);
linked.push(3);
linked.push(9);
linked.push(0);
// linked.pop();
// linked.pop();
// linked.pop();
linked.shift();
linked.unshift(1);
linked.unshift(2);
console.log(linked);
