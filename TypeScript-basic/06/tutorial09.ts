// 추상 클래스 Abstract Class

abstract class Book {
    category: string
    constructor(category: string){
        this.category = category;
    }
    intro(){
        console.log("New book")
    }
}

// const harryPotter = new Book("Fiction") //ERROR

//추상 클래스를 상속받은 클래스에서 인스턴스 생성 가능
//또한 상속받은 추상 메소드는 재정의해서 반드시 구현해야한다.
class BestSeller extends Book {
    constructor(category: string){
        super(category)
    }
}

const pachinko = new BestSeller("Fiction")