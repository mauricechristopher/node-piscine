class Lannister {
    constructor() {
        console.log("A Lannister is born !");
    }
    getSize() {
        return "Average";
    }
    houseMotto() {
        return "Hear me roar!";
    }
}

class Tyrion extends Lannister {
    constructor () {
        super();
    }

    getSize() {
        return ("My name is Tyrion\n" + "Short");
    }
}

let tyrion = new Tyrion();

console.log(tyrion.getSize());
console.log(tyrion.houseMotto());