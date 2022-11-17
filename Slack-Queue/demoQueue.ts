export class Queue<T> {
    container: T[] = [];

    constructor() {
    }
    enqueue(item: T): void {
        this.container.push(item);
    }
    popQueue(): T | undefined{
        return this.container.pop()
    }
    dequeue(): T | undefined {
        return this.container.shift();
    }
    size(): number {
        return this.container.length
    }

}


let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(`da lay phan tu cuoi la :  ${queue.popQueue()}`)
console.log(`lay phan tu dau : ${queue.dequeue()}`)

