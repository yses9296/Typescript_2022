//Tutorial - Function

// Basic
function addFunc(num1: number, num2: number):void{
    console.log(num1 + num2)
}

function isAdultFunc(age: number): boolean{
    return age > 19;
}

// Optional parameter
function hello1(name?: string){
    return `Hello, ${name || "World"}`;
}
function hello2(name = 'world'){
    return `Hello, ${name}`;
}
const result1 = hello1();
const result2 = hello2('Eunseo');

// Optional parameter - order by
function hello3(name: string, age?: number): string {
    if( age !== undefined ){
        return `Hello, ${name}. Your age is ${age}`;
    }
    else{
        return `Hello, ${name}`;
    }
}
function hello4(age: number|undefined, name: string): string {
    if( age !== undefined ){
        return `Hello, ${name}. Your age is ${age}`;
    }
    else{
        return `Hello, ${name}`;
    }
}

console.log(hello3("Eunseo", 24))
console.log(hello4(undefined, "Eunseo"))

// Array parameter
function addFunc2(...nums: number[]){
    return nums.reduce( (a,c) => a+c )
}
addFunc2(1,2,3)
addFunc2(1,2,3,4,5,6,7)

// function - this
// interface User{
//     name: string;
// }

// const Eunseo: User = {name: "Eunseo"};

// function showName(this: User){
//     console.log(this.name)
// }
// const callName = showName.bind(Eunseo);
// callName()


//function overload
interface User{
    name: string;
    age: number;
}

function join(name:string, age: number): User;
function join(name:string, age: string): string;

function join(name: string, age: number | string):User | string {
    if(typeof age === "number"){
        return {name, age}
    }
    return "Input your age as number"
}
const eunseo1: User = join("Eunseo", 24)
const eunseo2: User = join("Eunseo", 24)