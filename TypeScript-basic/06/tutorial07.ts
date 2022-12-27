class Car {
    // case 2: 변수 선언
    color : string;
    constructor(color: string){
        this.color = color;
    }
    start(){
        console.log("Start");
    }
}

class Car2 {
    // case 2:
    // public 또는 readonly
    constructor( public color: string ){
        this.color = color;
    }
    start(){
        console.log("Start");
    }
}

const BMW = new Car("Blue");

// in JS
// class Car {
//     constructor(color){
//         this.color = color; //no error
//     }
//     start(){
//         console.log("Start");
//     }
// }
