// списки
const arr = ['a','b','c'];

let el = arr[0]
let el2 = arr.pop()
arr.push('3')

const arr1:Array<number> = [1, 4]

const arr2: string[][] = []
arr2.push(['a','b'])

type MyType = string | number
const arr3: MyType[] = []


// кортежи (tuple)
const tuple1: [string, boolean,number] = ['abc', true, 5]

//csv
type SimpleCsv = [string,string,number]
const example: [string,string,number][] = [
    ['hi', 'by', 19]
]
