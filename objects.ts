type MyObj = {
    a: number;
    b: number;
    c: string;
}

interface MyObject {
   readonly a: number;
    b: number;
    c?: string;
}

const obj: MyObject = {a:3, b: 5, c: 'hello'}

const obj2: MyObject = {
    a:2,
     b: 4, 
    // c: 'hi'
}

obj2.b= 55;

// joinder the interfaces
interface IPerson {
    name: string;
}

interface IPerson {
    age: number;
}

interface IAccount {
    login: string;
    email: string;
    active: boolean;
}

interface IDeveloper extends IPerson, IAccount {
    skills: string[];
    level?: string;
}

const john: IDeveloper = {
    name: "John",
    age: 50,
    skills: ['JavaScript','TypeScript'],
    login: '',
    email: '',
    active: false
}

// joinder the types
type Person = {
    name: string;
    age: number;
}

type MyAccount = {
    email: string;
    login: string;
    active: boolean;
}

type MyDeveloper = {
    skilles: string[];
    level?: string; 
}

type MyFrontendDeveloper = Person & MyAccount & MyDeveloper;

const devArr: MyFrontendDeveloper[] = [];
