// ---first-example---------------------
const valueFactory = (x: number) => x;
const myValue = valueFactory(15);

type TypeFactory<X> = X;
type MyType = TypeFactory<number>;

// ---second-example--------------------
interface ValueContainer<Value> {
    value: Value;
}

type StringContainer = ValueContainer<string>

const x:StringContainer = {
    value: 'hello'
}

// ---third-example----------------------
class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index]
    }
}
// ---create-universal-class-----------------
class ArrayOfAnything<Type> {
    constructor(public collection: Type[]) {}

    get(index: number): Type {
        return this.collection[index]
    }
}

new ArrayOfAnything<string>(['2', 'ff', '55'])
new ArrayOfAnything<number>([3, 5, 8])

// ---example-with-function-------------------
function printString(arr: string[]): void {
    for(let i = 0; i < arr.length; i++) {
        console.log([i])
    }
}

function printNumbers(arr: number[]): void {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

// ---create-universal-function---------------
function printAnything<T>(arr: T[]): void {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printAnything<string>(['hi', 'by', 'yes'])
printAnything<number>([7, 9, 1])

// ---next-example---------------------------
function fillArray<T>(len: number, elem: T) {
    return new Array<T>(len).fill(elem);
}

const arr1 = fillArray<string>(10, '*')

// ---create-interface----------------------
interface Array<T> {
    concat(...items: Array<T[] | T>): T[];
    reduce<U>(
        callback: (state: U, element: T, index: number, array: T[]) => U,
        firstState?: U
    ): U;
}

// ---type-parameter-clarification---------------
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

const myObj = {
    a: 1,
    b: 2,
    c: 5
}
// K === 'a' | 'b' | 'c'

getProperty(myObj, 'b')