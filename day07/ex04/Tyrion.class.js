class Tyrion extends Lannister {
    with(someone) {
        if (Object.getPrototypeOf(someone.constructor).name != "Lannister") {
            return ("Let's do this");
        }
        return ("Not even if I'm drunk !");
    }
}