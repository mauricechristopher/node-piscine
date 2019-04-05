class Lannister {
    sleepWith(someone) {
        console.log(this.with(someone));
    }
}

class Tyrion extends Lannister {
    with(someone) {
        if (Object.getPrototypeOf(someone.constructor).name != "Lannister") {
            return ("Let's do this");
        }
        return ("Not even if I'm drunk !");
    }
}

class Jamie extends Lannister {
    with(someone) {
        if (Object.getPrototypeOf(someone.constructor).name != "Lannister") {
            return ("Let's do this");
        }
        else if (someone.constructor.name == "Cersei") {
            return("With pleasure, but only in a tower in Winterfell, then.");
        }
        else {
            return ("Not even if I'm drunk !");
        }
    }
}

class Stark {
}

class Cersei extends Lannister {
}

class Sansa extends Stark {
}

let j = new Jamie();
let c = new Cersei();
let t = new Tyrion();
let s = new Sansa();

j.sleepWith(t);
j.sleepWith(s);
j.sleepWith(c);

t.sleepWith(j);
t.sleepWith(s);
t.sleepWith(c);