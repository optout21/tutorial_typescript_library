import * as fibonacci from "fibonacci";

export function sayFibo(): void {
    const n = 50;
    const bigFibo = fibonacci.iterate(n);
    console.log(`fibo ${n}: ${bigFibo.number}`);
}
