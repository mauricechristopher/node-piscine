class Targaryen {
    resistsFire() {
        return false;
    }
    getBurned() {
        if (this.resistsFire() == true) {
            return ("emerges naked but unharmed");
        }
        else {
            return ("burns alive");
        }
    }
}

class Viserys extends Targaryen {
}

class Daenerys extends Targaryen {
    resistsFire() {
        return true;
    }
}

let viserys = new Viserys;
let daenerys = new Daenerys();

console.log("Viserys " + viserys.getBurned());
console.log("Daenerys " + daenerys.getBurned());