//Intersection Types

interface Boat {
    name: string;
    start(): void;
}
interface Toy {
    name: string;
    color: string;
    price: number;
}

// Toy interface with Boat interface
// 인터페이스의 모든 조건(요소) 충족 해야한다.
const toyBoat: Toy & Boat = {
    name: "Titanic",
    start() {console.log("Merry Christmas")},
    color: "Blue",
    price: 30000
}
