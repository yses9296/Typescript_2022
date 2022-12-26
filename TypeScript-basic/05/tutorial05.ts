// Union Types

interface Car {
    name: "car";
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}

function getGift( gift: Car | Mobile ){
    console.log(gift.color);
    // gift.start();
    // if(gift.name === "car") gift.start();
    // else gift.call();
    gift.name === "car" ? gift.start() : gift.call()
}