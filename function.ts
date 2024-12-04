// ---function-annotation--------------
const fn1 = (num: number):string => {
    return String(num)
}

// ---optional-parametets--------------
type Callback = (num: number) => string

function fn2(cb?: Callback) {
    if(cb === undefined) {
        cb = String
    }
    cb(15)
}

// ---default-parameters---------------
function createPoint(x: number = 0, y: number = 0):[number,number] {
    return [x, y]
}

createPoint(10)

// ---unpredictable-number-of-parameters--
function fn3(...nums: number[]): string {
    return nums.join('-')
}

// ---interfaces-and-function-parameters--
interface Printable {
    lable: string
}

function printReport(obj: Printable): void {
    console.log(obj.lable)
}

const drink = {
    lable: 'pepsi',
    price: 90
}

const phone = {
    lable: 'Huawei P10',
    category: 'smartphone'
}

printReport(phone)
printReport(drink)

// --passing the argument this way will result in an error
// printReport({lable:'', price: 50}) 

//---function-overloading-------------
function pickCard (x: number): { suit: string, card: number};
function pickCard (x: { suit: string, card: number}[]): number;

function pickCard(x): any {
    if (typeof x === 'object') {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if (typeof x === 'number') {
        return { suit: '', card: x % 13}
    }
}

pickCard([{suit: 'abc', card: 5}])