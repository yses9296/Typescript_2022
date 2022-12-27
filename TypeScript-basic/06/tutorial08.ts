// 접근 제한자 (Access modifier) - public private protected
// public (default) : 자식 클래스 또는 클래스 인스턴스에서 접근 가능.
// private : 해당 클래스에서만 사용 가능. #으로 단축해서 사용가능, (예. private name: string === #name: string )
// protected : 자식 클래스만 접근 가능, 클래스 인스턴스에서는 접근 불가능.

// static: 정적 변수는 this로 접근 불가능. 클래스명으로 접근

class Person {
    name: string;
    phone: number;
    static age = 20;

    constructor(name: string){
        this.name = name;
    }
    intro(){
        console.log("Hello")
        // console.log(this.age)
        console.log(Person.age)
    }
}

class Student extends Person {
    constructor(name: string){
        super(name);
    }
    showName(){
        console.log(super.name);
    }
}

const newStudent = new Student("Eunseo");