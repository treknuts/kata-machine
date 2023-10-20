type Node<T> = {
  value: t,
  next?: Node<T>
}

export default class Queue<T> {
  public length: number;
  public head?: Node<T>;
  public tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = {value: item} as Node<T>;
    this.length++;
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined
    }

    this.length--;

    const temp = this.head;
    this.head = this.head.next;
    temp.next = undefined;
    
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

}
